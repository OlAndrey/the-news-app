import React, { useState } from 'react'
import Link from 'next/link'
import PropTypes, { object } from 'prop-types';
import ArticleItemContainer from './ArticleItemContainer'

const ArticleList = ({
  isReverse,
  isLatestNews,
  name = 'latest',
  articlesDate
}) => {
  const data = []
  const pageSize = 6
  const [currentPage, setCurrentPage] = useState(0)
  const pagesCount = Math.ceil(articlesDate.length / pageSize) - 1

  if (!articlesDate.length)
    return <div>{name.toUpperCase()} news not found!</div>

  for (let i = 0; i < articlesDate.length; i += pageSize) {
    data.push(articlesDate.slice(i, i + pageSize))
  }

  return (
    <div className={isReverse ? 'bg-gray-200 py-4' : 'bg-gray-100 py-4'}>
      <div className="container mx-auto">
        {name !== 'latest' && (
          <div 
            className="w-full flex justify-between
              py-2 mb-2 px-8 border-b-2 border-gray-500"
          >
            <div 
              className="max-w-sm overflow-hidden 
                relative top-3.5 px-2 pb-2 border-b-4 
                text-2xl font-medium text-orange-400 border-orange-400 "
            >
              <Link href={`/news/${name}`}>{name.toUpperCase()}</Link>
            </div>
            <div className="relative top-3 h-8 flex flex-row">
              <button
                type="button"
                className="rounded-l-md border-2 border-gray-500 
                  hover:bg-gray-500 hover:text-white 
                  disabled:bg-gray-100 disabled:text-gray-500"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage <= 0}
              >
                <p className="ml-1 px-1 text-xl font-black">&#10094;</p>
              </button>
              <button
                type="button"
                className="rounded-r-md border-2 border-gray-500 
                  hover:bg-gray-500 hover:text-white 
                  disabled:bg-gray-100 disabled:text-gray-500"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage >= pagesCount}
              >
                <span className="mr-1 px-1 text-xl font-black">&#10095;</span>
              </button>
            </div>
          </div>
        )}
        <ArticleItemContainer
          items={data}
          currentPage={currentPage}
          isLatestNews={isLatestNews}
          isReverse={isReverse}
        />
      </div>
    </div>
  )
}

ArticleList.propTypes = {
  isReverse: PropTypes.bool,
  isLatestNews: PropTypes.bool,
  name: PropTypes.string,
  articlesDate: PropTypes.arrayOf(object).isRequired
}

export default ArticleList
