import { execSync } from 'node:child_process'
import { mkdir, appendFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { stdin as input, stdout as output } from 'node:process'
import { createInterface } from 'node:readline/promises'
import { Resend } from 'resend'

const getArgValue = (name) => {
  const index = process.argv.indexOf(name)
  if (index === -1) return undefined
  return process.argv[index + 1]
}

const hasArg = (name) => process.argv.includes(name)

const runGit = (command) => {
  return execSync(command, { encoding: 'utf8' }).trim()
}

const channelLabels = {
  email: 'email',
  sms: 'text message',
  both: 'email + text message',
}

const normalizeChannel = (value) => {
  if (!value) return 'email'
  const normalized = value.toLowerCase()
  if (!['email', 'sms', 'both'].includes(normalized)) {
    throw new Error('Invalid --channel value. Use email, sms, or both.')
  }
  return normalized
}

const buildDefaultSummary = (commitSubject) => {
  return `Quick update: I completed a website improvement today - ${commitSubject}. Everything is live and working. I will continue monitoring and making ongoing improvements.`
}

const appendLog = async ({ commitSha, subject, summary, sent, channel }) => {
  const logPath = resolve(process.cwd(), 'logs/client-update-log.md')
  await mkdir(dirname(logPath), { recursive: true })

  const lines = [
    `## ${new Date().toISOString()}`,
    `- Commit: ${commitSha}`,
    `- Subject: ${subject}`,
    `- Channel: ${channel}`,
    `- Sent: ${sent ? 'yes' : 'no'}`,
    `- Summary: ${summary}`,
    '',
  ]

  await appendFile(logPath, `${lines.join('\n')}\n`, 'utf8')
}

const sendEmailUpdate = async ({ summary, emailSubject }) => {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CLIENT_UPDATE_TO_EMAIL
  const from = process.env.CLIENT_UPDATE_FROM_EMAIL || process.env.RESEND_FROM_EMAIL

  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY')
  }
  if (!to) {
    throw new Error('Missing CLIENT_UPDATE_TO_EMAIL')
  }
  if (!from) {
    throw new Error('Missing CLIENT_UPDATE_FROM_EMAIL (or RESEND_FROM_EMAIL)')
  }

  const resend = new Resend(apiKey)
  await resend.emails.send({
    from,
    to,
    subject: emailSubject,
    text: summary,
  })
}

const sendSmsUpdate = async ({ summary }) => {
  const sid = process.env.TWILIO_ACCOUNT_SID
  const token = process.env.TWILIO_AUTH_TOKEN
  const from = process.env.TWILIO_FROM_NUMBER
  const to = process.env.CLIENT_UPDATE_TO_PHONE

  if (!sid) {
    throw new Error('Missing TWILIO_ACCOUNT_SID')
  }
  if (!token) {
    throw new Error('Missing TWILIO_AUTH_TOKEN')
  }
  if (!from) {
    throw new Error('Missing TWILIO_FROM_NUMBER')
  }
  if (!to) {
    throw new Error('Missing CLIENT_UPDATE_TO_PHONE')
  }

  const body = new URLSearchParams({
    To: to,
    From: from,
    Body: summary,
  })

  const auth = Buffer.from(`${sid}:${token}`).toString('base64')
  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    }
  )

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Twilio send failed: ${response.status} ${errorText}`)
  }
}

const main = async () => {
  const commitRef = getArgValue('--commit') || 'HEAD'
  const summaryOverride = getArgValue('--summary')
  const channel = normalizeChannel(getArgValue('--channel'))
  const autoApprove = hasArg('--yes')
  const dryRun = hasArg('--dry-run')

  const commitSha = runGit(`git rev-parse --short ${commitRef}`)
  const commitSubject = runGit(`git log -1 --format=%s ${commitRef}`)
  const changedFilesRaw = runGit(
    `git show --name-only --pretty=format: ${commitRef}`
  )
  const changedFiles = changedFilesRaw
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  const summary = summaryOverride || buildDefaultSummary(commitSubject)
  const emailSubject = `Website update completed (${commitSha})`

  console.log('\nClient Update Draft')
  console.log('-------------------')
  console.log(`Commit: ${commitSha}`)
  console.log(`Subject: ${commitSubject}`)
  console.log(`Channel: ${channelLabels[channel]}`)
  console.log(`Files changed (${changedFiles.length}):`)
  changedFiles.forEach((file) => console.log(`- ${file}`))
  console.log('\nMessage preview:')
  console.log(summary)
  console.log('')

  if (dryRun) {
    await appendLog({
      commitSha,
      subject: commitSubject,
      summary,
      channel,
      sent: false,
    })
    console.log('Dry run complete. No message sent.')
    return
  }

  let approved = autoApprove
  if (!approved) {
    const readline = createInterface({ input, output })
    const answer = await readline.question(
      `Approve and send this client update ${channelLabels[channel]} now? (y/N): `
    )
    readline.close()
    approved = answer.trim().toLowerCase() === 'y'
  }

  if (!approved) {
    await appendLog({
      commitSha,
      subject: commitSubject,
      summary,
      channel,
      sent: false,
    })
    console.log('Not sent. Draft saved to logs/client-update-log.md')
    return
  }

  if (channel === 'email') {
    await sendEmailUpdate({ summary, emailSubject })
  } else if (channel === 'sms') {
    await sendSmsUpdate({ summary })
  } else {
    await sendEmailUpdate({ summary, emailSubject })
    await sendSmsUpdate({ summary })
  }

  await appendLog({
    commitSha,
    subject: commitSubject,
    summary,
    channel,
    sent: true,
  })

  console.log(`Client update ${channelLabels[channel]} sent and logged.`)
}

main().catch((error) => {
  console.error(`Error: ${error.message}`)
  process.exit(1)
})
