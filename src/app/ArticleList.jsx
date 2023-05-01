import React from 'react'
import Image from 'next/image'

const ArticleList = ({ articlesDate }) => {
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

  const ArticleImage = ({ src }) => {
    return (
      <Image
        className="top-0 left-0 object-cover"
        src={src}
        alt="Picture of the author"
        width={100}
        height={60}
        layout="responsive"
        objectFit="cover"
        quality={90}
      />
    )
  }

  return (
    <div className="flex flex-wrap mx-auto">
      <div className="w-full p-2 rounded md:w-1/2 relative">
        <ArticleImage src={articlesDate[0].image} />
        <div className="bg-black/30 absolute top-0 left-0" />
        <div className="absolute text-white bottom-0.5 left-1/4 -translate-x-1/4 -translate-y-1/4">
          <ArticleTitle
            date={articlesDate[0].published_at}
            title={articlesDate[0].title}
          />
        </div>
      </div>

      <div className="flex flex-col w-full rounded md:w-1/2">
        {articlesDate.slice(1, 3).map((articleDate) => {
          return (
            <div
              key={articleDate.id}
              className={'w-full p-2 flex flex-wrap rounded '}
            >
              <div className="pr-2 md:w-1/2">
                <ArticleImage src={articleDate.image} />
              </div>
              <div className="md:w-1/2">
                <ArticleTitle
                  date={articleDate.published_at}
                  title={articleDate.title}
                />
              </div>
            </div>
          )
        })}
      </div>
      {articlesDate.slice(3, 6).map((articleDate) => {
        return (
          <div key={articleDate.id} className={'w-full p-2 rounded md:w-1/3'}>
            <ArticleImage src={articleDate.image} />
            <ArticleTitle
              date={articleDate.published_at}
              title={articleDate.title}
            />
          </div>
        )
      })}
    </div>
  )
}

export default ArticleList
