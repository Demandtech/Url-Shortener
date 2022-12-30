import React from 'react'
import stl from './Boost.module.scss'

function Boost() {
  return (
    <section>
      <div className={stl.boostContainer}>
        <h2>Boost your links today</h2>
        <button className={stl.btn}>Get Started</button>
      </div>
    </section>
  )
}

export default Boost
