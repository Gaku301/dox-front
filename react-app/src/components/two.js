import React from 'react';
import Img1 from '../images/thumbs/01.jpg';
import Img2 from '../images/thumbs/02.jpg';
import Img3 from '../images/thumbs/03.jpg';
import Img4 from '../images/thumbs/04.jpg';
import Img5 from '../images/thumbs/05.jpg';
import Img6 from '../images/thumbs/06.jpg';

class Two extends React.Component {
  render() {
    return (
      <section id="two">
            <h2>Recent Work</h2>
            <div className="row">
              <article className="col-6 col-12-xsmall work-item">
                <a href={ Img1 } className="image fit thumb"><img src={ Img1 } alt="" /></a>
                <h3>Magna sed consequat tempus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article className="col-6 col-12-xsmall work-item">
                <a href={Img2} className="image fit thumb"><img src={Img2} alt="" /></a>
                <h3>Ultricies lacinia interdum</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article className="col-6 col-12-xsmall work-item">
                <a href={Img3} className="image fit thumb"><img src={Img3} alt="" /></a>
                <h3>Tortor metus commodo</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article className="col-6 col-12-xsmall work-item">
                <a href={Img4} className="image fit thumb"><img src={Img4} alt="" /></a>
                <h3>Quam neque phasellus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article className="col-6 col-12-xsmall work-item">
                <a href={Img5} className="image fit thumb"><img src={Img5} alt="" /></a>
                <h3>Nunc enim commodo aliquet</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article className="col-6 col-12-xsmall work-item">
                <a href={Img6} className="image fit thumb"><img src={Img6} alt="" /></a>
                <h3>Risus ornare lacinia</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
            </div>
            <ul className="actions">
              <li><a href="/" className="button">Full Portfolio</a></li>
            </ul>
      </section>
    );
  }
}

export default Two;