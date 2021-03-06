import LoginContainer from './login_container';
import DemoContainer from "./demo_container";
import SignupContainer from './signup_container';
import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SignupForm from './signup';



const Splash = (props) => {
    return(
      <div className='splash'>
        <div className='main'>
          <div className='darker-background'>
          <nav className='nav-bar'>

              <img src="https://fontmeme.com/permalink/200604/3150eaf395337ebc34eca4aae8e3c0bf.png"
              alt="netflix-font"
              border="0"
                width='125'
                height='50'
                id='logo'/>

              <ul className='buttons'>
              <li>
                <a href='https://github.com/Haloriginee'>
                  <i className="fab fa-github" id='splash-fab'></i>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/phoking'>
                  <i className="fab fa-linkedin" id='splash-fab'></i>
                </a>
              </li>
                <li>
                  <DemoContainer />
              </li>
              <li>
                  <Link to='/signin' >
                    <button id='signinbtn'>Sign In</button>
                  </Link>

              </li>
              </ul>
          </nav>

          <div className='mid'>
          <h2>Phoking Hangsome</h2>
          <h3>  Still on Beta Test </h3>
          </div>
            <SignupContainer />
          <p className='signup-text'>Ready to test? Enter a random email .</p>

        </div>
        </div>


          <div className='tv'>

          <div className='tv-text'>
            <h2>Having fun.</h2>
            <br/>
            <p>Bla Bla Bla bla Bla Bla bla.</p>
          </div>

            <img src={window.tvURL} width="400" height="400"/>

          </div>


          <div className='phone'>
            <div className='phone-text'>
            <h2> Download your shows to watch offline.</h2>
            <p> Save your favorites easily and always have something to watch.</p>
            </div>

          <img src={window.mobileURL} width="400" height="400" />

          </div>

        <div className='watch'>
          <div className='watch-text'>
            <h2>Watch everywhere.</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
          </div>

          <img src={window.deviceURL} width="400" height="400" />

        </div>

      <footer className='splash-footer'>
          <ul className='buttons'>
          <li id='splash-questions'>What The Pho?</li>
            <li>
              <a href='https://github.com/Haloriginee'>
                <i className="fab fa-github" id='splash-fab'></i>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/phoking'>
                <i className="fab fa-linkedin" id='splash-fab'></i>
              </a>
            </li>
            </ul>


      </footer>



      </div>


    )
};

export default Splash;
