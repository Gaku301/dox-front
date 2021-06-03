
// ブレイクポイント
const breakpoints = {
  xlarge:  [ '1281px',  '1800px' ],
  large:   [ '981px',   '1280px' ],
  medium:  [ 737, 980],
  small:   [ '481px',   '736px'  ],
  xsmall:  [ null,      '480px'  ],
};

// フッターをDOMに挿入
const insertAdjacentFooter = ($header, $footer, $main) => {
  if(document.body.clientWidth > breakpoints.medium[1]) {
    $header.insertAdjacentElement('beforeend', $footer);
  } else if(document.body.clientWidth <= breakpoints.medium[1]) {
    $main.insertAdjacentElement('afterend', $footer);
  }
};

export default insertAdjacentFooter;