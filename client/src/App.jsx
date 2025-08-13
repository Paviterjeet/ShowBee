import { useState } from 'react'
import Header from './components/Header'
import EventSlider from './components/EventSlider'
import CardComponent from './components/CardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      
      <EventSlider></EventSlider>
      <CardComponent></CardComponent>
    </>
  )
}

export default App
