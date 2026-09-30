import NavBar from "../components/NavBar";

import './HomePage.css'

function HomePage(){
    return(
        <>
            <NavBar></NavBar>
            <div className="HomePage">
                <div className="songTable">
                    <div className="songContainer">
                        <p className="composer">Bandang Maangas</p>
                        <p>Key: Am</p>
                        <p className="songTitle">Sure Win</p>
                        <p>Capo: 2</p>
                            <div className="chords">
                                <p className="chordsPlaceholder">chords:</p>
                                <p className="chord">Am</p>
                                <p className="chord">G</p>
                            </div>
                        <p>bpm: 122 4/4</p>
                    </div>
                    <div className="songContainer">
                        <p>by rober</p>
                        <p>Key: Am</p>
                        <p>title ng kanta</p>
                        <p>Capo: 2</p>
                            <div className="chords">
                                <p>chords</p>
                                <p>Am</p>
                                <p>G</p>
                            </div>
                        <p>bpm: 122 4/4</p>
                    </div>
                    <div className="songContainer">
                        <p>by rober</p>
                        <p>Key: Am</p>
                        <p>title ng kanta</p>
                        <p>Capo: 2</p>
                            <div className="chords">
                                <p>chords</p>
                                <p>Am</p>
                                <p>G</p>
                            </div>
                        <p>bpm: 122 4/4</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePage;