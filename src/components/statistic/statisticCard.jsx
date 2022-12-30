import React from 'react'
import stats from '../../data/statistics'
import stl from './statisticCard.module.scss'

function statisticCard() {
  return (
    <div className={stl.container}>
      <span className={stl.underline}></span>
      {stats.map(stat => {
        const { id, img, desc, title } = stat
        return (
          <div key={id}>
            <div className={stl.img}>
              <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export default statisticCard
