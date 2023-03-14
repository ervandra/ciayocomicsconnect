import React, { Component } from 'react';
import { Link } from '../routes';

class HeaderCreator extends Component {
   render() {
      const { selectedSection } = this.props;
      return(
         <header id="header">
            <div style={{ marginRight: '0px', marginLeft: '0px' }}>
               <div className="grid-x grid-margin-x grid-padding-x">
                  <div className="cell auto">
                     <div className="navigation">
                        <div className="logo" style={{ cursor: 'pointer' }}>
                        <div className="logo-particle-none" style={{ marginRight: '10px' }}>
                          <img src="/static/images/particle-logo-nav@3x.png" style={{ height: '80px', width: '80px' }} alt="CIAYO COMICS CONNECT" />
                        </div>
                           <Link to="/"><img src="/static/images/ciayo-logo.png" alt="CIAYO COMICS CONNECT" /></Link>
                        </div>
                        <ul id="menu-comiconnect" data-toggler=".open" data-animate="fade-in fade-out">
                        <li data-menuanchor="home" className={selectedSection === 'home' ? 'active' : ''}>
                              <a href="#home" onClick={() => this.props.selectMenu('home')}>Home</a>
                           </li>
                           <li data-menuanchor="about" className={selectedSection === 'about' ? 'active' : ''}>
                              <a href="#about" onClick={() => this.props.selectMenu('about')}>About</a>
                           </li>
                           <li data-menuanchor="speaker" className={selectedSection === 'speaker' ? 'active' : ''}>
                              <a href="#speaker" onClick={() => this.props.selectMenu('speaker')}>Speaker</a>
                           </li>
                           <li data-menuanchor="schedule" className={selectedSection === 'schedule' ? 'active' : ''}>
                              <a href="#schedule" onClick={() => this.props.selectMenu('schedule')}>Schedule</a>
                           </li>
                           <li data-menuanchor="past-journey" className={selectedSection === 'past-journey' ? 'active' : ''}>
                              <a href="#past-journey" onClick={() => this.props.selectMenu('past-journey')}>Past Journey</a>
                           </li>
                           <li data-menuanchor="contact" className={selectedSection === 'contact' ? 'active' : ''}>
                              <a href="#contact" onClick={() => this.props.selectMenu('contact')}>Contact Us</a>
                           </li>

                           <li>
                              <a className="btn-daftar" href="https://docs.google.com/forms/d/1ed6xZZhAGqrZKbybdc_13xrBPH63KUy58xqJ1PYw1Mw/edit">DAFTAR</a>
                           </li>
                        </ul>
                        <div className="responsive-menu">
                           <a href="#mobile-menu" data-toggle="body menu-comiconnect">
                              <span className="fa fa-bars"></span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      )
   }
}


export default HeaderCreator;