function LyricsField(){
    const lines = [
        [
            { chord: "G", text: "Amazing" },
            { chord: "C", text: "grace" },
            { chord: "",  text: "how" },
            { chord: "D", text: "sweet" },
            { chord: "",  text: "sound" },
        ],
        [
            { chord: "G", text: "That" },
            { chord: "",  text: "saved" },
            { chord: "",  text: "a" },
            { chord: "D", text: "wretch" },
            { chord: "",  text: "like" },
            { chord: "",  text: "me" },
        ],
    ];
    return(
        <div>
            <div className="LyricsPreview">
              {lines.map((line, x) => (
                <div key={x}>
                    {line.map((word,i) => (
                        <span key={i}>
                            <span>{word.chord}</span>
                            <span>{word.text}</span>
                        </span>
                    ))}
                </div>
              ))}
            </div>
            <div className="InputField">

            </div>
        </div>
    );
}

export default LyricsField;