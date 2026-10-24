import NavBar from "../components/common/NavBar";
import LyricsField from "../components/section/LyricsField";

import './AddSongPage.css';
function AddSongPage(){
    return(
        <>
            <NavBar></NavBar>
            <div className="songInfoField">

                <div className="titleAndArtist">
                    <div >
                        <p className="fieldTitle">TITLE</p>
                        <input className="inputField" type="text" />
                    </div>

                    <div>
                        <p className="fieldTitle">ARTIST / COMPOSER</p>
                        <input className="inputField" type="text" />
                    </div>
                </div>

                <div className="performanceSetting">
                    <div>
                        <p className="fieldTitle">ROOT KEY</p>
                        <input className="inputField" type="text" />
                    </div>
                    <div>
                        <p className="fieldTitle">CAPO POSITION</p>
                        <input className="inputField" type="text" />
                    </div>
                    <div>
                        <p className="fieldTitle">TEMPO / BPM</p>
                        <input className="inputField" type="text" />
                    </div>
                    <div>
                        <p className="fieldTitle">TIME SIG</p>
                        <input className="inputField" type="text" />
                    </div>
                </div>
            </div>

            <div className="sectionAndLyrics">
                <div className="songStructure"> 
                    <button className="AddSectionBtn">Add Section</button>
                    <button className="SectionBtn">Chorus</button>
                    <button className="SectionBtn">Verse</button>
                    <button className="SectionBtn">Pre-Chorus</button>
                    <button className="SectionBtn">Verse</button>
                </div>

                <div className="lyricsSection">
                    <LyricsField></LyricsField>
                </div>
            </div>
        </>
    )
}

export default AddSongPage;