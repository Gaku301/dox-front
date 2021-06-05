import React from 'react';
import {init, send} from 'emailjs-com';
import { emailjsConf } from '../common/const'
// emailjs
init(emailjsConf.user_id);

class Three extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.setStateIsLoading = this.setStateIsLoading.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.contactSubmit = this.contactSubmit.bind(this);
  }

  // フォームの入力をセット
  handleChange(event) {
    const target = event.target;
    const value  = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  // スピナーの表示非表示切り替え
  setStateIsLoading() {
    return this.props.setStateIsLoading();
  };

  // バリデーションチェック(必須チェクのみ)
  validator() {
    const {name, message, email} = this.state;
    let validate = {invalid: false, items:[]};
    if(!name || name === undefined || !name.trim()) {
      validate.invalid = true;
      validate.items.push("お名前");
    } 
    if(!message || message === undefined || !message.trim()) {
      validate.invalid = true;
      validate.items.push("お問い合わせ内容");
    }
    if(!email || email === undefined || !email.trim()) {
      validate.invalid = true;
      validate.items.push("メールアドレス");
    }

    return validate;
  }

  contactSubmit(event) {
    // バリデーションチェック
    const {invalid, items} = this.validator();

    if(invalid && items.length > 0) {
      // バリデーションエラー時
      alert(`【${items}】を入力してください。`);

    } else{
      // スピーナーを表示
      this.setStateIsLoading();
      // 送信データを作成
      const data = {
        from_name: this.state.name,
        message: this.state.message,
        reply_to: this.state.email,
      };
      // フォームを初期化
      event.preventDefault();
      
      send(emailjsConf.service_id, emailjsConf.templeate_id, data, emailjsConf.user_id)
      .then(() => {
        // スピナーを非表示
        this.setStateIsLoading();
        alert('メッセージを送信しました。');
      })
      .catch((error) => {
        // スピナーを非表示
        this.setStateIsLoading();
        console.log(error);
        alert('メッセージの送信に失敗しました。');
      });
    }
  }

  render() {
    return (
      <section id="three">
        <h2>Get In Touch</h2>
        <p>
          私たちは名古屋を拠点に活動をしています。
          <br />
          お気軽にご連絡ください。
        </p>
        <div className="row">
          <div className="col-8 col-12-small">
            <form onSubmit={this.contactSubmit}>
              <div className="row gtr-uniform gtr-50">
                <div className="col-6 col-12-xsmall">
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name" 
                    value={this.state.name}
                    onChange={this.handleChange}
                    maxLength="30"
                    required
                  />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="4"
                    value={this.state.message}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    onClick={this.contactSubmit}
                    type="submit"
                    value="Send Message"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-4 col-12-small">
            <ul className="labeled-icons">
              <li>
                <h3 className="icon solid fa-home">
                  <span className="label">Address</span>
                </h3>
                1234 Somewhere Rd.
                <br />
                Nashville, TN 00000
                <br />
                United States
              </li>
              <li>
                <h3 className="icon solid fa-mobile-alt">
                  <span className="label">Phone</span>
                </h3>
                000-000-0000
              </li>
              <li>
                <h3 className="icon solid fa-envelope">
                  <span className="label">Email</span>
                </h3>
                <a href="mailto:dox.animal@gmail.com">dox.animal@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Three;
