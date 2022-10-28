import React from 'react';
import '../CSS/Navbar.css';

function Navbar() {


    // var dd_main = document.querySelector(".dd_main");

    // dd_main.addEventListener("click", function () {
    //   this.classList.toggle("active");
    // });


  return (
    <>
       <div className="wrapper">
      <div className="navbar">
        <div className="logo">
          <a href="#">logo</a>
        </div>
        <header>
          <ul className="nav">
            <li><a href="http://google.com" className="active">Scholarship</a></li>
            <li><a href="http://google.com">Student Article</a></li>
            <li><a href="http://google.com">Results</a></li>
            <li><a href="http://google.com">Contact Us</a></li>
          </ul>
        </header>

        <div className="input-group">
          <div className="form-outline">
            <input type="search" id="form1" className="form-control" />
            <label className="form-label" for="form1">
              <i className="fas fa-search"></i>
            </label>
          </div>
        </div>
        <div className="nav_right">
          <ul>
            <li className="nr_li dd_main">
              <i className="fas fa-bars" ></i>

              <div className="dd_menu">
                <div className="dd_left">
                  <ul>
                    <li><i className="fas fa-lock"></i></li>
                    <li><i className="fas fa-user"></i></li>
                    <li><i className="fas fa-book fa-fw"></i></li>
                    <li><i className="fas fa-check-square"></i></li>
                  </ul>
                </div>
                <div className="dd_right">
                  <ul>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Scholarship_Ebooks</li>
                    <li>Educational loan</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar