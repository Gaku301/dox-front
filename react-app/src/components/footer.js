import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="inner">
        <ul className="icons">
          <li><a href="/" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="/" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
          <li><a href="/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="mailto:dox.animal@gmail.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
        </ul>
        <ul className="copyright">
          <li>Dox &copy; 2021</li>
        </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
