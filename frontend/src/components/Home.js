import React, { Component } from "react";

class Home extends Component {
    render() {
      return (
        <div>
          <HomeBody />
        </div>
      )
    }
  }
  
  class HomeBody extends Component {
    render() {
      return (
        <div id="home">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="jumbotron">
                  <h1 class="display-4">Ask an Engineer!</h1>
                  <p class="lead">This is a simple platform...</p>
                  <HomeBodyNav />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  class HomeBodyNav extends Component {
    render() {
      return (
        <div>
          <hr class="my-4" />
          <p>Go to our forum and look through our topics or login and post your question!</p>
          <a class="btn btn-primary btn-lg" href="/forum">Search a Topic</a>
          <span>   </span>
          <a class="btn btn-primary btn-lg" href="/post">Post your Question</a>
        </div>
      )
    }
  }
  export default Home;