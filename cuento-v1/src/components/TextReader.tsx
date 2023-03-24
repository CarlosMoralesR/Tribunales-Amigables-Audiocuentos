import { useState, useEffect } from "react";

interface TextReaderProps {
  text: string;
  onBgChange: (newBgColor: string) => void;
  currentPage: number;
}

function TextReader(props: TextReaderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  );

  useEffect(() => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(props.text);
    utterance.voice = synth.getVoices()[0];
    setSynth(synth);
    setUtterance(utterance);

    utterance.addEventListener("end", () => {
      setIsPlaying(false);
      props.onBgChange("");
    });

    return () => {
      synth.cancel();
    };
  }, [props.text]);

  useEffect(() => {
    if (isPlaying && synth && utterance) {
      synth.cancel();
      setIsPlaying(false);
      props.onBgChange("");
    }
  }, [props.text]);

  function handleButtonClick() {
    if (!synth || !utterance) return;

    if (isPlaying) {
      synth.pause();
      props.onBgChange("");
    } else {
      if (!synth.speaking) {
        synth.speak(utterance);
      } else {
        synth.resume();
      }
      props.onBgChange("#FFB6C1");
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="h-1/6 w-full flex">
      <header>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </header>
      <div className="w-full my-auto">
        <button onClick={handleButtonClick}>
          <span
            className={`material-icons text-4xl ${
              isPlaying
                ? "text-[#f58d9d] hover:text-[#f7778a]"
                : "text-green-400 hover:text-green-500"
            }`}
            style={{ fontSize: "65px" }}
          >
            {isPlaying ? "pause_circle" : "play_circle"}
          </span>
        </button>
      </div>
      <div className="w-full flex justify-end my-auto">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
          {props.currentPage}
        </div>
      </div>
    </div>
  );
}

export default TextReader;
