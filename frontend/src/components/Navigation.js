import React, { Component } from "react";

class Navigation extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="row" id="nav">
                    <HeaderTitle />
                    <HeaderNav />
                </div>
            </nav>
        );
    }
}

class HeaderTitle extends Component {
    render() {
        return (
            <div class="col-md-6">
                <a class="navbar-brand mx-auto" href="index.html">Ask an Engineer</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        )
    }
}

class HeaderNav extends Component {
    render() {
        return (
            <div class="col-md-6">
                <div class="navbar-collapse collapse justify-content-stretch" id="navbar7">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/forum">Forum</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/user">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation;