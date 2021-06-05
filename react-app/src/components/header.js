import React from 'react';
import Logo from '../images/Logo.JPG'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="/" className="image avatar"><img src={Logo} alt="" /></a>
          <h1><strong>Dox </strong> for every Animal<br />
          一頭でも多く、彼らを救いたい。<br />
          私たちはそれだけを願っています。</h1>
        </div>
      </header>
    );
  }
}

export default Header;