import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul className="list-inline mb-2">
              <li className="list-inline-item">
                <a href="#">About</a>
              </li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item">
                <a href="#">Contact</a>
              </li>
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">© Your Website 2024. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
