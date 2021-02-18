import './Comment.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Comment(props) {

    return (
        <div className="row">
            <div className="comment__img mr-3"></div>
            <div className="d-flex flex-column">
                <span>Username</span>
                <p>comment comment comment</p>
            </div>
        </div>
    );
}

export default Comment;