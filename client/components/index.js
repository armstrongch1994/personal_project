/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {default as BasicHome} from './basic-home'
export {default as BasicNav} from './basic-nav'
export {default as PhotoGallery} from './photo-gallery'
export {Login, Signup} from './auth-form'
