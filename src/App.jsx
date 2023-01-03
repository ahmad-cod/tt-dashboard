import { useState } from 'react'
import './App.css'
import Activities from './components/Activities'
import HeroContainer from './components/HeroContainer'

function App() {
  const [timeframe, setTimeframe] = useState('daily')
  console.log('app', timeframe)

  const handleTimeframe = (props) => setTimeframe(props)

  return (
    <div className="App">
      <HeroContainer handleTimeframe={handleTimeframe}/>
      <Activities timeframe={timeframe}/>
    </div>
  )
}

export default App