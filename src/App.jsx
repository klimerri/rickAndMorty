import './App.css'
import { Header } from './header/Header.jsx'
import { Card } from './card/Card.jsx'
import { Paginator } from './paginator/Paginator.jsx'

function App() {
  return <>
    <Header />
    <div className='container'>
      <div className='wrapper'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <Paginator />
  </>
}

export default App
