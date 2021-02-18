import '../App.css';
import NavBar from '../components/NavBar';
import HobbyCard from '../components/HobbyCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(props) {
    return (
        <div>
            <NavBar />
            <div className="home__hobbyCardsWrapper">
                <HobbyCard history={props.history} hobbyName="yoga" />
                <HobbyCard history={props.history} hobbyName="knitting" />
                <HobbyCard history={props.history} hobbyName="basketball" />
                <HobbyCard history={props.history} hobbyName="sewing" />
                <HobbyCard history={props.history} hobbyName="cooking" />
            </div>
        </div>
    );
}

export default Home;