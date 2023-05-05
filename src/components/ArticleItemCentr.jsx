import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const ArticleItemCenter = ({ article, isLatestNews, children }) => {
  const router = useRouter();
  const queryString = Object.entries(article)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const url = `/article/article?${queryString}`;

  return (
    <div className="w-full p-2 border-b-2 border-gray-500 md:border-0 md:rounded md:w-1/2">
      <div className="w-full h-full relative">
        {article.image ? (
          <Image
            width={750}
            height={250}
            src={article.image}
            alt={article.title || 'Picture of the author'}
            className="min-h-full max-h-80 w-full object-cover shadow-md"
            blurDataURL="https://res.cloudinary.com/dtpqmlah5/image/upload/v1683104604/white-blurred-background_1034-249_envdir.avif"
            placeholder="blur"
          />
        ) : (
          <div className="h-40 max-h-80 w-full object-cover shadow-md md:hidden" />
        )}

        <div
          onClick={() => router.push(url)} 
          className="bg-black/30 w-full h-full absolute top-0 left-0 cursor-pointer" 
        />
        {isLatestNews && (
          <Link
            href={`/news/${article.category.toLowerCase()}`}
            className="absolute border-t-4 border-orange-400 text-white top-4 translate-x-6 -translate-y-4 transition-all hover:text-lg"
          >
            {article.category}
          </Link>
        )}
        <div
          onClick={() => router.push(url)} 
          className="absolute text-white bottom-0.5 left-1/4 -translate-x-1/4 -translate-y-4 cursor-pointer"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default ArticleItemCenter
