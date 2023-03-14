import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { Link } from '../routes';

class Home extends Component {

   componentDidMount() {
      // window.$(document).foundation()
   }

   render() {
      return(
         <div className="background-home">
            <div className="section-footers fp-auto-height-responsive">
               <div className="section-articles pb-0">
                  <div className="grid-container">
                     <div className="grid-x grid-margin-x align-center">
                        <div className="cell small-12">
                           <div className="article text-center ">
                              <div className="flex-jc">
                              <div className="logo-index">
                                 <Link to="/"><img src="/static/images/logo-ciayo-comics-white.png" />
                                 </Link>
                                 
                              </div>
                              <div></div>
                              <div style={{borderLeft: '1px solid #ffffff' }}><h1 className="logo-text">COMICONNECT 2019</h1></div>
                              </div>
                              <h1 className="title">Wadah bertemunya seni & bisnis</h1>

                              <div className="grid-x" style={{height: '140px'}}>
                                 <div className="cell small-12 medium-12 large-12 grid-x align-center">
                                    <Link to="/creator"><span className="btn-creator" style={{cursor: 'pointer'}}>MASUK</span></Link>
                                 </div>

                                 <div className="cell small-12 medium-12 large-6 grid-x align-center" style={{display: 'none'}}>
                                    <Link to="/comingsoon"><span className="btn-creator" style={{cursor: 'pointer'}}>CROWD</span></Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="section-footer-content-index">
                  <div className="grid-container p-0">
                     <div className="grid-x">
                        <div className="cell small-12 medium-6">
                           <div className="footer-content">
                              <h2>CIAYO ComiConnect</h2>
                              <p>
                              Website resmi untuk CIAYO ComicConnect; event yang berhasil menghubungkan para pelaku dan komunitas komik lokal di 11 kota untuk saling terhubung dan berkolaborasi. 
                              </p>
                           </div>
                        </div>
                        <div className="cell small-12 medium-6">
                           <div className="footer-content footer-right">
                              <h2>ComiConnect: Particle</h2>
                              <p>
                              “Pairing artpreneur with localpreneur” atau Particle, adalah misi CIAYO ComiConnect Tour tahun ini. Misi untuk mewadahi pelaku bisnis dan pelaku seni untuk bertemu dan bekerja sama.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="section-copyright-index">
                  <div className="grid-container">
                     <div className="grid-x align-center">
                        <div className="cell small-12">
                           <div className="copyright">
                              <div className="copyright-text">
                                 &copy; 2019 CIAYO Corp
                              </div>
                              <div className="site-identity">
                                 <img src="/static/images/logo-project-3.png" alt="CIAYO COMICS" width="57" height="16" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default withRouter(Home);