import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import One from '../components/one';
import Two from '../components/two';
import Three from '../components/three';
import insertAdjacentFooter from '../common/common';
import LoadingSpinner from '../components/loader';


class Index extends React.Component{

  constructor(props) {
    super(props)
    // スピナー初期表示は非表示
    this.state = {isLoading: false};

    this.isShowLoadingSpinner = this.isShowLoadingSpinner.bind(this);
  }

  componentDidMount() {
    const $header = document.getElementById('header');
    const $footer = document.getElementById('footer');
    const $main = document.getElementById('main');

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

  // スピナーを表示
  isShowLoadingSpinner() {
    this.setState({isLoading: this.state.isLoading ? false : true});
  }

  render() {
    const isLoading = this.state.isLoading;
    return (
      <>
      {/* スピナー */}
      {isLoading && <LoadingSpinner />}
      <Header />
        {/* Main */}
        <div id="main">
          <One />
          <Two />
          <Three setStateIsLoading={this.isShowLoadingSpinner} />
        </div>
      <Footer />
      </>
    );
  }
}

export default Index;