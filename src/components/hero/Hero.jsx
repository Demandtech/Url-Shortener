import stl from './hero.module.scss'
import HeroImg from '../../asset/images/illustration-working.svg'

function hero() {
  return (
    <section>
      <div className={stl.heroContainer}>
        <div className={stl.left}>
          <h1>More than just shorter links </h1>
          <p>
            Build your brand’s recognition and get detailed <br /> insights on
            how your links are performing.
          </p>
          <div>
            <button className={stl.btn}>Get Started</button>
          </div>
        </div>
        <div className={stl.right}>
          <img src={HeroImg} alt="hero-img" width="100%" />
        </div>
      </div>
    </section>
  )
}

export default hero
