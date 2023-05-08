import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export async function getServerSideProps({ query }) {
  if ((query && Object.entries(query).length === 0) || !query)
    return {
      props: {
        article: null
      }
    }

  return {
    props: {
      article: query
    }
  }
}

const ArticlePage = ({ article }) => {
  if (!article) return <div>Article not found!</div>

  const articleDate = new Date(
    Date.parse(article.published_at.replace(' ', '+'))
  )

  return (
    <article className="container mx-auto p-4">
      <div className="flex mb-2 px-8 border-t-2 border-gray-500">
        <div className="px-2 border-t-4 text-lg text-orange-400 border-orange-400 ">
          <Link href="/">Home</Link>
          <span className=' text-black'> / </span>
          <Link href={`/news/${article.category}`}>{article.category}</Link>
        </div>
      </div>
      <section className="pb-2 px-2">
        <div className="px-4">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>
          <div className="flex justify-between">
            <h2 className="font-bold">By: {article.author || 'unknown'}</h2>
            <p className="pl-4">{articleDate.toLocaleString()}</p>
          </div>
          {article.image !== 'null' && (
            <Image
              width={1750}
              height={1250}
              src={article.image}
              alt={article.title || 'Picture of the author'}
              className="w-full max-w-2xl mx-auto h-auto
                    object-cover rounded-lg shadow-md"
              blurDataURL="https://res.cloudinary.com/dtpqmlah5/image/upload/v1683104604/white-blurred-background_1034-249_envdir.avif"
              placeholder="blur"
            />
          )}
          <p className="pt-4">{article.description}</p>
          <h2 className="font-bold py-4">Source: {article.source}</h2>
        </div>
      </section>
    </article>
  )
}

export default ArticlePage
