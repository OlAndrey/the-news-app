import Image from 'next/image'
import React from 'react'

const ArticleList = ({ articlesDate, isLatestNews }) => {
  const ArticleTitle = ({ date, title }) => {
    return (
      <React.Fragment>
        <p className="tex-red-500">{new Date(date).toLocaleDateString()}</p>
        <h3 className="text-2xl tex-red-700 text-ellipsis line-clamp-3">
          {title}
        </h3>
      </React.Fragment>
    )
  }

  if (!articlesDate.length) return <div>News not found!</div>

  return (
    <div className="flex flex-wrap mx-auto">
      <div className="w-full p-2 rounded md:w-1/2">
        <div className="w-full h-full relative">
          {articlesDate[0].image && (
            <Image
              width={500}
              height={150}
              src={articlesDate[0].image}
              alt={articlesDate[0].title || 'Picture of the author'}
              className="min-h-full max-h-80 w-full object-cover shadow-md"
              blurDataURL="https://res.cloudinary.com/dtpqmlah5/image/upload/v1683104604/white-blurred-background_1034-249_envdir.avif"
              placeholder="blur"
            />
          )}

          <div className="bg-black/30 w-full h-full absolute top-0 left-0" />
          {isLatestNews && (
            <div className="absolute border-t-4 border-orange-400 text-white top-4 translate-x-6 -translate-y-4">
              {articlesDate[0].category}
            </div>
          )}
          <div className="absolute text-white bottom-0.5 left-1/4 -translate-x-1/4 -translate-y-4">
            <ArticleTitle
              date={articlesDate[0].published_at}
              title={articlesDate[0].title}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full rounded md:w-1/2">
        {articlesDate.slice(1, 3).map((articleDate) => (
          <div
            key={articleDate.id || articleDate.published_at}
            className="w-full p-2 flex flex-wrap rounded"
          >
            <div className="hidden md:block md:w-1/2 relative ">
              {articleDate.image && (
                <Image
                  width={250}
                  height={75}
                  src={articleDate.image}
                  alt={articleDate.title || 'Picture of the author'}
                  className="w-full h-32 object-cover shadow-md"
                  blurDataURL="https://res.cloudinary.com/dtpqmlah5/image/upload/v1683104604/white-blurred-background_1034-249_envdir.avif"
                  placeholder="blur"
                />
              )}
              <div className="bg-black/30 w-full h-full absolute top-0 left-0" />
              {isLatestNews && (
                <div className="absolute border-t-4 border-orange-400 text-white top-4 translate-x-6 -translate-y-4">
                  {articleDate.category}
                </div>
              )}
            </div>
            <div className="pl-2 md:w-1/2">
              <ArticleTitle
                date={articleDate.published_at}
                title={articleDate.title}
              />
            </div>
          </div>
        ))}
      </div>

      {articlesDate.slice(3, 6).map((articleDate) => (
        <div
          key={articleDate.id || articleDate.published_at}
          className="w-full p-2 rounded md:w-1/3"
        >
          <div className="w-full h-32 relative">
            {articleDate.image && (
              <Image
                width={250}
                height={75}
                src={articleDate.image}
                alt={articleDate.title || 'Picture of the author'}
                className="w-full h-32 object-cover shadow-md"
                blurDataURL="https://res.cloudinary.com/dtpqmlah5/image/upload/v1683104604/white-blurred-background_1034-249_envdir.avif"
                placeholder="blur"
              />
            )}
            <div className="bg-black/30 w-full h-full absolute top-0 left-0" />
            {isLatestNews && (
              <div className="absolute border-t-4 border-orange-400 text-white top-4 translate-x-6 -translate-y-4">
                {articleDate.category}
              </div>
            )}
          </div>
          <ArticleTitle
            date={articleDate.published_at}
            title={articleDate.title}
          />
        </div>
      ))}
    </div>
  )
}

export default ArticleList
