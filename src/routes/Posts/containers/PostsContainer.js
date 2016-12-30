import { connect } from 'react-redux'
import Posts from '../components/Posts'


function fetchPosts() {

}

const mapStateToProps = (state) => {
    return {
        fetchPosts : fetchPosts
    }
};


const mapDispatchToProps = {
};


export default connect(mapStateToProps, mapDispatchToProps)(Posts)
