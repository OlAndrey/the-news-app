import React from 'react'
import Image from 'next/image'

const ArticleItemSide = ({ isBottom, isLatestNews, article, children }) => {
  return (
    <div className={"p-2 border-b-2 border-gray-500 md:border-0 md:rounded " + (isBottom ? ' md:w-1/3': ' w-full flex flex-wrap')}>
      <div className={"hidden md:block relative " + (isBottom ? '': ' md:w-1/2')}>
        {article.image && (
          <Image
            width={500}
            height={150}
            src={article.image}
            alt={article.title || 'Picture of the author'}
            className="w-full h-32 object-cover shadow-md"
            blurDataURL="https://res.cloudinary.com/dtpqmlah5/image/upload/v1683104604/white-blurred-background_1034-249_envdir.avif"
            placeholder="blur"
          />
        )}
        <div className="bg-black/30 w-full h-full absolute top-0 left-0" />
        {isLatestNews && (
          <div className="absolute border-t-4 border-orange-400 text-white top-4 translate-x-6 -translate-y-4">
            {article.category}
          </div>
        )}
      </div>
      <div className="block md:hidden relative">
        <div className="bg-black/30 w-full h-full absolute top-0 left-0" />
        {isLatestNews && (
          <div className="absolute border-t-4 border-orange-400 md:text-white top-4 translate-x-6 -translate-y-4">
            {article.category}
          </div>
        )}
      </div>
      <div className={"pt-16 md:pt-0 pl-2 "  + (isBottom ? '': ' md:w-1/2')}>{children}</div>
    </div>
  )
}

export default ArticleItemSide
