import { Link, Outlet } from 'react-router-dom'
/* import logo from '.img/logo.png' */
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <section>
          <ul className='navList navListLogo'>
            <li><Link to='/' className='navLink'> <img className='logo' src='./img/logo.png' alt='logo' /> </Link></li>
          </ul>
        </section>

        <section className='navItems'>
          <article className='nav'>
            <ul className='navList'>
              <li><Link to='/category/eléctrico' className='navLink'>Eléctrico</Link></li>
              <li><Link to='/category/maderas' className='navLink'>Maderas</Link></li>
              <li><Link to='/category/químicos' className='navLink'>Químicos</Link></li>
              <li><Link to='/cart'><CartWidget /></Link></li>
            </ul>
          </article>

          
        </section>

      </nav>

      <Outlet />
    </>
  )
}

export default Navbar
