import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFilter } from '@fortawesome/free-solid-svg-icons'

function NavBar(props) {
    return (
        <div className="row justify-content-between navBar__wrapper">
            <a href="#" className="col-2 d-flex justify-content-center align-items-center"><FontAwesomeIcon className="navBar__icon" icon={faBars} /></a>
            <h3 className="col-8 navBar__header">{props.header ? props.header : "MyHobby"}</h3>
            <a href="#" className="col-2 d-flex justify-content-center align-items-center"><FontAwesomeIcon className="navBar__icon" icon={faFilter} /></a>
        </div>
    );
}

export default NavBar;