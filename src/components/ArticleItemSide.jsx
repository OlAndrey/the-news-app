import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames/bind'
import { useRouter } from 'next/navigation'
import PropTypes from 'prop-types'

const ArticleItemSide = ({ isBottom, isLatestNews, article, children }) => {
  const router = useRouter()
  const queryString = Object.entries(article)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
  const url = `/article/article?${queryString}`

  return (
    <div
      className={classNames(
        'flex w-full p-2 border-b-2 border-gray-500',
        'md:border-0 md:rounded cursor-pointer',
        {
          'md:block md:w-1/3': isBottom
        }
      )}
    >
      <div
        className={
          'relative ' +
          (article.image ? ' w-1/3' : ' h-0') +
          (isBottom ? ' h-32 md:w-full md:h-32' : ' h-40 md:w-1/2 md:h-40')
        }
      >
        {article.image && (
          <Image
            width={500}
            height={150}
            src={article.image}
            alt={article.title || 'Picture of the author'}
            className="w-full h-full object-cover shadow-md"
            blurDataURL="https://res.cloudinary.com/dtpqmlah5/image/upload/v1683104604/white-blurred-background_1034-249_envdir.avif"
            placeholder="blur"
          />
        )}
        <div
          onClick={() => router.push(url)}
          className={classNames(
            'bg-black/30 w-full h-full absolute top-0 left-0 cursor-pointer',
            { 'hidden md:block': !article.image }
          )}
        />
        {isLatestNews && (
          <Link
            href={`/news/${article.category.toLowerCase()}`}
            className={classNames(
              'absolute border-t-4 border-orange-400',
              'text-white top-4 translate-x-6 -translate-y-4',
              'transition-all hover:text-lg'
            )}
          >
            {article.category}
          </Link>
        )}
      </div>
      <div
        onClick={() => router.push(url)}
        className={
          ' md:pt-0 pl-2 cursor-pointer ' +
          (article.image ? ' w-2/3' : ' pt-16') +
          (isBottom ? ' md:w-full' : ' md:w-1/2')
        }
      >
        {children}
      </div>
    </div>
  )
}

ArticleItemSide.propTypes = {
  isBottom: PropTypes.bool,
  isLatestNews: PropTypes.bool,
  article: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
}

export default ArticleItemSide
