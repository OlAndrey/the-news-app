import React from 'react'
import Image from 'next/image'

const ArticleList = ({ articlesDate }) => {
  return (
    <div className="flex flex-wrap mx-auto">
      <div className="w-full p-2 rounded md:w-1/2 relative">
        <Image
          className="top-0 left-0 object-cover"
          src={articlesDate[0].image}
          alt="Picture of the author"
          width={100}
          height={60}
          layout="responsive"
          objectFit="cover"
          quality={90}
        />
        <div className="bg-black/30 absolute top-0 left-0" />
        <div className="absolute text-white bottom-0.5 left-1/4 -translate-x-1/4 -translate-y-1/4">
          <p className="tex-red-500">
            {new Date(articlesDate[0].published_at).toLocaleDateString()}
          </p>
          <h3 className="text-2xl tex-red-700">{articlesDate[0].title}</h3>
        </div>
      </div>

      <div className="flex flex-col w-full p-2 rounded md:w-1/2">
        {articlesDate.slice(1, 3).map((value) => {
          return (
            <div
              key={value.id}
              className={'w-full p-2 flex flex-wrap rounded '}
            >
              <div className="pr-2 md:w-1/2">
                <Image
                  src={value.image}
                  alt="Picture of the author"
                  width={100}
                  height={60}
                  layout="responsive"
                  objectFit="cover"
                  quality={90}
                />
              </div>
              <div className="md:w-1/2">
                <p>{new Date(value.published_at).toLocaleDateString()}</p>
                <h3>{value.title}</h3>
              </div>
            </div>
          )
        })}
      </div>
      {articlesDate.slice(3, 6).map((value) => {
        return (
          <div key={value.id} className={'w-full p-2 rounded md:w-1/3'}>
            <Image
              src={value.image}
              alt="Picture of the author"
              width={100}
              height={60}
              layout="responsive"
              objectFit="cover"
              quality={90}
            />
            <p>{new Date(value.published_at).toLocaleDateString()}</p>
            <h3>{value.title}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default ArticleList
