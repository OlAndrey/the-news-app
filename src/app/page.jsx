import React from 'react'
import ArticleList from './ArticleList'

const data = new Array(6).fill(0).map((val, i) => {
  return {
    id: i + Math.floor(Math.random() * 100000),
    author: 'Michael Rothstein',
    title: 'New Lions safety Jayron Kearse suspended three games',
    description:
      'Kearse, 26, signed with the Lions in March after four seasons in Minnesota, where he played in 62 games with five starts, making 79 tackles and defending eight passes.',
    url: 'https://www.espn.com/nfl/story/_/id/29572640/new-lions-safety-jayron-kearse-suspended-three-games',
    source: 'ESPN',
    image:
      'https://res.cloudinary.com/dtpqmlah5/image/upload/v1682495330/ygy37xzv8fd6lcxfowvb.jpg',
    category: 'sports',
    language: 'en',
    country: 'us',
    published_at: '2020-07-31T23:23:14+00:00'
  }
})

async function Homepage() {
  return (
    <div className="container">
      <ArticleList articlesDate={data} />
    </div>
  )
}

export default Homepage
