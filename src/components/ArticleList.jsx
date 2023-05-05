import React from 'react'
import ArticleItemSide from './ArticleItemSide'
import ArticleItemCenter from './ArticleItemCentr'
import Link from 'next/link'

const ArticleList = ({
  isReverse,
  isLatestNews,
  name = 'latest',
  articlesDate
}) => {
  const ArticleTitle = ({ date, title }) => {
    return (
      <>
        <p className="tex-red-500">{new Date(date).toLocaleDateString()}</p>
        <h3 className="text-2xl tex-red-700 text-ellipsis line-clamp-3">
          {title}
        </h3>
      </>
    )
  }

  if (!articlesDate.length)
    return <div>{name.toUpperCase()} news not found!</div>

  return (
    <div className={isReverse ? 'bg-gray-200 py-4' : 'bg-gray-100 py-4'}>
      <div className="container mx-auto">
        {name !== 'latest' && (
          <div className="w-full flex justify-between py-2 mb-2 px-8 border-b-2 border-gray-500">
            <div className="relative top-3.5 px-2 pb-2 border-b-4 text-2xl font-medium text-orange-400 border-orange-400 ">
              <Link href={`/news/${name}`}>{name.toUpperCase()}</Link>
            </div>
            <div className="relative top-3 h-8 flex flex-row">
              <button
                type="button"
                className="rounded-l-md border-2 border-gray-500 hover:bg-gray-500 hover:text-white disabled:bg-gray-100 disabled:text-gray-500"
                disabled={true}
              >
                <p className="ml-1 px-1 text-xl font-black">&#10094;</p>
              </button>
              <button
                type="button"
                className="rounded-r-md border-2 border-gray-500 hover:bg-gray-500 hover:text-white disabled:bg-gray-100 disabled:text-gray-500"
              >
                <span className="mr-1 px-1 text-xl font-black">&#10095;</span>
              </button>
            </div>
          </div>
        )}
        <div
          className={
            'flex flex-wrap mx-auto' + (isReverse ? ' flex-row-reverse' : '')
          }
        >
          <ArticleItemCenter
            article={articlesDate[0]}
            isLatestNews={isLatestNews}
          >
            <ArticleTitle
              date={articlesDate[0].published_at}
              title={articlesDate[0].title}
            />
          </ArticleItemCenter>

          <div className="flex flex-col-reverse  w-full rounded md:w-1/2">
            {articlesDate.slice(1, 3).map((articleDate) => (
              <ArticleItemSide
                key={articleDate.id || articleDate.published_at + Math.random()}
                article={articleDate}
                isLatestNews={isLatestNews}
              >
                <ArticleTitle
                  date={articleDate.published_at}
                  title={articleDate.title}
                />
              </ArticleItemSide>
            ))}
          </div>

          {articlesDate.slice(3, 6).map((articleDate) => (
            <ArticleItemSide
              key={articleDate.id || articleDate.published_at + Math.random()}
              article={articleDate}
              isBottom={true}
              isLatestNews={isLatestNews}
            >
              <ArticleTitle
                date={articleDate.published_at}
                title={articleDate.title}
              />
            </ArticleItemSide>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleList
