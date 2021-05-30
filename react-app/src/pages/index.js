import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import One from '../components/one';
import Two from '../components/two';
import Three from '../components/three';
import insertAdjacentFooter from '../common/common';


class Index extends React.Component{

  componentDidMount() {
    const $header = document.getElementById('header');
    const $footer = document.getElementById('footer');
    const $main = document.getElementById('main');
    const settings = {
      // Parallax background effect?
      parallax: true,
      // Parallax factor (lower = more intense, higher = less intense).
      parallaxFactor: 20
    }

    // 初回読み込み時
    window.onload = () => {
      insertAdjacentFooter($header, $footer, $main);
    }

    // ウィンドウリサイズ時
    const resizeFunc = () => {
      insertAdjacentFooter($header, $footer, $main);
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