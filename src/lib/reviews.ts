export type ManualReview = {
  name: string
  rating: number
  text: string
  date: string
  dateLabel: string
  totalReviews?: string
  highlight?: string
  photoUrl?: string
}

export const manualReviews: ManualReview[] = [
  {
    name: 'E F',
    totalReviews: '6 reviews',
    rating: 5,
    date: '2026-04-27',
    dateLabel: 'a week ago',
    highlight: '“Extremely professional approach on large projects.”',
    text:
      'Working for a large Health System, we have used Neptune on a number of projects. Extremely professional approach to handling a lot of different cleaning and washing projects. I would highly recommend Neptune - Thomas, on any project!!',
  },
  {
    name: 'Karen Todd',
    totalReviews: '3 reviews',
    rating: 5,
    date: '2025-07-23',
    dateLabel: '6 months ago',
    highlight: '“Our concrete looks brand new again.”',
    photoUrl: '/images/reviews/karen-todd.jpg',
    text:
      "My husband and I were very pleased with the work we had done with Neptune Pressure Washing. Our concrete was very dirty and I didn't think the stains would ever come out. To my surprise he took his time and did an excellent job. Looks brand new again. I would highly recommend his company. Thomas is great to work with",
  },
  {
    name: 'Linda Teis',
    totalReviews: '6 reviews',
    rating: 5,
    date: '2025-08-01',
    dateLabel: '5 months ago',
    highlight: '“Professional, thorough, and quality work.”',
    photoUrl: '/images/reviews/linda-teis.jpg',
    text:
      'Tom is professional, likeable, thorough and informative of his process. He answers all questions and responds to communications in a timely manner. Prices reasonable and quality work! I will refer him often if someone needs pressure washing.',
  },
  {
    name: 'Marilyn Puffer',
    totalReviews: '3 reviews',
    rating: 5,
    date: '2025-05-01',
    dateLabel: '8 months ago',
    highlight: '“Fantastic job on my house.”',
    text:
      "Neptune power washing did a fantastic job on my house that hadn't been cleaned for years. I would definitely recommend!",
  },
  {
    name: 'Azhar Saikaly',
    totalReviews: '1 review · 4 photos',
    rating: 5,
    date: '2023-07-01',
    dateLabel: '2 years ago',
    highlight: '“He made my house look really clean.”',
    photoUrl: '/images/reviews/azhar-saikaly.jpg',
    text:
      'Thomas is very professional, and was a perfectionist when it came to cleaning, very flexible scheduling, his price was reasonable and he made my house look really clean, I was amazed after looking at the before and after photos. I would recommend him over many other power washers.',
  },
  {
    name: 'Mary F.',
    rating: 5,
    date: '2024-06-01',
    dateLabel: '2024',
    highlight: '“My house looks like I had it painted.”',
    text:
      "Thomas is very professional & meticulous. My house looks like I had it painted. The gutters had that black stuff & now that are the original color. He went above & beyond in pressure cleaning my house, wood deck, white composite fence & other small things that were not even in the quote. Would give him a 10 star review if I could. I'm very happy & very satisfied.",
  },
]

export const sortedManualReviews = [...manualReviews].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export const renderStars = (rating: number) => {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}
