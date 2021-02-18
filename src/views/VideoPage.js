import '../App.css';
import NavBar from '../components/NavBar';
import Comment from '../components/Comment';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function VideoPage(props) {

    return (
        <div>
            <NavBar header={props.match.params.videoTitle} backBtn={true} history={props.history} />
            <div className="videoPage__wrapper d-flex flex-column flex-md-row p-4">
                <div className="videoPage__video col-md-6 p-4"></div>
                <div className="videoPage__commentsWrapper pt-md-0 pt-3">
                    <h4>Comments</h4>
                    <div className="d-flex flex-column m-3">
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPage;