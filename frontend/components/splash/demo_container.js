import { connect } from 'react-redux';
// import Splash from './loginForm';
import { login } from '../../actions/session';
import Demo from './demo';
// import { Link } from 'react-router-dom';




const mDTP = dispatch => ({
    login: (user) => dispatch(login(user)),
});

export default connect(null, mDTP)(Demo);
