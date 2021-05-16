
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
        <article class="post featured">
            <header class="major">
              <h2>Do Not Abandon</h2>
              <p>Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />
              facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor<br />
              amet nullam sed etiam veroeros.</p>
            </header>
            <a href="/" class="image main"><img src="images/pic01.jpg" alt="" /></a>
            <ul class="actions special">
              <li><a href="/" class="button large">Full Story</a></li>
            </ul>
        </article>
      </div>
    </div>
  );
}

export default Index;