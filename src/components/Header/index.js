import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
//<AiFillHome />
//<IoMdClose />
//<BsInfoCircleFill />
import Popup from 'reactjs-popup'
import './index.css'

const Header = () => (
  <nav className="nav">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="imagelogo"
      />
    </Link>
    <div>
      <Popup
        trigger={
          <button type="button" data-testid="hamburgerIconButton" aria-label="close">
            <GiHamburgerMenu />
          </button>
        }
        position="right center"
      >
        {close => (
          <div>
            <ul>
              <li>
                <AiFillHome />
                <Link to="/">Home</Link>
              </li>
              <li>
                <BsInfoCircleFill />
                <Link to="/about">About</Link>
              </li>
            </ul>
            <button onClick={close} data-testid="closeButton" aria-label="close">
              <IoMdClose />
            </button>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)
export default Header
