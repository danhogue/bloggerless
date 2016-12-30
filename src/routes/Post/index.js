import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'post',
  /*  Async getComponent is only invoked when route matches  */
  getComponent (nextState, cb) {
    /* Webpack named bundle */
    require.ensure([], (require) => {
      const Container = require('./containers/PostContainer').default;
      const reducer = require('./modules/post').default;
      injectReducer(store, { key: 'post', reducer });
      cb(null, Container);
    }, 'post');
  }
})
