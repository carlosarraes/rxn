import React from 'react'

const getRNumber = (num) => {
  return Math.ceil(Math.random()*num);
}


function App() {
  const [nsfw,setNsfw] = React.useState(false)
  const [num,setNum] = React.useState(getRNumber(2661))
  
  const handleX = () => {
    setNum(getRNumber(2661))
    setNsfw(false)
  }

  const handleN = () => {
    setNum(getRNumber(415595))
    setNsfw(true)
  }

  return (
    <main>
      <section className='content'>
        <h1><a href={nsfw ? `https://nhentai.to/g/${num}` : `https://xkcd.com/${num}`} target="_blank">{num}</a></h1>
      </section>
      <section className='controls'>
        <button className='btn xkcd left' onClick={handleX}>Outro</button>
        <button className='btn nhentai right' onClick={handleN}>Safadeza</button>
      </section>
    </main>
  )
}

export default App
