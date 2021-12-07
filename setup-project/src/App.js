import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Form from "./components/forms/Form";
import Loginform from "./components/forms/Loginform";

import Share from "./components/share/Share";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      newMe: "",
      countLike: 0,
      comment: [],
      commentValue: "",
    };
  }
  handlePost = (e) => {
    this.setState({
      newMe: e.target.value,
    });
  };
  handleComment = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  handleLikeBtn = () => {
    this.setState({ countLike: this.state.countLike + 1 });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // let usernameData = [];
    // usernameData = JSON.parse(localStorage.getItem("user"))
    //   ? JSON.parse(localStorage.getItem("user"))
    //   : [];
    // console.log(usernameData);

    const { newMe } = this.state;
    this.setState({ post: [...this.state.post, newMe] });
    const { commentValue } = this.state;
    this.setState({ comment: [...this.state.comment, commentValue] });

    this.setState({ countLike: 0 });
  };

  render() {
    return (
      <Router>
        <Header />
        {/* <Header /> */}
        <Route exact path="/">
          <Form />
        </Route>
        <Route path="/Loginform">
          <Loginform />
        </Route>
        <Route path="/share">
          <Share
            post={this.state.post}
            willOnChange={this.handlePost}
            willOnSubmit={this.handleSubmit}
            willhandleLikeBtn={this.handleLikeBtn}
            counterLikes={this.state.countLike}
            comment={this.state.comment}
            willhandleComment={this.handleComment}
          />
        </Route>

        {/* <Route path="/dashboard">
          <Dashboard />
        </Route> */}
        {/* <Route path="/counter">
          <h2>Total:{this.state.total}</h2>
          {this.state.counter.map((items) => (
            <Counters
              key={items.key}
              option={items.item}
              yourNumber={items.counterOne}
              id={items.id}
              willIncrease={this.handleFirstClick}
              willDecrease={this.handleSecondClick}
            />
          ))}
        </Route> */}
      </Router>
    );
  }
}

export default App;
