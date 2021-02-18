import './VideoTile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function VideoTile(props) {
    const goToVideoPage = () => {
        props.history.push('/video-page/' + props.videoTitle);
    };

    return (
        <div className="row viedoTile__wrapper mr-md-3" onClick={() => goToVideoPage()}>
            <div className="videoTile__imgWrapper"></div>
            <div className="videoTile__contentWrapper d-flex flex-column p-2 justify-content-center">
                <span>{props.videoTitle}</span>
                <p>Video Description</p>
            </div>
        </div>
    );
}

export default VideoTile;