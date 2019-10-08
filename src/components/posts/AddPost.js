import React, { Component } from 'react';

class AddPost extends Component {
  state = {
    title: '',
    content: ''
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleOnSubmit} className="white">
          <h5 className="grey-text tex-darken-3">Add Post</h5>
          <div className="input-field">
            <label>Title</label>
            <input type="text" name="title" onChange={this.handleOnChange} />
          </div>
          <div className="input-field">
            <label>Content</label>
            <textarea className='materialize-textarea' name='content'  onChange={this.handleOnChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn blue darken-2 z-depth-0">Add</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddPost;

