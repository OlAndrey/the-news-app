import React from 'react'
import axios from 'axios'
import NewsList from '@/components/NewsList'

export async function getServerSideProps(context) {
  const { term } = context.query
  try {
    const res = await axios.get(`${process.env.FETCH_URL}keywords=${term}&limit=24`)
    const resData = await res.data?.data

    return { props: { dataNews: resData, term } }
  } catch (error) {
    console.log(error)
    return { props: { dataNews: [], term } }
  }
}

const SearchPage = ({ dataNews, term }) => {
  if (!dataNews.length)
    return <div>Keyword search {term} did not return any results.</div>

  return (
    <div>
      <h1 className="headerTitle">Search Results for: {term}</h1>
      <NewsList articlesDate={dataNews} />
    </div>
  )
}

export default SearchPage
