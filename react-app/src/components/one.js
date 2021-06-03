import React from 'react';

class One extends React.Component {
  render() {
    return (
      <section id="one">
        <header className="major">
          <h2>あなたの行動で命が救われる</h2>
        </header>
        <p>あなたは知っていますか？ <br/>
          年間に、何千、何万頭もの犬や猫が殺処分されていることを。<br/>

          この事実を知ってあなたは、何を思い、どう感じましたか？<br/>
          「何かしてあげたい。でも、何をしたらいいかわからない。」 <br/>
          そんなことを思ったのではないでしょうか？　大丈夫です。<br/>
          あなたの身のまわりで、要らなくなったもの、処分しようと思っていたものはないですか？<br/>
          それを私たちに譲っていただけるだけでいいんです。<br/>
          それを私たちがお金にかえ、そのお金を寄付や保護活動に充てることができるのです。<br/>

          あなたの少しの行動で1頭でも多くの犬や猫が救われるかもしれないのです。</p>
        <ul className="actions">
          <li><a href="/" className="button">要らないものを送る</a></li>
        </ul>
      </section>
    );
  }
}

export default One;