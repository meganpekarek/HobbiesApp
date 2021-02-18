import '../App.css';
import NavBar from '../components/NavBar';
import HobbyCard from '../components/HobbyCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { hotjar } from 'react-hotjar';
 
hotjar.initialize(2255475, 6);

function Home(props) {
    return (
        <div>
            <NavBar history={props.history}/>
            <div className="home__hobbyCardsWrapper">
                <HobbyCard history={props.history} hobbyName="Yoga" />
                <HobbyCard history={props.history} hobbyName="Knitting" />
                <HobbyCard history={props.history} hobbyName="Basketball" />
                <HobbyCard history={props.history} hobbyName="Sewing" />
                <HobbyCard history={props.history} hobbyName="Cooking" />
            </div>
        </div>
    );
}

export default Home;