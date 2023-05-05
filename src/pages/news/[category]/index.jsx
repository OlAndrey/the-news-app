import React from 'react'
import axios from 'axios'
import NewsList from '@/components/NewsList'

export async function getServerSideProps(context) {
    const { category } = context.params
  try {
    const res = await axios.get(
      `${process.env.FETCH_URL}categories=${category}&limit=30`
    )
    const resData = await res.data?.data

    return { props: { dataNews: resData, category } }
  } catch (error) {
    console.log(error)
    return { props: { dataNews: [], category } }
  }
}

const CategoryPage = ({ dataNews, category }) => {
  if (!dataNews.length) return <div>{category.toUpperCase()} news not found!</div>

  return (
        <NewsList
          name={category}
          articlesDate={dataNews}
        /> 
  )
}

export default CategoryPage
