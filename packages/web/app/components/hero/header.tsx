import { VFC } from 'react';

const Header: VFC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7 text-center mx-auto">
          <h1 className="text-white pt-3 mt-n5">Hi, I'm Cameron</h1>
          <p className="lead text-white mt-3">I am a web engineer living in California. I love what I do.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
