import { VFC } from 'react';

const Info: VFC = () => {
  return (
    <div className="col-lg-5 position-relative bg-cover px-0" style={{ backgroundImage: 'url(\'../img/curved-images/curved5.jpg\')' }}>
      <div className="position-absolute z-index-2 w-100 h-100 top-0 start-0 d-lg-block d-none">
        <img src="../img/wave-2.svg" className="h-100 ms-n2" alt="vertical-wave" />
      </div>
      <div className="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center">
        <div className="mask bg-gradient-info opacity-9"></div>
        <div className="p-5 ps-sm-8 position-relative text-start my-auto z-index-2">
          <h3 className="text-white">Contact Information</h3>
          <div className="d-flex mt-6 p-2 text-white">
            <div>
              <i className="fas fa-phone text-sm"></i>
            </div>
            <div className="ps-3">
              <span className="text-sm opacity-8">(310) 469 1802</span>
            </div>
          </div>
          <div className="d-flex p-2 text-white">
            <div>
              <i className="fas fa-envelope text-sm"></i>
            </div>
            <div className="ps-3">
              <span className="text-sm opacity-8">cameronaziz@me.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
