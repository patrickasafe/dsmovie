import { ReactComponent as GitHubIcon } from "assets/img/github.svg";
import './styles.css'

const Navbar = () => {
  return (
    <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1>DS Movie</h1>
          <a href="https://github.com/patrickasafe">
            <div className="dsmovie-contact-container">
              <GitHubIcon />
              <p className="dsmovie-contact-link">/patrickasafe</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
