import { connect } from 'react-redux'
import { increment } from '../modules/post'
import Post from '../components/Post'


const mapDispatchToProps = {
  increment : () => increment(1)
};


const mapStateToProps = (state) => ({
  post : state.post,
  hello : "hello there"
});


export default connect(mapStateToProps, mapDispatchToProps)(Post)
