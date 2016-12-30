import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Posts from './Posts'
import Post from './Post'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Posts(store),
  childRoutes : [
    Post(store, 'post')
  ]
});

export default createRoutes
