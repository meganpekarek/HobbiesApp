import './HobbyCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HobbyCard(props) {
    const { hobbyName } = props;

    const goToHobbyDetails = () => {
        console.log('hello')
        props.history.push("/hobby-details/" + hobbyName);
    }

    return (
        <div className="d-flex flex-column p-2 cursor-pointer" onClick={() => goToHobbyDetails()}>
            <div className="hobbyCard__hobbyImg"></div>
            <span className="text-center">{hobbyName}</span>
        </div>
    );
}

export default HobbyCard;