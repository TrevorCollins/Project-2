import React, { Component } from 'react';

class Forum extends Component {
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
                            <h4>Discuss</h4>
                        </div>
                        <Dropdown />
                    </div>
                </div>
            </header>
        )
    }
}

class Dropdown extends Component {
    render() {
        return (
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort By</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="www.google.com">Date</a>
                    <a class="dropdown-item" href="www.spacejam.com">Relevant</a>
                </div>
            </div>
        )
    }
}

class Body extends Component {
    render() {
        return (
            <div class="container">
                <br />
                <div class="row">
                    <Category />
                    <div class="col-md-7">

                    </div>
                </div>
                <ForumPost />
            </div>
        )
    }
}

class Category extends Component {
    render() {
        return (
            <div class="col-md-5">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Keyword" aria-label="Search" />
                    <button class="btn btn-outline-secondary" type="button">Search</button>
                </form>
                <br />
                <h5>Category</h5>
                <div class="checkbox">
                    <label><input type="checkbox" value="" />Electrical</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value="" />Chemical</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value="" />Mechanical</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value="" />Civil</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value="" />Petroleum</label>
                </div>
                <br />
            </div>
        )
    }
}

var cardStyle = {
    width: '18rem'
};

class ForumPost extends Component {
    state = {
        loading: true,
        posts: null
    };

    async componentDidMount() {
        // var response = await fetch("/api/posts")
        // var data = await response.json();
        var testData = [
            {
                "id": 1,
                "title": "Title 1",
                "body": "Body 1",
                "typeof": "Mechanical"
            }, {
                "id": 2,
                "title": "Title 2",
                "body": "Body 2",
                "typeof": "Mechanical"
            }
        ]
        this.setState({ posts: testData, loading: false });
        console.log()
    }

    render() {
        return (
            <div>
                {this.state.loading ? (
                    <div>Loading...</div>
                ) : (
                        <div>
                            {
                                this.state.posts.map((post) => {
                                    return (
                                        <div key={post.id}>
                                            <div class="card" style={cardStyle}>
                                                <div class="card-body">
                                                    <h5 class="card-title">{post.title}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">{post.id}</h6>
                                                    <p class="card-text">{post.body}</p>
                                                    <a href="google.com" class="card-link">Card link</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )}
            </div>
        )
    }
}

export default Forum;