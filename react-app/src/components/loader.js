import Loader from 'react-loader-spinner';
import React from 'react';

class LoadingSpinner extends React.Component {
  get styleOverlay () {
    return (
      {
        background: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        display: 'block',
        margin: '0 auto',
      }
    )
  }

  get styleLoader () {
    return (
      {
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    )
  }

  render() {
    return(
      <div style={this.styleOverlay}>
        <Loader 
          type="Oval"
          color="#49bf9d"
          height={100}
          width={100}
          style={this.styleLoader}
        />
      </div>

    )
  }
}

export default LoadingSpinner;