import React from 'react'

function GifList({gifs}) {

  return (

    <div className='gif-Container'>
        <ul>
            {gifs.map((gif) => (
                <li key={gif.id}>
                    <img className='gif-container-img' src={gif.images.original.url} alt={gif.slug} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default GifList