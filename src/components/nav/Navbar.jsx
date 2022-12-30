import stl from './Navbar.module.scss'
import { ReactComponent as Logo } from '../../asset/images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

// const Header = () => {
//   return (
//     <header>
//       <Navbar />
//     </header>
//   );
// };

function Navbar() {
  const [navOpen, setNavOpen] = useState(true)

  const handleNav = () => {
    setNavOpen(navOpen)
  }
  return (
    <nav className={stl.navbar}>
      <div className={stl.container}>
        <div className={stl.logo}>
          <div>
            <Logo />
          </div>

          <button className="hamburgers" onClick={handleNav}>
            <FaBars className={stl.close} />
          </button>
        </div>

        {navOpen ? (
          <div className={stl.navContainer}>
            <ul>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Resources</a>
              </li>
            </ul>

            <div className={stl.btnContainer}>
              <a href="/">Login</a>

              <a className={stl.btn} href="/">
                Sign Up
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar
