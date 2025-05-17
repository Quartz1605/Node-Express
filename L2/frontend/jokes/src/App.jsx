import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
  const [jokes,setJokes] = useState([])

  //For using /api/jokes/ add a proxy by going into vite.config.js
  //Basically apne aap wo localhost wali line add ho jaati hai.
  //Also it solves CORS problem.

  useEffect(() => {

    axios.get("/api/jokes").then((response) => {setJokes(response.data)}).catch((error) => {console.log(error)}) //axios mein no need to do .json() wagera

  })

  return (
    <>
      <h1>Chai aur Pratham.</h1>
      <h2>Length of jokes : {jokes.length}</h2>
      {jokes.map((joke,index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}

    </>
  )
}

export default App
