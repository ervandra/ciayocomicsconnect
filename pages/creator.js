import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from '../routes';

const Header = dynamic(() => import('../components/HeaderCreator'), {
   loading: () => null,
});

class Creator extends Component {
   state = {
      selectedSection: 'home',
   }

   selectMenu = (e) => {
      this.setState({
         selectedSection: e
      })
   }

   onLeave(origin, destination, direction) {
      this.setState({
         selectedSection: destination.anchor
      })
   }

   componentDidMount() {
      window.$(document).foundation();
   }

   render() {
      const { selectedSection } = this.state;

      const Home = (
         <div className="background-home">
         <div className="section-footers fp-auto-height-responsive">
            <div className="section-articles container-c-1 pb-0">
               <div className="grid-container">
                  <div className="grid-x grid-margin-x align-center">
                     <div className="cell small-12">
                        <div className="article text-center ">
                        <img src="/static/assets/images/features/LOGO-PARTICLE-GIF.gif" className="mi-about" style={{ height: '200px' }} alt="" />
                           <br /><br />
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
                              <div className="cell small-12 medium-12 large-6 grid-x align-center">
                                 <div ><span className="btn-creator" data-open="reveal-ciayo-comiconnect" style={{cursor: 'pointer'}}>CIAYO COMICONNECT</span></div>
                              </div>

                              <div className="cell small-12 medium-12 large-6 grid-x align-center" >
                                 <div ><span className="btn-creator" data-open="reveal-comiconnect-particle" style={{cursor: 'pointer'}}>COMICONNECT: PARTICLE</span></div>
                              </div>
                              <a href="#about" className="scroll-down"></a>
                           </div>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
      )

      const About = (
         <div className="content-creator-1">
            <div className="grid-container container-c-1">
               <div className="grid-x grid-margin-x align-center">
                  <div className="cell small-12 medium-10 large-10">
                     <div className="article m-about">
                        <div className="section-subtitle">
                           <h2></h2>
                        </div>
                        <div className="grid-x grid-margin-x align-midle align-justify">
                           <div className="cell small-12 medium-12 large-5 grid-x align-center">
                              <img src="/static/assets/images/features/about-creator-01@3x.png" className="mi-about" style={{ height: '300px' }} alt="" />
                           </div>
                           <div className="cell small-12 medium-12 large-7">
                              <div className="features">
                                 <h2 className="ls-1 about-c">ABOUT CREATORS</h2>
                                 <hr className="hr-about-creator" />
                                 <h6 className="text-about-creator">
                                 Adalah kamu, para creator; comic creator, art creator, idea creator dan penembus batas. Untuk bergabung bersama kami dan ikut mengembangkan industri seni dan bisnis di kota kamu.
                              </h6>

                                 <a href="https://docs.google.com/forms/d/1ed6xZZhAGqrZKbybdc_13xrBPH63KUy58xqJ1PYw1Mw/edit" className="btn-about">YUK, DAFTAR SEKARANG</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )

      const Speaker = (
         <div className="content-creator-2">
            <div className="grid-container container-c-2 orbit-desktop-speaker">
               <div className="grid-x grid-margin-x align-center">
                  <div className="cell small-12 medium-10 large-10">
                     <div className=" article">
                        <div className="section-subtitle">
                           <h2 className="ls-1">MEET THE SPEAKER</h2>
                        </div>
                        <div className="features-slideshow">
                           <div className="orbit" role="region" aria-label="CIAYO Stream Videos" data-orbit>
                              <div className="orbit-wrapper">
                                 <div className="orbit-controls orbit-controls-m">
                                    <button className="orbit-previous">
                                       <img src="/static/images/backgrounds/arrow-left.png" />
                                    </button>
                                    <button className="orbit-next">
                                       <img src="/static/images/backgrounds/arrow-right.png" />
                                    </button>
                                 </div>
                                 <ul className="orbit-container ">
                                    <li className="is-active orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">YOGYAKARTA</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                                <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-mice.png" width="240" alt="" data-open="reveal-subscription-direct" />
                                                   </div>
                                                   <h4>Misrad</h4>
                                                   <p>Creator of Mice Cartoon</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-subscription-direct">SPEAKER BIO</a>
                                                </div>
                                                <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-Pakci-starcross.png" width="240" alt="" data-open="reveal-author-pachiek" />
                                                   </div>
                                                   <h4>Pachiek</h4>
                                                   <p>Manager of Starcross</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-pachiek">SPEAKER BIO</a>
                                                </div>
                                                <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-freshmen.png" width="240" alt="" data-open="reveal-author-freshmen" />
                                                   </div>
                                                   <h4>Freshmen Team</h4>
                                                   <p> Author of Freshman</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-freshmen">SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">MALANG</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                                <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-sweta.png" width="240" alt="" data-open="reveal-author-sweta-kartika" />
                                                   </div>
                                                   <h4>Sweta Kartika</h4>
                                                   <p>Author of Grey Jingga</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-sweta-kartika">SPEAKER BIO</a>
                                                </div>
                                                <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-TRI.png" width="240" alt="" data-open="reveal-author-tri" />
                                                   </div>
                                                   <h4>Tri Wahyu</h4>
                                                   <p>Owner of ZeroHeroes</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-tri">SPEAKER BIO</a>
                                                </div>
                                                <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-achmad fadly.png" width="240" alt="" data-open="reveal-author-akhmad-fadly" />
                                                   </div>
                                                   <h4>Akhmad Fadly</h4>
                                                   <p>Author of Sampana</p>
                                                   <br />
                                                   <a className="btn-lihat-detail" data-open="reveal-author-akhmad-fadly">SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">MEDAN</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                                <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-jasmine.png" width="240" alt="Editorial Based" data-open="reveal-author-jasmine-surkatty" />
                                                   </div>
                                                   <h4>Jasmine Surkatty</h4>
                                                   <p> Author of Komik Ga Jelas</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-jasmine-surkatty">SPEAKER BIO</a>
                                                </div>
                                                <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-betty lorensia.png" width="240" alt="Interest Based" data-open="reveal-author-betty-lorensia" />
                                                   </div>
                                                   <h4>Betty Lorensia</h4>
                                                   <p>Owner of LetterbyBetty</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-betty-lorensia">SPEAKER BIO</a>
                                                </div>
                                                <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-julian.png" width="240" alt="Mobile Based" data-open="reveal-author-julian-syahputra" />
                                                   </div>
                                                   <h4>Julian Syahputra</h4>
                                                   <p>Author of Sengklekman</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-julian-syahputra">SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">BANDUNG</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                                <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-jasmine.png" width="240" alt="" data-open="reveal-author-jasmine-surkatty" />
                                                   </div>
                                                   <h4>Jasmine Surkatty</h4>
                                                   <p> Author of Komik Ga Jelas</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-jasmine-surkatty" >SPEAKER BIO</a>
                                                </div>
                                                <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-FAY.png" width="240" alt="" data-open="reveal-author-fai" />
                                                   </div>
                                                   <h4>Faidhan</h4>
                                                   <p>Co-owner of KITC</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-fai">SPEAKER BIO</a>
                                                </div>
                                                <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-feiruz.png" width="240" alt="" data-open="reveal-author-fei" />
                                                   </div>
                                                   <h4>Fei Rizani</h4>
                                                   <p>Author of Imaginarium</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-fei">SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                                
                              </div>
                              <nav className="orbit-bullets" style={{display: 'none'}}>
                                 <button className="is-active" data-slide="0">
                                    BDG
                                </button>
                                 <button data-slide="1">
                                    JOG
                                </button>
                                 <button data-slide="2">
                                    JKT
                                </button>
                                 <button data-slide="3">
                                    MDN
                                </button>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="grid-container container-c-2 orbit-mobile-speaker">
               <div className="grid-x grid-margin-x align-center">
                  <div className="cell small-12 medium-10 large-10">
                     <div className=" article">
                        <div className="section-subtitle">
                           <h2 className="ls-1">MEET THE SPEAKER</h2>
                        </div>
                        <div className="features-slideshow">
                           <div className="orbit" role="region" aria-label="CIAYO Stream Videos" data-orbit>
                              <div className="orbit-wrapper">
                                 <div className="orbit-controls orbit-controls-m">
                                    <button className="orbit-previous">
                                       <img src="/static/images/backgrounds/arrow-left.png" />
                                    </button>
                                    <button className="orbit-next">
                                       <img src="/static/images/backgrounds/arrow-right.png" />
                                    </button>
                                 </div>
                                <ul className="orbit-container ">
                                    <li className="is-active orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">YOGYAKARTA</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                             <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-mice.png" width="240" alt="Editorial Based" data-open="reveal-subscription-direct" />
                                                   </div>
                                                   <h4>Misrad</h4>
                                                   <p>Creator of Mice Cartoon</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-subscription-direct">SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="is-active orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">YOGYAKARTA</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                                 <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-Pakci-starcross.png" width="240" alt="Interest Based" data-open="reveal-author-pachiek" />
                                                   </div>
                                                   <h4>Pachiek</h4>
                                                   <p>Manager of Starcross</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-pachiek">SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="is-active orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">YOGYAKARTA</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                                 <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-freshmen.png" width="240" alt="Mobile Based" data-open="reveal-author-freshmen" />
                                                   </div>
                                                   <h4>Freshmen Team</h4>
                                                   <p> Author of Freshman</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-freshmen">SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">MALANG</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                                 <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-sweta.png" width="240" alt="" data-open="reveal-author-sweta-kartika" />
                                                   </div>
                                                   <h4>Sweta Kartika</h4>
                                                   <p>Author of Grey Jingga</p>
                                                   <br />
                                                   <a className="btn-lihat-detail" data-open="reveal-author-sweta-kartika">SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">MALANG</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                                 <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-TRI.png" width="240" alt="" data-open="reveal-author-tri" />
                                                   </div>
                                                   <h4>Tri Wahyu</h4>
                                                   <p>Owner of ZeroHeroes</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-tri" >SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">MALANG</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                                 <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-achmad fadly.png" width="240" alt="" data-open="reveal-author-akhmad-fadly" />
                                                   </div>
                                                   <h4>Akhmad Fadly</h4>
                                                   <p>Author of Sampana</p>
                                                   <br />
                                                   <a className="btn-lihat-detail" data-open="reveal-author-akhmad-fadly">SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">MEDAN</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                                 <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-jasmine.png" width="240" alt="" data-open="reveal-author-jasmine-surkatty" />
                                                   </div>
                                                   <h4>Jasmine Surkatty</h4>
                                                   <p> Author of Komik Ga Jelas</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-jasmine-surkatty">SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">MEDAN</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                                 <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-betty lorensia.png" width="240" alt="" data-open="reveal-author-betty-lorensia" />
                                                   </div>
                                                   <h4>Betty Lorensia</h4>
                                                   <p>Owner of LetterbyBetty</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-betty-lorensia" >SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">MEDAN</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                                 <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-julian.png" width="240" alt="" data-open="reveal-author-julian-syahputra" />
                                                   </div>
                                                   <h4>Julian Syahputra</h4>
                                                   <p>Author of Sengklekman</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-julian-syahputra" >SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">BANDUNG</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                                 <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-FAY.png" width="240" alt="" data-open="reveal-author-fai" />
                                                   </div>
                                                   <h4>Faidhan</h4>
                                                   <p>Co-owner of KITC</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-fai" >SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">BANDUNG</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                              <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-jasmine.png" width="240" alt="" data-open="reveal-author-jasmine-surkatty" />
                                                   </div>
                                                   <h4>Jasmine Surkatty</h4>
                                                   <p> Author of Komik Ga Jelas</p>
                                                   <br />
                                                   <a className="btn-lihat-detail"  data-open="reveal-author-jasmine-surkatty">SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <h5 className="title-city-speaker">BANDUNG</h5>
                                          <div className="article p-speaker grid-x grid-padding-x align-center">
                                             <div className="block-list">
                                                 <div className="block-item">
                                                   <div className="img-author">
                                                      <img src="/static/assets/images/people/image-feiruz.png" width="240" alt="" data-open="reveal-author-fei" />
                                                   </div>
                                                   <h4>Fei Rizani</h4>
                                                   <p>Author of Imaginarium</p>
                                                   <br />
                                                   <a className="btn-lihat-detail" data-open="reveal-author-fei" >SPEAKER BIO</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    
                                 </ul> 
                                
                              </div>
                              <nav className="orbit-bullets" style={{display: 'none'}}>
                                 <button className="is-active" data-slide="0">
                                    BDG
                                </button>
                                 <button data-slide="1">
                                    JOG
                                </button>
                                 <button data-slide="2">
                                    JKT
                                </button>
                                 <button data-slide="3">
                                    MDN
                                </button>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>

         
      )

      const Schedule = (
         <div className="content-creator-3">
            <div className="grid-container container-c-3 grid-y align-center">
               <div className="grid-x grid-margin-x align-center">
                  <div className="cell small-12 medium-10 large-10">
                     <div className="article m-schedule">
                        { /* <div className="section-subtitle">
                             <h2 className="ls-1">SCHEDULE</h2>
                  		</div>  */ }
                        <div className="features-slideshow">
                           <div className="orbit" role="region" aria-label="CIAYO Stream Videos" data-orbit>
                              <div className="orbit-wrapper">
                                 <div className="orbit-controls" style={{display: 'none'} }>
                                    <button className="orbit-previous">
                                       <span className="fa fa-caret-left"></span>
                                    </button>
                                    <button className="orbit-next">
                                       <span className="fa fa-caret-right"></span>
                                    </button>
                                 </div>
                                 <ul className="orbit-container">
                                 <li className="is-active orbit-slide">
                                       <div className="features-slide">
                                          <div className="grid-x grid-margin-x align-middle align-justify">
                                             <div className="cell small-12 medium-12 large-5 grid-x align-center">
                                                <img src="/static/assets/images/features/city image-01.png" style={{ height: '300px' }}className="mi-schedule" alt="" />
                                             </div>
                                             <div className="cell small-12 medium-12 large-6">
                                                <div className="features">
                                                   <h2 className="city">YOGYAKARTA</h2>
                                                   <h6 className="author-name">30 Juni 2019 • 10.00 - 16.00 WIB</h6>
                                                   <br />
                                                   <h6 className="author-name">SInergy Co Working Space</h6>
                                                   <h6 className="date">Jl. Cenderawasih No.32b, Mrican, Demangan, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281 </h6>
                                                   <hr />
                                                   <div style={{display: 'flex'}}>
                                                   <h6 className="author-name">Misrad</h6> <span className="line-vertical">|</span>
                                                   <h6 className="author">Creator of Mice Cartoon</h6>
                                                   </div>
                                                   <div style={{display: 'flex'}}>
                                                   <h6 className="author-name">Pachiek</h6> <span className="line-vertical">|</span>
                                                   <h6 className="author">Localpreneur • Manager of Starcross</h6>
                                                   </div>
                                                   <div style={{display: 'flex'}}>
                                                   <h6 className="author-name">Freshmen Team</h6> <span className="line-vertical">|</span>
                                                   <h6 className="author">Mentor • Author of Freshman</h6>
                                                   </div>
                                                   <hr />
                                                   <div className="img-sponsor">
                                                      <img width="155px" height="63px" style={{marginRight: '32px'}} src="/static/assets/images/features/off-merch@3x.png"></img>
                                                      <img width="106px" height="83px" style={{marginRight: '32px'}} src="/static/assets/images/features/comm-partner-jog@3x.png"></img>
                                                    
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>

                                  
                               
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <div className="grid-x grid-margin-x align-middle align-justify">
                                             <div className="cell small-12 medium-12 large-5 grid-x align-center">
                                                <img src="/static/assets/images/features/city image-03.png" style={{ height: '300px' }}className="mi-schedule" alt="" />
                                             </div>
                                             <div className="cell small-12 medium-12 large-6">
                                                <div className="features">
                                                   <h2 className="city">MALANG</h2>
                                                   <h6 className="author-name">21 July 2019  • 10.00 - 16.00 WIB</h6>
                                                   <br />
                                                   <h6 className="author-name">Ngalup Co Working Space </h6>
                                                   <h6 className="date">Jl. Sudimoro, Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur 65142 </h6>
                                                   <hr />
                                                   <div style={{display: 'flex'}}>
                                                   <h6 className="author-name">Sweta Kartika</h6> <span className="line-vertical">|</span>
                                                   <h6 className="author">Author of Grey Jingga</h6>
                                                   </div>
                                                   <div style={{display: 'flex'}}>
                                                   <h6 className="author-name">Tri Wahyu</h6> <span className="line-vertical">|</span>
                                                   <h6 className="author">Localpreneur • Owner of ZeroHeroes</h6>
                                                   </div>
                                                   <div style={{display: 'flex'}}>
                                                   <h6 className="author-name"> Akhmad Fadly </h6> <span className="line-vertical">|</span>
                                                   <h6 className="author">Mentor • Author of Sampana</h6>
                                                   </div>
                                                   <hr />
                                                   <div className="img-sponsor">
                                                   <img width="155px" height="63px" style={{marginRight: '32px'}} src="/static/assets/images/features/off-merch@3x.png"></img>
                                                      <img width="106px" height="83px" style={{marginRight: '32px'}} src="/static/assets/images/features/comm-partner-mlg@3x.png"></img>
                                                      
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <div className="grid-x grid-margin-x align-middle align-justify">
                                             <div className="cell small-12 medium-12 large-5 grid-x align-center">
                                                <img src="/static/assets/images/features/city image-02.png" style={{ height: '300px' }}className="mi-schedule" alt="" />
                                             </div>
                                             <div className="cell small-12 medium-12 large-6">
                                                <div className="features">
                                                   <h2 className="city">MEDAN</h2>
                                                   <h6 className="author-name">18 August 2019  • 10.00 - 16.00 WIB</h6>
                                                   <br />
                                                   <h6 className="author-name">Clapham Collective</h6>
                                                   <h6 className="date">Komp. Ruko Centre Point Medan Jalan Timor Blok G No. III/IV 2nd Floor, Gg. Buntu, Kec. Medan Tim., Kota Medan, Sumatera Utara 20236</h6>
                                                   <hr />
                                                   <div style={{display: 'flex'}}>
                                                   <h6 className="author-name">Jasmine Surkatty</h6><span className="line-vertical">|</span>
                                                   <h6 className="author">Artpreneur</h6>
                                                   </div>
                                                   <div style={{display: 'flex'}}>
                                                   <h6 className="author-name">Betty Lorensia</h6><span className="line-vertical">|</span>
                                                   <h6 className="author">Localpreneur • Owner of LetterbyBetty</h6>
                                                   </div>
                                                   <div style={{display: 'flex'}}>
                                                   <h6 className="author-name"> Julian Syahputra </h6><span className="line-vertical">|</span>
                                                   <h6 className="author">Mentor •  Author of Sengklekman </h6>
                                                   </div>
                                                   <hr />
                                                   <div className="img-sponsor">
                                                   <img width="155px" height="63px" style={{marginRight: '32px'}} src="/static/assets/images/features/off-merch@3x.png"></img>
                                                      <img width="106px" height="83px" src="/static/assets/images/features/comm-partner-mdn@3x.png"></img>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>

                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <div className="grid-x grid-margin-x align-middle align-justify">
                                             <div className="cell small-12 medium-12 large-5 grid-x align-center">
                                                <img src="/static/assets/images/features/city image-04.png" style={{ height: '300px' }}className="mi-schedule" alt="" />
                                             </div>
                                             <div className="cell small-12 medium-12 large-6 ">
                                                <div className="features">
                                                   <h2 className="city">BANDUNG</h2>
                                                   <h6 className="author-name">25 August 2019 • 10.00 - 16.00 WIB</h6>
                                                   <br />
                                                   <h6 className="author-name">TBA</h6>
                                                   <h6 className="date"> </h6>
                                                   <hr />
                                                   <div style={{display: 'flex'}}>
                                                   <h6 className="author-name">Jasmine Surkatty</h6><span className="line-vertical">|</span>
                                                   <h6 className="author">Artpreneur</h6>
                                                   </div>
                                                   <div style={{display: 'flex'}}>
                                                   <h6 className="author-name">Faidhan</h6><span className="line-vertical">|</span>
                                                   <h6 className="author">Localpreneur • Co-owner of KITC</h6>
                                                   </div>
                                                   <div style={{display: 'flex'}}>
                                                   <h6 className="author-name">Fei Rizani</h6><span className="line-vertical">|</span>
                                                   <h6 className="author">Mentor • Author of Imaginarium</h6>
                                                   </div>
                                                   <hr />
                                                   <div className="img-sponsor">
                                                   <img width="155px" height="63px" style={{marginRight: '32px'}} src="/static/assets/images/features/off-merch@3x.png"></img>
                                                    
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                              <nav className="orbit-bullets orbit-city">
                                 <button className="is-active" data-slide="0">
                                    <img className="bullets-city" src="/static/assets/images/features/city thumb-01.png" />
                                 </button>
                                 <button data-slide="1">
                                    <img className="bullets-city" src="/static/assets/images/features/city thumb-03.png" />
                                 </button>
                                 <button data-slide="2">
                                    <img className="bullets-city" src="/static/assets/images/features/city thumb-02.png" />
                                 </button>
                                 <button data-slide="3">
                                    <img className="bullets-city" src="/static/assets/images/features/city thumb-04.png" />
                                 </button>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )

      const Past_Journey = (
         <div className="content-creator-4">
            <div className="grid-container container-c-4">
               <div className="grid-x grid-margin-x align-center">
                  <div className="cell small-12 medium-10 large-10">
                     <div className=" article">
                        <div className="section-subtitle">
                           <h2 className="ls-1">PAST JOURNEY / RECAP</h2>
                           <h3 className="">30 komunitas. 50 author. 11 kota. 1000+ peserta.</h3>
                           <p className="detail-title-journey">Di 2018, CIAYO ComiConnect Tour berhasil menghubungkan para pelaku dan komunitas komik lokal untuk saling terhubung dan berkolaborasi. Perjuangan kami belum selesai.
                        </p>
                        </div>
                        <div className="features-slideshow">
                           <div className="orbit" role="region" aria-label="Videos" data-orbit>
                              <div className="orbit-wrapper">
                                 <div className="orbit-controls">
                                    <button className="orbit-previous mo-previous-vidios ">
                                       <img src="/static/images/backgrounds/arrow-left.png" />
                                    </button>
                                    <button className="orbit-next mo-next-vidios">
                                       <img src="/static/images/backgrounds/arrow-right.png" />
                                    </button>
                                 </div>
                                 <ul className="orbit-container">
                                    <li className="is-active orbit-slide">
                                       <div className="features-slide">
                                          <div className="grid-x align-center grid-margin-20">
                                             <div className="cell small-12 medium-12 large-6">
                                                <div className="video-thumbnail" data-open="reveal-video-bandung">
                                                   <img src="/static/assets/images/videos/Vid-thumb-small/thumb_small_bdg.jpg" alt="" />
                                                   <span className="button">
                                                      <span className="fa fa-caret-right"></span>
                                                   </span>
                                                </div>
                                             </div>

                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <div className="grid-x align-center grid-margin-20">
                                             <div className="cell small-12 medium-12 large-6">
                                                <div className="video-thumbnail" data-open="reveal-video-jogjakarta">
                                                   <img src="/static/assets/images/videos/Vid-thumb-small/thumb_small_jgj.jpg" alt="" />
                                                   <span className="button">
                                                   <span className="fa fa-caret-right"></span>
                                                   </span>
                                                </div>
                                             </div>

                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <div className="grid-x align-center grid-margin-20">
                                             <div className="cell small-12 medium-12 large-6">
                                                <div className="video-thumbnail" data-open="reveal-video-semarang">
                                                   <img src="/static/assets/images/videos/Vid-thumb-small/thumb_small_semarang.jpg" alt="" />
                                                   <span className="button">
                                                      <span className="fa fa-caret-right"></span>
                                                   </span>
                                                </div>
                                             </div>

                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <div className="grid-x align-center grid-margin-20">
                                             <div className="cell small-12 medium-12 large-6">
                                                <div className="video-thumbnail" data-open="reveal-video-surabaya">
                                                   <img src="/static/assets/images/videos/Vid-thumb-small/thumb_small_sby.jpg" alt="" />
                                                   <span className="button">
                                                      <span className="fa fa-caret-right"></span>
                                                   </span>
                                                </div>
                                             </div>

                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <div className="grid-x align-center grid-margin-20">
                                             <div className="cell small-12 medium-12 large-6">
                                                <div className="video-thumbnail" data-open="reveal-video-makassar">
                                                   <img src="/static/assets/images/videos/Vid-thumb-small/thumb_small_makassar.jpg" alt="" />
                                                   <span className="button">
                                                      <span className="fa fa-caret-right"></span>
                                                   </span>
                                                </div>
                                             </div>

                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <div className="grid-x align-center grid-margin-20">
                                             <div className="cell small-12 medium-12 large-6">
                                                <div className="video-thumbnail" data-open="reveal-video-bali">
                                                   <img src="/static/assets/images/videos/Vid-thumb-small/thumb_small_ bali.jpg" alt="" />
                                                   <span className="button">
                                                      <span className="fa fa-caret-right"></span>
                                                   </span>
                                                </div>
                                             </div>

                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <div className="grid-x align-center grid-margin-20">
                                             <div className="cell small-12 medium-12 large-6">
                                                <div className="video-thumbnail" data-open="reveal-video-medan">
                                                   <img src="/static/assets/images/videos/Vid-thumb-small/thumb_small_medan.jpg" alt="" />
                                                   <span className="button">
                                                      <span className="fa fa-caret-right"></span>
                                                   </span>
                                                </div>
                                             </div>

                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <div className="grid-x align-center grid-margin-20">
                                             <div className="cell small-12 medium-12 large-6">
                                                <div className="video-thumbnail" data-open="reveal-video-aceh">
                                                   <img src="/static/assets/images/videos/Vid-thumb-small/thumb_small_aceh.jpg" alt="" />
                                                   <span className="button">
                                                      <span className="fa fa-caret-right"></span>
                                                   </span>
                                                </div>
                                             </div>

                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <div className="grid-x align-center grid-margin-20">
                                             <div className="cell small-12 medium-12 large-6">
                                                <div className="video-thumbnail" data-open="reveal-video-batam">
                                                   <img src="/static/assets/images/videos/Vid-thumb-small/thumb_small_batam.jpg" alt="" />
                                                   <span className="button">
                                                      <span className="fa fa-caret-right"></span>
                                                   </span>
                                                </div>
                                             </div>

                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <div className="grid-x align-center grid-margin-20">
                                             <div className="cell small-12 medium-12 large-6">
                                                <div className="video-thumbnail" data-open="reveal-video-tegal">
                                                   <img src="/static/assets/images/videos/Vid-thumb-small/thumb_small_tegal.jpg" alt="" />
                                                   <span className="button">
                                                      <span className="fa fa-caret-right"></span>
                                                   </span>
                                                </div>
                                             </div>

                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide">
                                          <div className="grid-x align-center grid-margin-20">
                                             <div className="cell small-12 medium-12 large-6">
                                                <div className="video-thumbnail" data-open="reveal-video-jakarta">
                                                   <img src="/static/assets/images/videos/Vid-thumb-small/thumb_small_jkt.jpg" alt="" />
                                                   <span className="button">
                                                      <span className="fa fa-caret-right"></span>
                                                   </span>
                                                </div>
                                             </div>

                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                              <nav className="orbit-bullets">
                                 <div className="connecting-line"></div>
                                 <button className="is-active mobile-orbit-vidios" data-slide="0">
                                    <img className="bullets-city" src="/static/assets/images/features/Video-City-Thumb-Bandung.png" />
                                 </button>
                                 <button className="mobile-orbit-vidios" data-slide="1">
                                    <img className="bullets-city" src="/static/assets/images/features/Video-City-Thumb-Jogja.png" />
                                 </button>
                                 <button className="mobile-orbit-vidios" data-slide="2">
                                    <img className="bullets-city" src="/static/assets/images/features/Video-City-Thumb-Semarang.png" />
                                 </button>
                                 <button className="mobile-orbit-vidios" data-slide="3">
                                    <img className="bullets-city" src="/static/assets/images/features/Video-City-Thumb-Surabaya.png" />
                                 </button>
                                 <button className="mobile-orbit-vidios" data-slide="4">
                                    <img className="bullets-city" src="/static/assets/images/features/Video-City-Thumb-Makassar.png" />
                                 </button>
                                 <button className="mobile-orbit-vidios" data-slide="5">
                                    <img className="bullets-city" src="/static/assets/images/features/Video-City-Thumb-Bali.png" />
                                 </button>
                                 <button className="mobile-orbit-vidios" data-slide="6">
                                    <img className="bullets-city" src="/static/assets/images/features/Video-City-Thumb-Medan.png" />
                                 </button>
                                 <button className="mobile-orbit-vidios" data-slide="7">
                                    <img className="bullets-city" src="/static/assets/images/features/Video-City-Thumb-Aceh.png" />
                                 </button>
                                 <button className="mobile-orbit-vidios" data-slide="8">
                                    <img className="bullets-city" src="/static/assets/images/features/Video-City-Thumb-Batam.png" />
                                 </button>
                                 <button className="mobile-orbit-vidios" data-slide="9">
                                    <img className="bullets-city" src="/static/assets/images/features/Video-City-Thumb-Tegal.png" />
                                 </button>
                                 <button className="mobile-orbit-vidios" data-slide="10">
                                    <img className="bullets-city" src="/static/assets/images/features/Video-City-Thumb-Jakarta.png" />
                                 </button>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )

      const Contact = (
         <div className="content-creator-5">
            <div className="grid-container container-c-5">
               <div className="grid-x grid-margin-x align-center">
                  <div className="cell small-12 medium-10 large-10">
                     <div className="article">
                        <div className="section-subtitle">
                           <h2 className="ls-1 contact-title-1">CONTACT US</h2>
                           <h6 className="contact-title-2">Jika ada pertanyaan, silahkan lengkapi kolom dibawah ini</h6>
                        </div>
                        <div className="content-contact-us bg-contact-creator cell" style={{ height: '100%' }}>
                           <div className="grid-x grid-margin-x align-middle align-justify form-contact-us">
                              <div className="cell small-12 medium-12 large-4 ">
                                 <div className="grid-x align-center">
                                    <img className="img-m-contact" src="/static/assets/images/features/particle-logo.png" style={{ maxWidth: '70%', height: '200px' }} alt="" />
                                 </div>

                                 <div className="grid-x grid-padding-x align-center">
                                    <div className="">
                                    <a href="https://www.facebook.com/ciayocom/" style={{ cursor: 'pointer' }}> <div className="link-sosial-contact"><i className="fab fa-facebook-f float-center"></i></div></a>
                                    </div>
                                    <div className="">
                                    <a href="https://www.instagram.com/ciayocom/?hl=en" style={{ cursor: 'pointer' }}> <div className="link-sosial-contact"><i className="fab fa-instagram float-center"></i></div></a>
                                    </div>
                                    <div className="">
                                    <a href="https://www.youtube.com/channel/UCMz4WCTQGhU5I6o3HOq0Hfg" style={{ cursor: 'pointer' }}>  <div className="link-sosial-contact"><i className="fab fa-youtube float-center"></i></div></a>
                                    </div>
                                 </div>
                              </div>
                              <div className="cell small-12 medium-12 large-8">
                                 <div className="features">
                                    <form className="form-contact" action="https://formspree.io/hello@ciayo.com" method="post">
                                       <div className="row">
                                          <div className="">
                                             <input className="text" type="text" name="Name" placeholder="Nama" required />
                                          </div>
                                          <div className="">
                                             <input className="email" type="email" name="_replyto" placeholder="Alamat email" required />
                                          </div>
                                          <div className="">
                                             <textarea className="textarea" style={{ height: '120px '}} name="message" placeholder="Tulis pertanyaan kamu disini" required></textarea>
                                          </div>
                                          <div className="clear"></div>
                                       </div>
                                       <div className="row">
                                          <div className="">
                                             <input className="submit-contact-us float-right" type="submit" value="KIRIM" />
                                          </div>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="section-copyright">
               <div className="grid-container">
                  <div className="grid-x grid-margin-x">
                     <div className="cell small-12">
                        <div className="copyright">
                           <div className="copyright-text">&copy; 2019 CIAYO Corp</div>
                           <div className="site-identity">
                              <img src="/static/images/logo-project-3.png" alt="" width="57" height="16" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )

      

      const Modal = (
         <>
            <div className="reveal large modal-vidios-connect" id="reveal-video-bandung" data-reveal data-reset-on-close="true" data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="responsive-embed widescreen mb-0">
                  <iframe width="560" height="215" src="https://www.youtube.com/embed/y9fS09j08M8" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
               </div>
               <button className="close-button" data-close="" aria-label="Close modal" type="button">
                  <img src="/static/assets/images/features/close-icon-40@3x.png" />
               </button>
            </div>

            <div className="reveal large modal-vidios-connect" id="reveal-video-jogjakarta" data-reveal data-reset-on-close="true" data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="responsive-embed widescreen mb-0">
                  <iframe width="560" height="215" src="https://www.youtube.com/embed/2ODwpC444Y4" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
               </div>
               <button className="close-button" data-close="" aria-label="Close modal" type="button">
                  <img src="/static/assets/images/features/close-icon-40@3x.png" />
               </button>
            </div>

            <div className="reveal large modal-vidios-connect" id="reveal-video-semarang" data-reveal data-reset-on-close="true" data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="responsive-embed widescreen mb-0">
                  <iframe width="560" height="215" src="https://www.youtube.com/embed/tN8w295I7FY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
               </div>
               <button className="close-button" data-close="" aria-label="Close modal" type="button">
                  <img src="/static/assets/images/features/close-icon-40@3x.png" />
               </button>
            </div>

            <div className="reveal large modal-vidios-connect" id="reveal-video-surabaya" data-reveal data-reset-on-close="true" data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="responsive-embed widescreen mb-0">
                  <iframe width="560" height="215" src="https://www.youtube.com/embed/dynWTBd9y08" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
               </div>
               <button className="close-button" data-close="" aria-label="Close modal" type="button">
                  <img src="/static/assets/images/features/close-icon-40@3x.png" />
               </button>
            </div>

            <div className="reveal large modal-vidios-connect" id="reveal-video-makassar" data-reveal data-reset-on-close="true" data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="responsive-embed widescreen mb-0">
                  <iframe width="560" height="215" src="https://www.youtube.com/embed/eVrTvlyNlKI" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
               </div>
               <button className="close-button" data-close="" aria-label="Close modal" type="button">
                  <img src="/static/assets/images/features/close-icon-40@3x.png" />
               </button>
            </div>

            <div className="reveal large modal-vidios-connect" id="reveal-video-bali" data-reveal data-reset-on-close="true" data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="responsive-embed widescreen mb-0">
                  <iframe width="560" height="215" src="https://www.youtube.com/embed/p1z5bUEFaHY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
               </div>
               <button className="close-button" data-close="" aria-label="Close modal" type="button">
                  <img src="/static/assets/images/features/close-icon-40@3x.png" />
               </button>
            </div>

            <div className="reveal large modal-vidios-connect" id="reveal-video-medan" data-reveal data-reset-on-close="true" data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="responsive-embed widescreen mb-0">
                  <iframe width="560" height="215" src="https://www.youtube.com/embed/ck8zWAQkT1c" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
               </div>
               <button className="close-button" data-close="" aria-label="Close modal" type="button">
                  <img src="/static/assets/images/features/close-icon-40@3x.png" />
               </button>
            </div>

            <div className="reveal large modal-vidios-connect" id="reveal-video-aceh" data-reveal data-reset-on-close="true" data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="responsive-embed widescreen mb-0">
                  <iframe width="560" height="215" src="https://www.youtube.com/embed/BslprPuwZm8" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
               </div>
               <button className="close-button" data-close="" aria-label="Close modal" type="button">
                  <img src="/static/assets/images/features/close-icon-40@3x.png" />
               </button>
            </div>

            <div className="reveal large modal-vidios-connect" id="reveal-video-batam" data-reveal data-reset-on-close="true" data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="responsive-embed widescreen mb-0">
                  <iframe width="560" height="215" src="https://www.youtube.com/embed/cQf_ezXCVEs" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
               </div>
               <button className="close-button" data-close="" aria-label="Close modal" type="button">
                  <img src="/static/assets/images/features/close-icon-40@3x.png" />
               </button>
            </div>

            <div className="reveal large modal-vidios-connect" id="reveal-video-tegal" data-reveal data-reset-on-close="true" data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="responsive-embed widescreen mb-0">
                  <iframe width="560" height="215" src="https://www.youtube.com/embed/E09K2ILitAU" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
               </div>
               <button className="close-button" data-close="" aria-label="Close modal" type="button">
                  <img src="/static/assets/images/features/close-icon-40@3x.png" />
               </button>
            </div>

            <div className="reveal large modal-vidios-connect" id="reveal-video-jakarta" data-reveal data-reset-on-close="true" data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="responsive-embed widescreen mb-0">
                  <iframe width="560" height="215" src="https://www.youtube.com/embed/kPvdzdCOod4" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
               </div>
               <button className="close-button" data-close="" aria-label="Close modal" type="button">
                  <img src="/static/assets/images/features/close-icon-40@3x.png" />
               </button>
            </div>

            <div className="reveal small" id="reveal-subscription-direct" data-reveal data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="reveal-content features">
                  <div className="grid-x grid-margin-x align-middle">
                     <div className="cell small-12 medium-3 m-img-author">
                        <img width="96px" height="96px" src="/static/assets/images/people-thumb/thumb-11.png" alt="" />
                     </div>
                     <div className="cell small-12 medium-9">
                        <h3 className="modal-author-name">Muhammad Misrad</h3>
                        <p className="author">Creator of Mice Cartoon</p>
                     </div>
                  </div>
                  <br />
                  <p className="author">
                  Muhammad Misrad lebih dikenal dengan nama Mice atau Mice Cartoon, dulunya tergabung dalam duo Benny and Mice. Rutin mengisi rubrik kartun di harian Kompas Minggu sejak tahun 2003-2010 dibawah nama Benny and Mice, tahun 2010 sampai sekarang Mice masih mengisi rubrik kartun strip tersebut dengan nama Mice Cartoon. Pada tahun 2017, Mice menerbitkan webcomicnya di CIAYO Comics dengan serial ‘Rumah Mice’ dan ‘Indonesia Banged!’.
                   </p>
               </div>
               <div>
                  <button className="close-button" data-close="" aria-label="Close modal" type="button">
                     <img src="/static/assets/images/features/close-icon-40@3x.png" />
                  </button>
               </div>
            </div>

            <div className="reveal small" id="reveal-author-pachiek" data-reveal data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="reveal-content features">
                  <div className="grid-x grid-margin-x align-middle">
                     <div className="cell small-12 medium-3 m-img-author">
                        <img width="96px" height="96px" src="/static/assets/images/people-thumb/thumb-03.png" alt="" />
                     </div>
                     <div className="cell small-12 medium-9">
                        <h3 className="modal-author-name">Pachiek Ganish</h3>
                        <p className="author">Manager of Starcross</p>
                     </div>
                  </div>
                  <br />
                  <p className="author">
                  Pachik Ganish adalah manager Starcross clothing company, clothing brand yang sudah memiliki banyak cabang di seluruh Indonesia. Di waktu senggangnya ia juga menjadi bagian dari sebuah radio online di Jogja. Kecintaannya pada musik, skateboard, dan vespa di masa remajanya mempengaruhi pola pikir dan dunianya saat ini.</p>
               </div>
               <div>
                  <button className="close-button" data-close="" aria-label="Close modal" type="button">
                     <img src="/static/assets/images/features/close-icon-40@3x.png" />
                  </button>
               </div>
            </div>

            <div className="reveal small" id="reveal-author-freshmen" data-reveal data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="reveal-content features">
                  <div className="grid-x grid-margin-x align-middle">
                     <div className="cell small-12 medium-3 m-img-author">
                        <img width="96px" height="96px" src="/static/assets/images/people-thumb/thumb-08.png" alt="" />
                     </div>
                     <div className="cell small-12 medium-9">
                        <h3 className="modal-author-name">Freshmen Team</h3>
                        <p className="author">Author of Freshman</p>
                     </div>
                  </div>
                  <br />
                  <p className="author">
                  YBS, merupakan singkatan dari yasmin F, Bang Syah, dan Sihanjir. Berawal dari pertemuan mereka di sebuah komunitas komik kampus di jogja, mereka pun sepakat untuk iseng mengkomikkan cerita anak DKV yang terinspirasi dari keseharian mereka sendiri. Keisengan tersebut berkembang menjadi sebuah IP Freshmen, yang dimana webtoon dari IP tersebut bisa dinikmati di CIAYO.com hingga saat ini.
                 </p>
               </div>
               <div>
                  <button className="close-button" data-close="" aria-label="Close modal" type="button">
                     <img src="/static/assets/images/features/close-icon-40@3x.png" />
                  </button>
               </div>
            </div>

            <div className="reveal small" id="reveal-author-sweta-kartika" data-reveal data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="reveal-content features">
                  <div className="grid-x grid-margin-x align-middle">
                     <div className="cell small-12 medium-3 m-img-author">
                        <img width="96px" height="96px" src="/static/assets/images/people-thumb/thumb-10.png" alt="" />
                     </div>
                     <div className="cell small-12 medium-9">
                        <h3 className="modal-author-name">Sweta Kartika</h3>
                        <p className="author">Author of Grey Jingga</p>
                     </div>
                  </div>
                  <br />
                  <p className="author">
                  Sweta Kartika adalah seorang komikus dan illustrator asal Kebumen, Jawa Tengah. Karya-karyanya sudah banyak diterbitkan di berbagai media, baik cetak maupun digital. Selain sibuk berkarya, lulusan S2 FSRD ITB ini juga aktif menjadi pengajar non-akademis dari satu komunitas ke komunitas lain dengan materi kuliah yang ia namakan “Comic Sense”.


               </p>
               </div>
               <div>
                  <button className="close-button" data-close="" aria-label="Close modal" type="button">
                     <img src="/static/assets/images/features/close-icon-40@3x.png" />
                  </button>
               </div>
            </div>

            <div className="reveal small" id="reveal-author-tri" data-reveal data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="reveal-content features">
                  <div className="grid-x grid-margin-x align-middle">
                     <div className="cell small-12 medium-3 m-img-author">
                        <img width="96px" height="96px" src="/static/assets/images/people-thumb/thumb-09.png" alt="" />
                     </div>
                     <div className="cell small-12 medium-9">
                        <h3 className="modal-author-name">Tri Wahyu Pamungkas</h3>
                        <p className="author">Owner of ZeroHeroes</p>
                     </div>
                  </div>
                  <br />
                  <p className="author">
                  Tri Wahyu Pamungkas adalah Founder dan Owner dari clothing brand Zeroheroes. Ia memulai bisnisnya pada tahun 2012 atas dasar kecintaannya pada produk fashion. Saat ini ia memiliki 3 store yang tersebar di Malang raya. Nama Zeroheroes pun saat ini sudah tersebar baik di scene clothing lokal maupun nasional.
                 </p>
               </div>
               <div>
                  <button className="close-button" data-close="" aria-label="Close modal" type="button">
                     <img src="/static/assets/images/features/close-icon-40@3x.png" />
                  </button>
               </div>
            </div>

            <div className="reveal small" id="reveal-author-akhmad-fadly" data-reveal data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="reveal-content features">
                  <div className="grid-x grid-margin-x align-middle">
                     <div className="cell small-12 medium-3 m-img-author">
                        <img width="96px" height="96px" src="/static/assets/images/people-thumb/thumb-05.png" alt="" />
                     </div>
                     <div className="cell small-12 medium-9">
                        <h3 className="modal-author-name">Akhmad Fadly</h3>
                        <p className="author">Author of Sampana</p>
                     </div>
                  </div>
                  <br />
                  <p className="author">
                  Bermimpi menjadi aktor laga seperti Jackie Chan dan Jean-Claude Van Damme, Akhmad Fadly menyadari peluang masuk jajaran aktor laga papan atas cukup sulit, ia pun mencoba media lain untuk mencapai impiannya, yaitu komik. Terinspirasi dari animasi Avatar: The Last Airbender, Fadly melihat peluang bahwa kearifan lokal bisa dikemas menjadi sebuah IP yang menarik. Kini Fadly sibuk memproduksi IP-IP yang mengangkat budaya lokal dengan harapan karyanya dapat menarik minat pembaca terhadap kekayaan budaya Nusantara. Mimpi Fadly menjadi aktor laga bisa kamu lihat dalam karya-karyanya yang memvisualisasikan dirinya sebagai tokoh utama. 
                </p>
               </div>
               <div>
                  <button className="close-button" data-close="" aria-label="Close modal" type="button">
                     <img src="/static/assets/images/features/close-icon-40@3x.png" />
                  </button>
               </div>
            </div>

            <div className="reveal small" id="reveal-author-jasmine-surkatty" data-reveal data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="reveal-content features">
                  <div className="grid-x grid-margin-x align-middle">
                     <div className="cell small-12 medium-3 m-img-author">
                        <img width="96px" height="96px" src="/static/assets/images/people-thumb/thumb-07.png" alt="" />
                     </div>
                     <div className="cell small-12 medium-9">
                        <h3 className="modal-author-name">Jasmine Surkatty</h3>
                        <p className="author">Author of Komik Ga Jelas</p>
                     </div>
                  </div>
                  <br />
                  <p className="author">
                  Dekat dengan dunia komik sejak kecil, membuat Jasmine Surkatty jatuh cinta dengan komik. Komik Ga Jelas (KGS), adalah komik pertama yang awalnya dipublikasikan di Facebook dan merambah ke media sosial lain dan juga platform digital seperti CIAYO Comics. KGJ juga terpilih sebagai satu dari Top 5 Indonesia IP yang ikut dalam program KATAPEL yang dikurasi oleh BEKRAF.
                  Selain komik, Jasmine juga memiliki kesibukan di studio gambarnya, JHS Production, juga mengerjakan graphic design sampai dengan brand identity.
               </p>
               </div>
               <div>
                  <button className="close-button" data-close="" aria-label="Close modal" type="button">
                     <img src="/static/assets/images/features/close-icon-40@3x.png" />
                  </button>
               </div>
            </div>

            <div className="reveal small" id="reveal-author-betty-lorensia" data-reveal data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="reveal-content features">
                  <div className="grid-x grid-margin-x align-middle">
                     <div className="cell small-12 medium-3 m-img-author">
                        <img width="96px" height="96px" src="/static/assets/images/people-thumb/thumb-01.png" alt="" />
                     </div>
                     <div className="cell small-12 medium-9">
                        <h3 className="modal-author-name">Betty Lorensia</h3>
                        <p className="author">Owner of LetterbyBetty</p>
                     </div>
                  </div>
                  <br />
                  <p className="author">
                  Betty Lorensia adalah seniman kaligrafi lepas, guru, dan juga bagian dari platform kreatif MBRACE. Sejak awal 2017, telah mengadakan lokakarya di Medan, Jakarta dan Bali untuk memperkenalkan seni kaligrafi modern baik dengan kuas dan pena celup. Beberapa karyanya telah digunakan untuk acara-acara dan tujuan komersial seperti kartu undangan, notebook, caketopper, bantal, papan nama, floormats, suvenir, dan lainnya. Di waktu luangnya, ia juga menikmati fotografi dan penataan meja untuk acara kecil dan pribadi.
               </p>
               </div>
               <div>
                  <button className="close-button" data-close="" aria-label="Close modal" type="button">
                     <img src="/static/assets/images/features/close-icon-40@3x.png" />
                  </button>
               </div>
            </div>


            <div className="reveal small" id="reveal-author-julian-syahputra" data-reveal data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="reveal-content features">
                  <div className="grid-x grid-margin-x align-middle">
                     <div className="cell small-12 medium-3 m-img-author">
                        <img width="96px" height="96px" src="/static/assets/images/people-thumb/thumb-06.png" alt="" />
                     </div>
                     <div className="cell small-12 medium-9">
                        <h3 className="modal-author-name">Julian Syahputra</h3>
                        <p className="author"> Author of Sengklekman</p>
                     </div>
                  </div>
                  <br />
                  <p className="author">
                  Bermimpi untuk terus menghibur dan membuat orang tertawa, lulusan Teknologi Informasi Komputer ini menciptakan dan mengembangkan IP Sengklekman untuk mewujudkan mimpinya. IP yang berawal dari media komik ini terus dikembangkan ke media-media lain. Mulai dari animasi, merch, live action dan lainnya. Selain disibukkan dengan Sengklekmen, Julian juga memproduksi konten yang menghibur di kanal Youtube-nya.
               </p>
               </div>
               <div>
                  <button className="close-button" data-close="" aria-label="Close modal" type="button">
                     <img src="/static/assets/images/features/close-icon-40@3x.png" />
                  </button>
               </div>
            </div>

            <div className="reveal small" id="reveal-author-fai" data-reveal data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="reveal-content features">
                  <div className="grid-x grid-margin-x align-middle">
                     <div className="cell small-12 medium-3 m-img-author">
                        <img width="96px" height="96px" src="/static/assets/images/people-thumb/thumb-02.png" alt="" />
                     </div>
                     <div className="cell small-12 medium-9">
                        <h3 className="modal-author-name">Faidhan N Noe’man</h3>
                        <p className="author">Co-owner of KITC</p>
                     </div>
                  </div>
                  <br />
                  <p className="author">
                  Faidhan N Noe'man adalah designer produk dibalik Kitc sejak tahun 2013 akhir. Kitc sendiri dibentuk berdasarkan ketertarikan dan riset pekerjaan sehari-hari bersama temannya Nurrachmat Widyasena (Mas Ito) yang kesehariannya sebagai seniman. Faidhan menerjemahkan visual-visual yang diberikan temannya menjadi produk fashion atau novelty agar dapat dinikmati oleh berbagai kalangan. Selain itu juga dia sering berprofesi sebagai barista dan broadcaster.
                </p>
               </div>
               <div>
                  <button className="close-button" data-close="" aria-label="Close modal" type="button">
                     <img src="/static/assets/images/features/close-icon-40@3x.png" />
                  </button>
               </div>
            </div>

            <div className="reveal small" id="reveal-author-fei" data-reveal data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="reveal-content features">
                  <div className="grid-x grid-margin-x align-middle">
                     <div className="cell small-12 medium-3 m-img-author">
                        <img width="96px" height="96px" src="/static/assets/images/people-thumb/thumb-04.png" alt="" />
                     </div>
                     <div className="cell small-12 medium-9">
                        <h3 className="modal-author-name">Fei Rizani</h3>
                        <p className="author">Author of Imaginarium</p>
                     </div>
                  </div>
                  <br />
                  <p className="author">
                  Fei Rizani adalah komikus baru yang membekali dirinya dengan berbagai pengalaman. Mulai dari ilmu desain, programming, sampai manajemen bisnis. Debutnya dalam komik dimulai tahun lalu di CIAYO Comics dengan IP Imaginarium. Sebuah IP dengan tema yang jarang diangkat, tentang kejiwaan dan psikologis manusia. Komikus berdomisili Bandung ini juga memiliki techwear fashion brand bernama EEZ Worldwide yang sudah meramaikan pasar internasional.
                </p>
               </div>
               <div>
                  <button className="close-button" data-close="" aria-label="Close modal" type="button">
                     <img src="/static/assets/images/features/close-icon-40@3x.png" />
                  </button>
               </div>
            </div>

            <div className="reveal small" id="reveal-ciayo-comiconnect" data-reveal data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="reveal-content features">
                  <div className="grid-x grid-margin-x align-middle">
                    
                     <div className="cell small-12 medium-12">
                        <h3 className="modal-title-about-comiconnect">Saatnya Comic Creator Saling Terhubung</h3>      
                     </div>
                  </div>
                  <br />
                  <p className="author">
                  CIAYO ComiConnect adalah rangkaian tour CIAYO Comics ke kota-kota di Indonesia untuk membentuk ikatan dengan komunitas-komunitas komik lokal di kota-kota tersebut. 
CIAYO Comics memberikan workshop, knowledge sharing, juga portfolio review di kota-kota yang disinggahi. Sehingga para peminat dan juga comic creator bisa saling bertemu, terhubung, dan berkolaborasi. 
Kami percaya, hubungan kolaboratif tersebut akan memberi pengaruh yang sangat positif dalam dunia komik Indonesia. 
                </p>
               </div>
               <div>
                  <button className="close-button" data-close="" aria-label="Close modal" type="button">
                     <img src="/static/assets/images/features/close-icon-40@3x.png" />
                  </button>
               </div>
            </div>

            <div className="reveal small" id="reveal-comiconnect-particle" data-reveal data-v-offset="100" data-deep-link="true" data-update-history="true">
               <div className="reveal-content features">
                  <div className="grid-x grid-margin-x align-middle">
                     <div className="cell small-12 medium-12">
                        <h3 className="modal-title-about-comiconnect">Seni dan Bisnis Saling Melengkapi</h3>
                     </div>
                  </div>
                  <br />
                  <p className="author">
                  Tahun 2018 kami hadir ke 11 kota di Indonesia dan menghubungkan para comic creator untuk bertemu dan berkolaborasi. Dan tahun ini, kami ingin membawa hubungan yang telah terbentuk tersebut ke sektor lain, yaitu sektor bisnis. 
Particle yang memiliki kepanjangan “Pairing artpreneur with localpreneur”, adalah misi CIAYO ComiConnect Tour tahun ini. Misi untuk mewadahi pelaku bisnis dan pelaku seni untuk bekerja sama dan saling melengkapi.

                </p>
               </div>
               <div>
                  <button className="close-button" data-close="" aria-label="Close modal" type="button">
                     <img src="/static/assets/images/features/close-icon-40@3x.png" />
                  </button>
               </div>
            </div>



         </>
      )

      return(
         <>
            <Header selectMenu={(e) => this.selectMenu(e)} selectedSection={selectedSection}/>
            <ReactFullpage
               navigation
               scrollingSpeed={1000}
               autoScrolling={true}
               css3={true}
               responsiveWidth={801}
               responsiveHeight={601}
               bigSectionDestination={'top'}
               slidesNavigation={false}
               normalScrollElementTouchThreshold={2}
               anchors={['home', 'about', 'speaker', 'schedule', 'past-journey', 'contact']}
               onLeave={(origin, destination, direction) => this.onLeave(origin, destination, direction)}
               // sectionsColor={this.state.sectionColor}
               render={
                  ({state, fullpageApi}) => (
                     <ReactFullpage.Wrapper>
                        <div key={1} className="section">{Home}</div>
                        <div key={2} className="section">{About}</div>
                        <div key={3} className="section">{Speaker}</div>
                        <div key={4} className="section">{Schedule}</div>
                        <div key={5} className="section">{Past_Journey}</div>
                        <div key={6} className="section">{Contact}</div>
                        

                        {Modal}
                     </ReactFullpage.Wrapper>
                  )
               }
            />
         </>
      )
   }
}

export default withRouter(Creator);