import React from 'react'

export default function Footer() {
    return (
        <footer className="text-center">
        <div className="footer-above">
          <div className="container">
            <div className="row">
              <div className="footer-col col-md-4">
                <h3>Main Location</h3>
                <p>
                  <span>ABC's Way</span>
                  <br />
                  <span>London, 123456</span>
                </p>
              </div>
              <div className="footer-col col-md-4">
                <h3>Around the Web</h3>
                <ul className="list-inline">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                      className="btn-social btn-outline"
                    >
                      <i className="fa fa-fw fa-github" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                      className="btn-social btn-outline"
                    >
                      <i className="fa fa-fw fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                      className="btn-social btn-outline"
                    >
                      <i className="fa fa-fw fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-col col-md-4">
                <h3>About React</h3>
                <p>
                  <a href="https://reactjs.org/">
                    reactjs.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <span>Copyright &copy;</span>{' '}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  username
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}
