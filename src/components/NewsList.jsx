import React from 'react'
import ArticleItemContainer from './ArticleItemContainer'

const NewsList = ({ name = 'latest', articlesDate }) => {
  const data = []

  if (!articlesDate.length)
    return <div>{name.toUpperCase()} news not found!</div>

  for (let index = 0; index < articlesDate.length; index += 6) {
    data.push(articlesDate.slice(index, index + 6))
  }

  return (
    <>
      {name !== 'latest' && (
        <div className="container flex justify-between py-2 mb-2 mx-auto px-8 border-b-2 border-gray-500">
          <div className="relative top-3.5 px-2 pb-2 border-b-4 text-2xl font-medium text-orange-400 border-orange-400 ">
            {name.toUpperCase()}
          </div>
        </div>
      )}
      {data.map((articleDate, index) => (
        <div
          key={'3456789098765' + index}
          className={index % 2 !== 0 ? 'bg-gray-200 py-4' : 'bg-gray-100 py-4'}
        >
          <div className="container mx-auto">
            <ArticleItemContainer
              items={[articleDate]}
              currentPage={0}
              isReverse={index % 2 !== 0}
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default NewsList
