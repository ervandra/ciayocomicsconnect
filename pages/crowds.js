import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from '../routes';

const Header = dynamic(() => import('../components/HeaderCrowds'), {
   loading: () => null,
});

class Crowds extends Component {
   state = {
      selectedSection: 'about',
      choiceOne: React.createRef(),
      choiceTwo: React.createRef(),
      choiceThree: React.createRef(),
      choiceFour: React.createRef()
   }

   selectVote = (selected) => {
      console.log('what value? ', selected)
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
      const { selectedSection, choiceOne, choiceTwo, choiceThree, choiceFour} = this.state;

      const About = (
         <div className="content-party-goers-1">
            <div className="grid-container container-pg-1">
               <div className="grid-x grid-margin-x align-center">
                  <div className="cell small-12 medium-10 large-10">
                     <div className="article">
                        <div className="section-subtitle">
                        </div>
                        <div className="grid-x grid-margin-x align-middle align-justify">
                           <div className="cell small-12 medium-12 large-5 grid-x align-center">
                              <img src="/static/assets/images/features/particle-logo.png" className="mi-about" style={{ height: '300px' }} alt="What is it?" />
                           </div>
                           <div className="cell small-12 medium-12 large-7">
                              <div className="features">
                                 <h2 className="ls-1 about-pg">ABOUT PARTY GOERS</h2>
                                 <hr className="hr-about-pg" />
                                 <h6 className="text-about-party-goers">Kami berhasil merumuskan sebuah formula untuk
                                             meningkatkan pengalaman membaca komik ke level
                                             berikutnya. Formula tersebut bernama CIAYO Comics
                                             Plus+. Coba sekarang. Gratis 7 hari pertama untuk
                                             pengguna baru CIAYO Comics Plus+.
                                        </h6>
                                 <br />
                                 <br />
                                 <a href="" className="btn-about">YUK, DAFTAR SEKARANG </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )

      const Our_Booth = (
         <div className="content-party-goers-2">
            <div className="grid-container container-pg-2 grid-y align-center">
               <div className="grid-x grid-margin-x align-center">
                  <div className="cell small-12 medium-10 large-10">
                     <div className=" article">
                        <div className="section-subtitle">
                           <h2 className="ls-1">OUR BOOTH</h2>
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
                                 <ul className="orbit-container">
                                    <li className="is-active orbit-slide">
                                       <div className="features-slide our-booth">
                                          <div className="our-booth-content grid-x grid-padding-x grid-padding-y align-center">
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-james-and-martha.png" />
                                             </div>
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-blue.png" />
                                             </div>
                                             <div className="cell small-12 medium-4  large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-heartbeat.png" />
                                             </div>
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-soul-of-neko.png" />
                                             </div>
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-juki.png" />
                                             </div>
                                          </div>
                                          <div className="our-booth-content grid-x grid-padding-x grid-padding-y align-center">
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-james-and-martha.png" />
                                             </div>
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-blue.png" />
                                             </div>
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-heartbeat.png" />
                                             </div>
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-soul-of-neko.png" />
                                             </div>
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-juki.png" />
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="orbit-slide">
                                       <div className="features-slide our-booth">
                                          <div className="our-booth-content grid-x grid-padding-x grid-padding-y align-center">
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-james-and-martha.png" />
                                             </div>
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-blue.png" />
                                             </div>
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-heartbeat.png" />
                                             </div>
                                             <div className="cell small-12 medium-4  large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-soul-of-neko.png" />
                                             </div>
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-juki.png" />
                                             </div>
                                          </div>
                                          <div className="our-booth-content grid-x grid-padding-x grid-padding-y align-center">
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-james-and-martha.png" />
                                             </div>
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-blue.png" />
                                             </div>
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-heartbeat.png" />
                                             </div>
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-soul-of-neko.png" />
                                             </div>
                                             <div className="cell small-12 medium-4 large-auto column-img-ob">
                                                <img className="img-our-booth" src="/static/assets/images/features/logo-juki.png" />
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                              <nav className="orbit-bullets" style={{ display: 'none' }}>
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

      const Pick_The_Stars = (
         <div className="content-party-goers-3">
            <div className="grid-container container-pg-3">
               <div className="grid-x grid-margin-x align-center">
                  <div className="cell small-12 medium-10 large-12">
                     <div className="article">
                        <div className="section-subtitle">
                           <h2 className="ls-1 contact-title-1">PICK THE STARS</h2>
                        </div>
                        <div className="content-contact-us cell" style={{ height: '100%' }}>
                           <div className="grid-x grid-margin-x align-center form-contact-us">
                              <h5 className="vote-title">Siapa sih, yang paling pengen kamu liat di Final Comic Connect 2019?</h5>
                              <div className="grid-x grid-margin-x">
                                 <div className="cell small-12 medium-3 large-3">
                                    <a href="#" className="container-img-star" onClick={() => this.selectVote(choiceOne)} ref={choiceOne}>
                                       <div className="container-img-star">
                                          <img className="star-img" width="160" src="/static/assets/images/features/star-ario.png" />
                                          <div className="middle-btn-star">
                                             <div className="text1"><i className="fas fa-check"></i></div>
                                          </div>
                                       </div>
                                    </a>
                                    <div className="name-star">Ario Anindito</div>
                                 </div>
                                 <div className="cell small-12 medium-3 large-3">
                                    <a href="#" className="container-img-star" onClick={() => this.selectVote(choiceTwo)} ref={choiceTwo}>
                                       <div className="container-img-star">
                                          <img className="star-img" width="160" src="/static/assets/images/features/star-yoshi.png" />
                                          <div className="middle-btn-star">
                                             <div className="text1"><i className="fas fa-check"></i></div>
                                          </div>
                                       </div>
                                    </a>
                                    <div className="name-star">Yoshi Sudarso</div>
                                 </div>
                                 <div className="cell small-12 medium-3 large-3">
                                    <a href="#" className="container-img-star" onClick={() => this.selectVote(choiceThree)} ref={choiceThree}>
                                       <div className="container-img-star">
                                          <img className="star-img" width="160" src="/static/assets/images/features/star-jaz.png" />
                                          <div className="middle-btn-star">
                                             <div className="text1"><i className="fas fa-check"></i></div>
                                          </div>
                                       </div>
                                    </a>
                                    <div className="name-star">Jaz</div>
                                 </div>
                                 <div className="cell small-12 medium-3 large-3">
                                    <a href="#" className="container-img-star" onClick={() => this.selectVote(choiceFour)} ref={choiceFour}>
                                       <div className="container-img-star">
                                          <img className="star-img" width="160" src="/static/assets/images/features/star-danilla.png" />
                                          <div className="middle-btn-star">
                                             <div className="text1"><i className="fas fa-check"></i></div>
                                          </div>
                                       </div>
                                    </a>
                                    <div className="name-star">Danilla Riyadi</div>
                                 </div>
                              </div>
                              <br />
                              <a href="voting-results.html" className="btn-hasil-vote">LIHAT HASILNYA</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div >
      )

      const Contact = (
                  <div className="content-party-goers-4">
            <div className="grid-container container-pg-4">
               <div className="grid-x grid-margin-x align-center">
                     <div className="cell small-12 medium-10 large-10">
                        <div className="article">
                           <div className="section-subtitle">
                                 <h2 className="ls-1 contact-title-1">CONTACT US</h2>
                                 <h6 className="contact-title-2">If you have any questions, please send us a message</h6>
                           </div>
                           <div className="content-contact-us cell" style={{ height: '100%' }}>
                                 <div className="grid-x grid-margin-x align-middle align-justify form-contact-us">
                                    <div className="cell small-12 medium-12 large-4 ">
                                       <div className="grid-x align-center">
                                             <img src="/static/assets/images/features/particle-logo.png" style={{ maxWidth: '70%', height: '200px' }} alt="What is it?" />
                                       </div>
                                       <div className="grid-x grid-padding-x align-center">
                                             <div className="">
                                                <div className="link-sosial-contact"><i className="fab fa-facebook-f float-center"></i></div>
                                             </div>
                                             <div className="">
                                                <div className="link-sosial-contact"><i className="fab fa-instagram float-center"></i></div>
                                             </div>
                                             <div className="">
                                                <div className="link-sosial-contact"><i className="fab fa-youtube float-center"></i></div>
                                             </div>
                                       </div>
                                    </div>
                                    <div className="cell small-12 medium-12 large-8">
                                       <div className="features">
                                             <form className="form-contact" action="https://formspree.io/hello@ciayo.com" method="post">
                                                <div className="row">
                                                   <div className="">
                                                         <input className="text" type="text" name="Name" placeholder="Name" required/>
                                                   </div>
                                                   <div className="">
                                                         <input className="email" type="email" name="_replyto" placeholder="Email Address" required/>
                                                   </div>
                                                   <div className="">
                                                         <textarea className="textarea" style={{ height: '120px' }} name="message" placeholder="Write your messages here" required></textarea>
                                                   </div>
                                                   <div className="clear"></div>
                                                </div>
                                                <div className="row">
                                                   <div className="">
                                                         <input className="submit-contact-us float-right" type="submit" value="SEND" />
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
                                    <img src="/static/images/logo-project-3.png" alt="CIAYO Stream" width="57" height="16" />
                                 </div>
                           </div>
                        </div>
                     </div>
               </div>
            </div>
         </div>
      )


      return(
         <>
            <Header selectMenu={(e) => this.selectMenu(e)} selectedSection={selectedSection} />
            <ReactFullpage
               navigation
               scrollingSpeed={1000}
               autoScrolling={true}
               // menu={'#menu-comiconnect'}
               css3={true}
               responsiveWidth={801}
               responsiveHeight={601}
               bigSectionsDestination={'top'}
               normalScrollElementTouchThreshold={2}
               // fixedElements={'#header'}
               onLeave={(origin, destination, direction) => this.onLeave(origin, destination, direction)}
               anchors={['about', 'our-booth', 'pict-the-stars', 'contact']}
               render={
                  ({state, fullpageApi}) => (
                     <ReactFullpage.Wrapper>
                        <div key={1} className="section">{About}</div>
                        <div key={2} className="section">{Our_Booth}</div>
                        <div key={3} className="section">{Pick_The_Stars}</div>
                        <div key={4} className="section">{Contact}</div>
                     </ReactFullpage.Wrapper>
                  )
               }
            />
         </>
      )
   }
}

export default withRouter(Crowds)