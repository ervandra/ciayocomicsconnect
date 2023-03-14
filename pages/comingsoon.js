import React, { Component } from 'react';
import { withRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Link } from '../routes';

const Header = dynamic(() => import('../components/HeaderComingSoon'), {
   loading: () => null,
});

class ComingSoon extends Component {
   render() {
      return(
         <>
            <Header />
            <div className="section" data-anchor="pict-the-stars">
               <div className="content-comingsoon">

                  <div className="grid-x grid-padding-x align-center-middle text-center grid-m-comingsoon" style={{ height: '100%' }}>
                     <div className="cell small-12 mb-comingsoon">
                        <img className="lp-mobile-comingsoon" width="200px" src="/static/assets/images/features/particle-logo.png" />
                        <h1 className="title-comingsoon">COMING SOON: CROWD</h1>
                        <hr className="hr-comingsoon" />
                        <p className="detail-comingsoon">Tidak hanya meramaikan. Kamu juga ikut menentukan creator mana yang akan mewakili kota kamu. Nantikan.</p>
                        <Link to="/creator" ><a className="btn-comingsoon" style={{ display: 'none' }}>KE HALAMAN CREATOR</a></Link>
                     </div>
                  </div>
                  <div className="section-copyright">
                     <div className="grid-container">
                        <div className="grid-x grid-margin-x">
                           <div className="cell small-12">
                              <div className="copyright">
                                 <div className="copyright-text">&copy; 2019 CIAYO Corp</div>
                                 <div className="site-identity">
                                    <img src="/static/images/logo-project-3.png" alt="CIAYO Stream" width="57" height="16" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </>
      )
   }
}

export default withRouter(ComingSoon);