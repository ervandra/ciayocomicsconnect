import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #f0f0f0;
  text-align: center;
  justify-content: center;
  display: block;
  border-top: 1px solid #ddd;
  & .copyright {
    font-size: 0.75rem;
    color: #999;
    line-height: 48px;
    height: 48px;
  }
  & .button-container {
    display: none;
    padding: 1rem;
    border-bottom: 1px solid #00000008;
  }
  & .footer-back-to-ciayo-comics {
    display: inline-block;
    margin: 0;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: bold;
  }

  @media (max-width: 1023px) {
    .button-container {
      display: block;
    }
  }
`;
const Footer = () => (
   <StyledFooter>
    <div className="section-copyright">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12">
            <div className="copyright">
              <div className="copyright-text">
                &copy; 2019 CIAYO Corp
              </div>
              <div className="site-identity">
                <img src="/static/images/logo-project-3.png" alt="CIAYO CORP" width="57" height="16"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </StyledFooter>
)

export default Footer;