import React from 'react'
import Image from 'next/image'

const ArticleItemSide = ({ isBottom, isLatestNews, article, children }) => {
  return (
    <div className={"flex w-full p-2 border-b-2 border-gray-500 md:border-0 md:rounded " + (isBottom ? ' md:block md:w-1/3': ' ')}>
      <div className={"relative " + (article.image ? ' w-1/3' :' h-0') + (isBottom ? ' h-32 md:w-full md:h-32': ' h-40 md:w-1/2 md:h-40')}>
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
        <div className={"bg-black/30 w-full h-full absolute top-0 left-0 " + (article.image ? '' :'hidden md:block')} />
        {isLatestNews && (
          <div className="absolute border-t-4 border-orange-400 text-white top-4 translate-x-6 -translate-y-4">
            {article.category}
          </div>
        )}
      </div>
      <div className={" md:pt-0 pl-2 " + (article.image ? ' w-2/3' :' pt-16')  + (isBottom ? ' md:w-full': ' md:w-1/2')}>{children}</div>
    </div>
  )
}

export default ArticleItemSide
