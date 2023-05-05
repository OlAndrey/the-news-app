import React from 'react'
import ArticleList from '@/components/ArticleList'
import axios from 'axios'

export async function getServerSideProps() {
  const categories = {
    general: 0,
    business: 0,
    entertainment: 0,
    health: 0,
    science: 0,
    sports: 0,
    technology: 0
  }
  try {
    const dataNews = []
    const res = await axios.get(`${process.env.FETCH_URL}limit=6`)
    const resData = await res.data?.data
    dataNews.push(['latest', resData])

    for (const key in categories) {
      categories[key] = resData.filter((i) => i.category === key).length
      try {
        const res = await axios.get(
          `${process.env.FETCH_URL}categories=${key}&limit=${
            24 + categories[key]
          }`
        )
        const resData = await res.data?.data
        dataNews.push([key, resData.slice(categories[key])])
      } catch (error) {
        dataNews.push([key, []])
      }
    }
    return { props: { dataNews } }
  } catch (error) {
    console.log(error)
    return { props: { dataNews: [] } }
  }
}

const Homepage = ({ dataNews }) => {
  if (!dataNews.length) return <div>The news not found!</div>

  return (
    <>
      {dataNews.map((val, index) => (
        <ArticleList
          key={new Date() + index}
          name={val[0]}
          articlesDate={val[1]}
          isLatestNews={index === 0}
          isReverse={index % 2 === 1}
        />
      ))}
    </>
  )
}

export default Homepage
