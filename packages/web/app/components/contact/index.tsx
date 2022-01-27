import { VFC } from 'react';
import Info from './info';

const Contact: VFC = () => {
  return (
    <div className="container pt-6" id="contact">
      <div className="row">
        <div className="col">
          <div className="card overflow-hidden mb-5">
            <div className="row">
              <div className="col-lg-7">
                <form className="p-3" id="contact-form" method="post">
                  <div className="card-header px-4 py-sm-5 py-3">
                    <h2>Say Hi!</h2>
                    <p className="lead">I am always looking for new exciting projects.</p>
                  </div>
                  <div className="card-body pt-1">
                    <div className="row">
                      <div className="col-md-12 pe-2 mb-3">
                        <label>My name is</label>
                        <input className="form-control" placeholder="Full Name" type="text" />
                      </div>
                      <div className="col-md-12 pe-2 mb-3">
                        <div className="form-group mb-0">
                          <label>Your message</label>
                          <textarea name="message" className="form-control" id="message" rows={6} placeholder="I want to say that..."></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 text-end ms-auto">
                        <button type="submit" className="btn btn-round bg-gradient-info mb-0">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <Info />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
