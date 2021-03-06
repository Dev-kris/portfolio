import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';
// import ResumeButton from '../ResumeButton/ResumeButton';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <section id="contact">
      <Container>
        <Fade right duration={1000} delay={800} distance="300px">
          <Title title="Contact" />
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a>
          </div>
        </Fade>
      </Container>
      <br />
      <footer className="pt-5">
        <Container>
          <span className="back-to-top" />
          <div className="social-links">
            {networks &&
              networks.map((network) => {
                const { id, name, url } = network;
                return (
                  <>
                    <a
                      key={id}
                      href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                    >
                      <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                    </a>
                    {/* <ResumeButton></ResumeButton> */}
                  </>
                );
              })}
          </div>

          {isEnabled && <GithubButtons />}
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </Container>
      </footer>
    </section>
  );
};

export default Contact;
