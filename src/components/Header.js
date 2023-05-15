import React from 'react';

function Header(props) {
  return (
    <header className="row d-flex align-items-center text-white " style={{ height: "15vh", backgroundColor: "#2BAE66" }}>
      <div className="col-md-2 mx-5 rainbow">
        <h2 style={{ color: "#FCEDDA" }}>CJ Adorna</h2>
      </div>
      <div className="col-md-8 text-center">
        <nav className="w-100">
          <ul className="d-flex justify-content-between " style={{ margin: "0", padding: "0" }}>
            <li className="mx-5 d-inline-block rainbow ">
            <button onClick={() => props.handleNavigationClick('AboutMe')} style={{ fontSize: "2rem", color: "#FCEDDA", textDecoration: "none", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>About Me</button>
            </li>
            <li className="mx-5 d-inline-block rainbow">
            <button onClick={() => props.handleNavigationClick('Portfolio')} style={{ fontSize: "2rem", color: "#FCEDDA", textDecoration: "none", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>Portfolio</button>
            </li>
            <li className="mx-5 d-inline-block rainbow">
            <button onClick={() => props.handleNavigationClick('Contact')} style={{ fontSize: "2rem", color: "#FCEDDA", textDecoration: "none", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>Contact</button>
            </li>
            <li className="mx-5 d-inline-block rainbow" >
            <button onClick={() => props.handleNavigationClick('Resume')} style={{ fontSize: "2rem", color: "#FCEDDA", textDecoration: "none", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>Resume</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

