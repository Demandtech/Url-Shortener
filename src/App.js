import React from 'react'
import stl from './styles/App.scss'

import Navbar from 'components/nav/Navbar'
import Hero from './components/hero/Hero'
import Form from 'components/form/Form'
import Advance from 'components/advance/Advance'
import StatisticCard from 'components/statistic/statisticCard'
import Boost from 'components/boost/Boost'
import Footer from 'components/footer/Footer'
function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className={stl.main}>
        <Form />
        <Advance />
        <StatisticCard />
        <Boost />
      </main>
      <Footer />
    </>
  )
}

export default App
