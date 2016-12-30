import React from 'react'
import './Posts.scss'
import { rel } from '../../../global'

export class Posts extends React.Component {
    renderPost(post) {
        return rel('li', {key: post.id},
            rel('a', {
                href:'/#/post?id=' + post.id
            }, post.title)
        )
    }
    renderPosts() {
        let listItems = [];
        let posts = this.props.posts;//this.fetchPosts();
        posts.forEach(function(post) {
            listItems.push(this.renderPost(post))
        }.bind(this));
        return listItems;
    }
    render() {
        return (
            rel('div', {},
                rel('ul', {}, this.renderPosts())
            )
        )
    }
}

Posts.propTypes = {
    fetchPosts : React.PropTypes.func.isRequired
};

Posts.defaultProps = {
    posts: [
        {id:1, title:"Hello World"},
        {id:2, title:"An Interesting Post"},
        {id:3, title:"Hello Again"},
        {id:4, title:"A Post About Foo"}
    ]
};

export default Posts
