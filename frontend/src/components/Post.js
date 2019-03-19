import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <form id="cms">
                            <div class="form-group">
                                <label for="title">Title:</label>
                                <input placeholder="Post Title" type="text" class="form-control" id="title" />
                                <br />
                                <label for="body">Body:</label>
                                <textarea placeholder="Post Body" class="form-control" rows="10" id="body"></textarea>
                                {/* <div class="form-group">
                                    <label for="category">Select Category:</label>
                                    <select class="custom-select" id="category"></select>
                                </div> */}
                                <Category />
                                <br />
                                <button type="submit" class="btn btn-secondary submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

class Category extends Component {
    render() {
        return (
            <div class="col-md-5">
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

export default Post;