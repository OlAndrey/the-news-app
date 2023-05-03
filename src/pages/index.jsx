import React from 'react'
import ArticleList from '@/components/ArticleList'

const Homepage = ({data}) => {
  if (!data) return <div>Latest news not found!</div>

  return (
    <div className="container">
      <ArticleList articlesDate={data} isLatestNews={true} />
    </div>
  )
}

Homepage.getInitialProps = (ctx) => {
  const data = new Array(6).fill(0).map((item, index) => ({
    id: '467893067890' + index,
    author: 'Chris Wilson',
    title: 'Do you need a Covid booster to travel abroad from the UK?',
    description: `With summer fast approaching, we've got the Covid-related information you need to prepare for your trip abroad`,
    url: 'https://www.independent.co.uk/travel/news-and-advice/do-you-need-covid-booster-travel-abroad-b2331021.html',
    source: 'Independent',
    image:
      Math.random() < 0.5
        ? 'https://res.cloudinary.com/dtpqmlah5/image/upload/v1682495330/ygy37xzv8fd6lcxfowvb.jpg'
        : null,
    category: 'general',
    language: 'en',
    country: 'gb',
    published_at: '2023-05-03T10:16:58+00:00'
  }))

  return { data }
}

export default Homepage
