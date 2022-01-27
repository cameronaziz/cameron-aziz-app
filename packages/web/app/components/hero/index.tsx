import Header from './header';
import Wave from './wave';

const Hero = () => {
  return (
    <header className="header-2">
      <div className="page-header min-vh-100" style={{ backgroundImage: 'url(\'./img/curved-images/curved.jpg\')' }}>
        <Header />
        <Wave />
      </div>
    </header>
  );
}

export default Hero;
