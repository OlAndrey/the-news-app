import React from 'react'
import ArticleList from '@/components/ArticleList'
import axios from 'axios'

export async function getServerSideProps() {
  try {
    const res = await axios.get(`${process.env.FETCH_URL}limit=6`)
    const resData = await res.data

    return { props: { dataNews: resData?.data } }
  } catch (error) {
    console.log(error)
    return { props: { dataNews: [] } }
  }
}

const Homepage = ({ dataNews }) => {
  if (!dataNews.length) return <div>Latest news not found!</div>

  return (
    <div className="container">
      <ArticleList articlesDate={dataNews} isLatestNews={true} />
    </div>
  )
}

export default Homepage
