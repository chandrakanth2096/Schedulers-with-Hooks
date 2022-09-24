import {useState, useEffect} from 'react'

import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'

const Clock = () => {
  const [date, setDate] = useState(new Date())

  const tick = () => {
    setDate(new Date())
    console.log('Timer updated in state')
  }

  useEffect(() => {
    const timerId = setInterval(tick, 1000)
    console.log('TIMER CALLED')
    return () => {
      clearInterval(timerId)
      console.log('Cleanup Function is Executed')
    }
  }, [])

  return (
    <>
      {console.log('Component is rendered')}
      <ClockContainer>
        <Heading>Clock</Heading>
        <ClockImage
          src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
          alt="clock"
        />
        <Time>{date.toLocaleTimeString()}</Time>
      </ClockContainer>
    </>
  )
}

export default Clock
