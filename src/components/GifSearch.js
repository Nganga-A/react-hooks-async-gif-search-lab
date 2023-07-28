import React,{ useState} from 'react'

function GifSearch({onSubmit}) {
    
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchQuery);
      };


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='SearchGif'
            />
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default GifSearch