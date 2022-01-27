import { useState, VFC } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'remix';
import Button from '../button';
import List from './list';
import Toggle from './toggle';

const Navigation: VFC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  console.log()

  const clickGithub = () => {
    window.open('https://github.com/cameronaziz', '_blank');
  };

  const clickLinkedIn = () => {
    window.open('https://linkedin.com/in/cameronaziz', '_blank');
  };

  const clickTwitter = () => {
    window.open('https://twitter.com/cameronaziz', '_blank');
  };

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  const isHome = location.pathname === '/';

  return (
    <div className="container position-sticky z-index-sticky top-0">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-md blur border-radius-md top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
            <div className="container-fluid px-0">
              {isHome ?
                <Link to="/#contact">
                  <Button
                    label="Contact"
                    color="info"
                  />
                </Link>
                :
                <Link to="/">
                  <Button
                    label="Home"
                    color="info"
                  />
                </Link>
              }
              <Toggle
                target=".collapsible-nav"
                onClick={toggleNavigation}
              />
              <List target=".collapsible-nav">
                <Link to="/blog">
                  <Button
                    label="Blog"
                    color="secondary"
                    renderAs="span"
                  />
                </Link>
                <Button
                  label="Experience"
                  color="secondary"
                />
              </List>
              <List target=".collapsible-nav" className="ms-md-auto">
                <Button
                  color="secondary"
                  icon="github"
                  onClick={clickGithub}
                />
                <Button
                  color="secondary"
                  icon="linkedin"
                  onClick={clickLinkedIn}
                />
                <Button
                  color="secondary"
                  icon="twitter"
                  onClick={clickTwitter}
                />
              </List>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
