
function Index() {
  return (
    <div className="fade-in">

      {/* Intro */}
      <div id="intro">
        <h1>DOX</h1>
        <p>一頭でも多く、一日でも早く、彼らの命を救いたい。<br /> 私たちはただ、それだけを願っています。</p>
        <ul className="actions">
          <li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
        </ul>
      </div>

      {/* Header */}
      <header id="header">
        <a href="index.html" className="logo">DOX</a>
      </header>

      {/* Nav */}
      <nav id="nav">
        <ul className="links">
          <li className="active"><a href="index.html">Top</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="elements.html">Elements Reference</a></li>
        </ul>
        <ul class="icons">
          <li><a href="/" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="/" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
          <li><a href="/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>
      </nav>

      {/* Main */}
      <div id="main">
        {/* Featured Post */}
        <article className="post featured">
          <header className="major">
            <h2>Do Not Abandon</h2>
            <p>Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />
            facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor<br />
            amet nullam sed etiam veroeros.</p>
          </header>
          <a href="/" className="image main"><img src="images/pic01.jpg" alt="" /></a>
          <ul className="actions special">
            <li><a href="/" className="button large">Full Story</a></li>
          </ul>
        </article>

        {/* Posts */}
        <section class="posts">
          <article>
            <header>
              <span className="date">April 24, 2017</span>
              <h2><a href="/">こんな感じ</a></h2>
            </header>
            <a href="/" className="image fit"><img src="images/pic02.jpg" alt="" /></a>
            <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
            <ul className="actions special">
              <li><a href="/" className="button">Full Story</a></li>
            </ul>
          </article>
          <article>
            <header>
              <span className="date">April 22, 2017</span>
              <h2><a href="/">Primis eget<br />
              imperdiet lorem</a></h2>
            </header>
            <a href="/" className="image fit"><img src="images/pic03.jpg" alt="" /></a>
            <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
            <ul className="actions special">
              <li><a href="/" className="button">Full Story</a></li>
            </ul>
          </article>
          <article>
            <header>
              <span className="date">April 18, 2017</span>
              <h2><a href="/">Ante mattis<br />
              interdum dolor</a></h2>
            </header>
            <a href="/" className="image fit"><img src="images/pic04.jpg" alt="" /></a>
            <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
            <ul className="actions special">
              <li><a href="/" className="button">Full Story</a></li>
            </ul>
          </article>
          <article>
            <header>
              <span className="date">April 14, 2017</span>
              <h2><a href="/">Tempus sed<br />
              nulla imperdiet</a></h2>
            </header>
            <a href="/" className="image fit"><img src="images/pic05.jpg" alt="" /></a>
            <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
            <ul className="actions special">
              <li><a href="/" className="button">Full Story</a></li>
            </ul>
          </article>
          <article>
            <header>
              <span className="date">April 11, 2017</span>
              <h2><a href="/">Odio magna<br />
              sed consectetur</a></h2>
            </header>
            <a href="/" className="image fit"><img src="images/pic06.jpg" alt="" /></a>
            <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
            <ul className="actions special">
              <li><a href="/" className="button">Full Story</a></li>
            </ul>
          </article>
          <article>
            <header>
              <span className="date">April 7, 2017</span>
              <h2><a href="/">Augue lorem<br />
              primis vestibulum</a></h2>
            </header>
            <a href="/" className="image fit"><img src="images/pic07.jpg" alt="" /></a>
            <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
            <ul className="actions special">
              <li><a href="/" className="button">Full Story</a></li>
            </ul>
          </article>
        </section>

      </div>
    </div>
  );
}

export default Index;