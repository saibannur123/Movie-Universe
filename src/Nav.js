import "./App.css";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/" id="navA">
            <i className="fa fa-camera-retro" id="icon"></i>
            <span id="navsymbol">MovieUniverse</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
