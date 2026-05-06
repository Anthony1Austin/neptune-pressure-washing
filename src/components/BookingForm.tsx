'use client'

import { useCallback, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import type { BookingFormData } from '@/types'
import { trackEvent } from '@/lib/gtag'

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileError, setTurnstileError] = useState<string | null>(null)
  const turnstileRef = useRef<TurnstileInstance | null>(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>()

  const onTurnstileSuccess = useCallback((token: string) => {
    setTurnstileToken(token)
    setTurnstileError(null)
  }, [])

  const onTurnstileExpire = useCallback(() => {
    setTurnstileToken(null)
  }, [])

  const onSubmit = async (data: BookingFormData) => {
    if (turnstileSiteKey && !turnstileToken) {
      setTurnstileError('Please complete the verification below.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setTurnstileError(null)

    try {
      const payload: BookingFormData = {
        ...data,
        ...(turnstileToken ? { turnstileToken } : {}),
      }

      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTurnstileToken(null)
        turnstileRef.current?.reset()
        trackEvent('generate_lead', { method: 'booking_form' })
      } else {
        setSubmitStatus('error')
        turnstileRef.current?.reset()
        setTurnstileToken(null)
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neptune-dark-blue mb-2">
            Full Name *
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neptune-blue focus:border-transparent transition-all"
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neptune-dark-blue mb-2">
            Email *
          </label>
          <input
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neptune-blue focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neptune-dark-blue mb-2">
            Phone Number *
          </label>
          <input
            {...register('phone', { required: 'Phone number is required' })}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neptune-blue focus:border-transparent transition-all"
            placeholder="330-412-9330"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="propertyType" className="block text-sm font-medium text-neptune-dark-blue mb-2">
            Property type *
          </label>
          <select
            {...register('propertyType', { required: 'Please select a property type' })}
            id="propertyType"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neptune-blue focus:border-transparent transition-all"
          >
            <option value="">Select property type...</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial / business</option>
            <option value="hoa">HOA / multi-site</option>
            <option value="other">Other</option>
          </select>
          {errors.propertyType && (
            <p className="mt-1 text-sm text-red-600">{errors.propertyType.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-neptune-dark-blue mb-2">
            Service Needed *
          </label>
          <select
            {...register('service', { required: 'Please select a service' })}
            id="service"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neptune-blue focus:border-transparent transition-all"
          >
            <option value="">Select a service...</option>
            <option value="house-wash">House Wash</option>
            <option value="gutter-cleaning">Gutter Cleaning</option>
            <option value="roof-washing">Roof Washing</option>
            <option value="deck-cleaning">Deck Cleaning</option>
            <option value="driveway-cleaning">Driveway Cleaning</option>
            <option value="fence-cleaning">Fence Cleaning</option>
            <option value="patio-cleaning">Patio Cleaning</option>
            <option value="concrete-cleaning">Concrete Cleaning</option>
            <option value="brick-cleaning">Brick Cleaning</option>
            <option value="soft-washing">Soft Washing</option>
            <option value="power-washing">Power Washing</option>
            <option value="sidewalk-cleaning">Sidewalk Cleaning</option>
            <option value="other">Other</option>
          </select>
          {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-neptune-dark-blue mb-2">
            Service Address *
          </label>
          <input
            {...register('address', { required: 'Address is required' })}
            type="text"
            id="address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neptune-blue focus:border-transparent transition-all"
            placeholder="123 Main St, Massillon, OH"
          />
          {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
        </div>

        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-neptune-dark-blue mb-2">
            Preferred Date
          </label>
          <input
            {...register('preferredDate')}
            type="date"
            id="preferredDate"
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neptune-blue focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-neptune-dark-blue mb-2">
            Preferred Time
          </label>
          <select
            {...register('preferredTime')}
            id="preferredTime"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neptune-blue focus:border-transparent transition-all"
          >
            <option value="">Select time...</option>
            <option value="morning">Morning (9am-12pm)</option>
            <option value="afternoon">Afternoon (12pm-5pm)</option>
            <option value="evening">Evening (5pm-9pm)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neptune-dark-blue mb-2">
          Additional Details
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neptune-blue focus:border-transparent transition-all"
          placeholder="For commercial or large jobs, note approximate square footage, access (gates, loading areas), and scope. Any specific concerns or questions?"
        />
      </div>

      {turnstileSiteKey ? (
        <div className="flex flex-col items-center gap-2">
          <Turnstile
            ref={turnstileRef}
            siteKey={turnstileSiteKey}
            onSuccess={onTurnstileSuccess}
            onExpire={onTurnstileExpire}
            options={{ theme: 'light' }}
          />
          {turnstileError && (
            <p className="text-sm text-red-600 text-center">{turnstileError}</p>
          )}
        </div>
      ) : null}

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-lg"
        >
          <p className="font-semibold">Thank you! We've received your request.</p>
          <p className="text-sm mt-1">We'll contact you soon to schedule your service.</p>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border-2 border-red-200 text-red-800 px-6 py-4 rounded-lg"
        >
          <p className="font-semibold">Something went wrong.</p>
          <p className="text-sm mt-1">
            Please call or text us at <a href="tel:330-412-9330" className="underline font-bold">330-412-9330</a> or try again.
          </p>
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-neptune-blue hover:bg-neptune-dark-blue text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : (
          'Get Free Quote'
        )}
      </button>
    </form>
  )
}
