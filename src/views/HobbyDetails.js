import '../App.css';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoTile from '../components/VideoTile';
import HobbyCard from '../components/HobbyCard';

function HobbyDetails(props) {

    return (
        <div>
            <NavBar header={props.match.params.hobby} />
            <div className="hobbyDetails__wrapper d-flex flex-column">
                <div className="d-flex flex-column flex-md-row">
                    <div className="d-flex flex-column mr-md-5">
                        <h4>Getting Started</h4>
                        <div className="d-flex flex-column flex-md-row flex-wrap">
                            <VideoTile videoTitle="testing" history={props.history} />
                            <VideoTile videoTitle="testing" history={props.history} />
                            <VideoTile videoTitle="testing" history={props.history} />
                            <VideoTile videoTitle="testing" history={props.history} />
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <h4>Improving</h4>
                        <div className="d-flex flex-column flex-md-row flex-wrap">
                            <VideoTile videoTitle="testing" history={props.history} />
                            <VideoTile videoTitle="testing" history={props.history} />
                            <VideoTile videoTitle="testing" history={props.history} />
                            <VideoTile videoTitle="testing" history={props.history} />
                        </div>
                    </div>
                </div>
                <h4>Related</h4>
                <div className="row">
                    <HobbyCard history={props.history} hobbyName="Volleyball" />
                    <HobbyCard history={props.history} hobbyName="Tennis" />
                    <HobbyCard history={props.history} hobbyName="Lacrosse" />
                </div>
            </div>
        </div>
    );
}

export default HobbyDetails;