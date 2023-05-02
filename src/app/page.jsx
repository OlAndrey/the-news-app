'use client' // this is a client component

import React from 'react'
import ArticleList from './ArticleList'

const dataNews = new Array(6).fill(0).map((val, i) => {
  return {
    id: i + Math.floor(Math.random() * 100000),
    author: 'Michael Rothstein',
    title:
      'New Lions safety Jayron Kearse suspended three games. New Lions safety Jayron Kearse suspended three games. New Lions safety Jayron Kearse suspended three games',
    description:
      'Kearse, 26, signed with the Lions in March after four seasons in Minnesota, where he played in 62 games with five starts, making 79 tackles and defending eight passes.',
    url: 'https://www.espn.com/nfl/story/_/id/29572640/new-lions-safety-jayron-kearse-suspended-three-games',
    source: 'ESPN',
    image:
      Math.random() < 0.5
        ? 'https://res.cloudinary.com/dtpqmlah5/image/upload/v1682495330/ygy37xzv8fd6lcxfowvb.jpg'
        : null,
    category: 'sport',
    language: 'en',
    country: 'us',
    published_at: '2020-07-31T23:23:14+00:00'
  }
})

async function Homepage() {
  return (
    <div className="container">
      <ArticleList articlesDate={dataNews} isLatestNews={true} />
    </div>
  )
}

export default Homepage
