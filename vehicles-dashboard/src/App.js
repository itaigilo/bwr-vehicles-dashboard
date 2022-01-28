import {Container} from "react-bootstrap";

import TopBar from "./components/top-bar/TopBar";
import Map from "./components/map/Map";

function App() {
    return (
        <div className="app">
            <TopBar/>
            <Container>
                <Map/>
            </Container>
        </div>
    );
}

export default App;
