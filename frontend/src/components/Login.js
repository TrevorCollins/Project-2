import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <br />
                <Input />
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <header class="d-header clearfix">
                <div class="wrap">
                    <div class="contents clearfix">
                        <div class="title container">
                            <h4>Login</h4>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

class Input extends Component {
    render() {
        return (
            <form class="container">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Login;