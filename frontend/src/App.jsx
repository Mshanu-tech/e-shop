import { useState } from 'react'
import './app.css'
import Home from './Pages/User/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Home/>
    </>
  )
}

export default App
