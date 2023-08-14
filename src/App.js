function App() {
  return (
    <Navbar>
      <li>X</li>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        { props.children }
      </ul>
    </nav>
  );
}

function NavItem(props) {
  return (
    <li className="nav-item">

    </li>
  );
}
export default App;