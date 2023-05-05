import React from 'react'
import ArticleItemSide from './ArticleItemSide'
import ArticleItemCenter from './ArticleItemCentr'

const NewsList = ({ name = 'latest', articlesDate }) => {
  const data = []

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

  for (let index = 0; index < articlesDate.length; index += 6) {
    data.push(articlesDate.slice(index, index + 6))
  }

  return (
    <>
      {name !== 'latest' && (
        <div className="w-full flex justify-between py-2 mb-2 px-8 border-b-2 border-gray-500">
          <div className="relative top-3.5 px-2 pb-2 border-b-4 text-2xl font-medium text-orange-400 border-orange-400 ">
            {name.toUpperCase()}
          </div>
        </div>
      )}
      {data.map((articlesDate, index) => (
        <div
          key={'3456789098765' + index}
          className={index % 2 !== 0 ? 'bg-gray-200 py-4' : 'bg-gray-100 py-4'}
        >
          <div className="container mx-auto">
            <div
              className={
                'flex flex-wrap mx-auto' +
                (index % 2 !== 0 ? ' flex-row-reverse' : '')
              }
            >
              <ArticleItemCenter article={articlesDate[0]}>
                <ArticleTitle
                  date={articlesDate[0].published_at}
                  title={articlesDate[0].title}
                />
              </ArticleItemCenter>

              <div className="flex flex-col-reverse  w-full rounded md:w-1/2">
                {articlesDate.slice(1, 3).map((articleDate) => (
                  <ArticleItemSide
                    key={
                      articleDate.id || articleDate.published_at + Math.random()
                    }
                    article={articleDate}
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
                  key={
                    articleDate.id || articleDate.published_at + Math.random()
                  }
                  article={articleDate}
                  isBottom={true}
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
      ))}
    </>
  )
}

export default NewsList
