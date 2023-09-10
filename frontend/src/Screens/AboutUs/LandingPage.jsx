import React from "react";
import "./LandingPage.css";
import Login from "../../components/Login";
const LandingPage = () => {
  return (
    <>
      <>
        {/* Header Banner */}
        <div className="intro-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="intro-message">
                  <h1 className="animated bounceInDown">
                    Find freedom from finanical debt
                  </h1>
                  <ul
                    className="list-inline intro-social-buttons"
                    id="headerButton"
                  >
                    <li>
                      <button
                        href="#"
                        id="button"
                        className="animated bounceInUp btn btn-info btn-lg"
                      >
                        {" "}
                        <span className="network-name">START RIGHT HERE</span>
                      </button>
                    </li>
                  </ul>
                  <div id="empty"> </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* Page Content */}
        {/* /.content-section-a */}
        <div className="content-section-a">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                <div className="clearfix" />
                <h2 className="section-heading">Header 1</h2>
                <hr className="section-heading-spacer" />
                <div className="clearfix" />
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                {/* /.image credit: simple.com */}
                <img
                  className=" img-responsive"
                  src="https://www.simple.com/assets/images/simple-kit.png"
                  id="responsive"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.content-section-b */}
        <div className="content-section-b">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-6">
                <h2 className="section-heading">Header 2</h2>
                <hr className="section-heading-spacer" />
                <div className="clearfix" />
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                <img
                  className="img-responsive"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/crunch_money.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.content-section-c */}
        <div className="content-section-c">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                <h2 className="section-heading">Header 3</h2>
                <hr className="section-heading-spacer" />
                <div className="clearfix" />
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                <img
                  className="img-responsive"
                  src="https://static.pexels.com/photos/57825/pexels-photo-57825-medium.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.content-section-d */}
        <div className="content-section-d">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-6">
                <h2 className="section-heading-white">Header 4</h2>
                <hr className="section-heading-spacer-white" />
                <div className="clearfix" />
                <p className="lead-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button
                  href="#"
                  id="button-white"
                  className="animated bounceInUp btn btn-info btn-lg"
                >
                  {" "}
                  <span className="network-name">CRUNCH DEBT TODAY</span>
                </button>
              </div>
              <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                <img
                  className="phone img-responsive"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/crunch_phone_%26_computer.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* Footer */}
        <footer>
          <div className="container">
            <div className="row">
              <p className="copyright text-muted small">
                Copyright © Michael Mangialardi 2016. All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
      </>
    </>
  );
};

export default LandingPage;
