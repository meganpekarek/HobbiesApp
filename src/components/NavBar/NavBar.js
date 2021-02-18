import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBars, faFilter } from '@fortawesome/free-solid-svg-icons'

function NavBar(props) {
    const leftIcon = props.backBtn ? 
        (<FontAwesomeIcon className="navBar__icon" icon={faArrowLeft} />) :
        (<FontAwesomeIcon className="navBar__icon" icon={faBars} />)

    return (
        <div className="row justify-content-between navBar__wrapper">
            <div role="button" className="col-2 d-flex justify-content-center align-items-center" onClick={props.backBtn ? () => props.history.goBack() : () => {}}>
                {leftIcon}
            </div>
            <h3 className="col-8 navBar__header">{props.header ? props.header : "MyHobby"}</h3>
            <a href="#" className="col-2 d-flex justify-content-center align-items-center"><FontAwesomeIcon className="navBar__icon" icon={faFilter} /></a>
        </div>
    );
}

export default NavBar;