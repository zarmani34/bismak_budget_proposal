import { useState } from 'react'
import Proposal from './components/Proposal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Proposal />
  )
}

export default App
