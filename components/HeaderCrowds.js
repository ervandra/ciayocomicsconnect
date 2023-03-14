import React, { Component } from 'react';
import { Link } from '../routes';

class HeaderCrowds extends Component {
   render() {
      const { selectedSection } = this.props;
      return(
         <header id="header">
            <div className="grid-container" style={{ marginRight: '0px', paddingRight: '0px' }}>
               <div className="grid-x grid-margin-x">
                  <div className="cell auto">
                     <div className="navigation">
                        <div className="logo" style={{ cursor: 'pointer' }}>
                           <Link to="/">
                              <img src="/static/images/ciayo-logo.png" alt="CIAYO COMICS CONNECT" />
                           </Link>
                        </div>
                        <ul id="menu-comiconnect" data-toggler=".open" data-animate="fade-in fade-out">
                           <li data-menuanchor="about" className={selectedSection === 'about' ? 'active' : ''}>
                              <a href="#about" onClick={() => this.props.selectMenu('about')}>About</a>
                           </li>
                           <li data-menuanchor="our-booth" className={selectedSection === 'our-booth' ? 'active' : ''}>
                              <a href="#our-booth" onClick={() => this.props.selectMenu('our-booth')}>Our Booth</a>
                           </li>
                           <li data-menuanchor="pict-the-stars" className={selectedSection === 'pict-the-stars' ? 'active' : ''}>
                              <a href="#pict-the-stars" onClick={() => this.props.selectMenu('pict-the-stars')}>Pick the Stars</a>
                           </li>

                           <li data-menuanchor="contact" className={selectedSection === 'contact' ? 'active' : ''}>
                              <a href="#contact" onClick={() => this.props.selectMenu('contact')}>Contact Us</a>
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

export default HeaderCrowds;