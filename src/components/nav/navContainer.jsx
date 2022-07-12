import Nav from './nav';
import { connect } from "react-redux";

const mapStateToProps = state => ({
    navLinks: state.navLinks
})

const navContainer = connect(mapStateToProps)(Nav);

export default navContainer;