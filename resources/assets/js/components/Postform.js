import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost, enterTitle } from './actions/postActions';

class Postform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        this.props.enterTitle(e.target.value);
    }

    onSubmit(e) {
        e.prevenDefault;

        let post = {
            title: this.state.title,
            body: this.state.body,
        }

        this.props.addPost(post);
    }

    render() {
        return (
            <div>
                <h3>Add Post</h3>
                <form>
                    <div>
                        <label>Title:</label><br />
                        <input type="text" name="title" onChange={this.onChange} /> <p>{this.props.title}</p>
                    </div>
                    <div>
                        <label>Body:</label><br />
                        <textarea name="body" onChange={this.onChange} />
                    </div>
                    <button type="button" onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        title: state.posts.title,
    };
}

export default connect(mapStateToProps, { addPost, enterTitle })(Postform)