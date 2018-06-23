import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/postActions';

class Posts extends Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.props.items.unshift(nextProps.newItem);
        }
    }
    componentWillMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {JSON.stringify(this.props.item)}
                {this.props.items.map(post => {
                    return <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                })}
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        items: state.posts.items,
        newItem: state.posts.item,
    };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);