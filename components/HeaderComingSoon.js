import { Link } from '../routes';

const HeaderComingSoon = () => (
   <header id="header">
      <div className="grid-container pl-24" style={{marginRight: '0px', paddingRight: '0px'}}>
         <div className="grid-x grid-margin-x">
            <div className="cell auto">
               <div className="navigation">
               <div className="logo" style={{ cursor: 'pointer' }}>
                        <div className="logo-particle-none" style={{borderRight: '1px solid #ffffff', width: '80px', marginRight: '10px' }}>
                          <img src="/static/images/particle-logo-nav@3x.png" style={{ height: '80px', width: '80px' }} alt="CIAYO COMICS CONNECT" />
                        </div>
                           <Link to="/"><img src="/static/images/ciayo-logo.png" alt="CIAYO COMICS CONNECT" /></Link>
                        </div>
                  <ul id="menu-comiconnect" data-toggler=".open" data-animate="fade-in fade-out">
                  </ul>
                  <div className="responsive-menu">
                     <a href="#mobile-menu" data-toggle="body menu-comiconnect">
                        <span style={{display: 'none'}} className="fa fa-bars"></span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
)

export default HeaderComingSoon