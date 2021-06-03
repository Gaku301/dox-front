import React from 'react';
import {init, send} from 'emailjs-com';
// emailjs
init("user_EcfMzOOm9cbCR3kPaadmx");

class Three extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.setStateIsLoading = this.setStateIsLoading.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.contactSubmit = this.contactSubmit.bind(this);
  }

  handleChange(event) {
    // フォームの入力をセット
    const target = event.target;
    const value  = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  setStateIsLoading() {
    // スピナーの表示非表示切り替え
    return this.props.setStateIsLoading();
  };

  contactSubmit(event) {
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
    
    send('dox_animal', 'template_ybfsbhm', data, 'user_EcfMzOOm9cbCR3kPaadmx')
    .then(() => {
      // スピナーを非表示
      this.setStateIsLoading();
    })
    .catch((error) => {
      // スピナーを非表示
      this.setStateIsLoading();
      console.log(error);
    });
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
                  />
                </div>
              </div>
            </form>
            <ul className="actions">
              <li>
                <input
                  onClick={this.contactSubmit}
                  type="submit"
                  value="Send Message"
                />
              </li>
            </ul>
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
