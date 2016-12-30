import React from 'react'

export class Post extends React.Component {
  propTypes: {
    hello       : React.PropTypes.string,
    post        : React.PropTypes.number.isRequired,
    increment   : React.PropTypes.func.isRequired
  };
  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.props)
  }
  render() {
   return <div>
      <div className='page-content-wrapper'>
        <h2>Post: {this.props.post}</h2>
        <button className='btn btn-default' onClick={this.props.increment}>
          Increment
        </button>
        <p>{this.props.hello}</p>
      </div>
    </div>
  }
}

export default Post
