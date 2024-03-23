import { useState } from 'react'
import Header from './header';
import MainBody from './mainBody';
import Cards from './Cards';
import Footer from './footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />
       <MainBody />
       <Cards />
       <Footer />
       
       
    </>
  )
}

export default App
