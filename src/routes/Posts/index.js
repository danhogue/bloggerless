import { injectReducer } from '../../store/reducers'
import PostsContainer from './containers/PostsContainer'

export default (store, path) => ({
  getComponent (nextState, cb) {
    const reducer = require('./modules/posts').default;
    injectReducer(store, { key: 'posts', reducer });
    cb(null, PostsContainer);
  }
})
