import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import One from '../components/one';
import Two from '../components/two';
import Three from '../components/three';


class Index extends React.Component{

  componentDidMount() {
    const $window = window;
    const $body = document.getElementsByTagName('body');
    const $header = document.getElementById('header');
    const $footer = document.getElementById('footer');
    const $main = document.getElementById('main');
    const settings = {
      // Parallax background effect?
      parallax: true,
      // Parallax factor (lower = more intense, higher = less intense).
      parallaxFactor: 20
    }

    const breakpoints = {
      xlarge:  [ '1281px',  '1800px' ],
      large:   [ '981px',   '1280px' ],
      medium:  [ 737, 980],
      small:   [ '481px',   '736px'  ],
      xsmall:  [ null,      '480px'  ],
    };

    // 初回読み込み時
    window.onload = function () {
      if(document.body.clientWidth > breakpoints.medium[1]) {
        $header.insertAdjacentElement('beforeend', $footer);
        console.log($header);
      } else if(document.body.clientWidth <= breakpoints.medium[1]) {
        $main.insertAdjacentElement('afterend', $footer);
      }
    }

    // ウィンドウリサイズ時
    const resizeFunc = () => {
      if(document.body.clientWidth > breakpoints.medium[1]) {
        $header.insertAdjacentElement('beforeend', $footer);
      }else if(document.body.clientWidth <= breakpoints.medium[1]) {
        $main.insertAdjacentElement('afterend', $footer);
      }
    }
    window.addEventListener("resize", resizeFunc);

  }

  render() {
    return (
      <div>
        <Header />
        {/* Main */}
        <div id="main">
          <One />
          <Two />
          <Three />
        </div>
      <Footer />
      </div>
    );
  }
}

export default Index;