import Image from 'next/image'
import React from 'react'
import ArticleItemSide from './ArticleItemSide'
import ArticleItemCenter from './ArticleItemCentr'

const ArticleList = ({
  isReverse,
  isLatestNews,
  Name = 'Latest',
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

  if (!articlesDate.length) return <div>{Name} news not found!</div>

  return (
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
  )
}

export default ArticleList
