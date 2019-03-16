import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
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
                        <div class="title">
                            <h4>Posts</h4>
                        </div>
                        <div class="newPost">
                            <a class="btn btn-secondary" href="newPost.html">New Post</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

class Body extends Component {
    render() {
        return (
            <div class="container">
                <br />
                <div class="row">
                    <div class="col-md-12">
                        <table class="table" id="postManager">
                            <thead>
                                <tr>
                                    <th># of Posts</th>
                                    <th>Update Post</th>
                                    <th>Delete Post</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;