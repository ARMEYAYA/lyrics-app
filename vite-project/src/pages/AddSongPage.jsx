import NavBar from "../components/NavBar";

function AddSongPage(){
    return(
        <>
            <NavBar></NavBar>
            <div className="songInfoField">

                <div className="titleAndArtist">
                    <div>
                        <p>Title</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>ARTIST / COMPOSER</p>
                        <input type="text" />
                    </div>
                </div>

                <div className="performanceSetting">
                    <div>
                        <p>ROOT KEY</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>CAPO POSITION</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>TEMPO / BPM</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>TIME SIG</p>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddSongPage;