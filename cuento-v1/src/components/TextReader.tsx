import { useState, useEffect } from "react";

interface TextReaderProps {
  text: string;
  onBgChange: (newBgColor: string) => void;
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
  }, [props.text]);

  function handleButtonClick() {
    if (!synth || !utterance) return;

    if (isPlaying) {
      synth.pause();
      props.onBgChange("");
    } else {
      synth.speak(utterance);
      synth.resume();
      props.onBgChange("#FFB6C1");
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="h-full w-1/12 flex justify-center">
      <header>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </header>
      <button className="w-full" onClick={handleButtonClick}>
        <span
          className={`material-icons text-4xl ${
            isPlaying ? "text-[#f58d9d]" : "text-green-400"
          }`}
          style={{ fontSize: "65px" }}
        >
          {isPlaying ? "pause_circle" : "play_circle"}
        </span>
      </button>
    </div>
  );
}

export default TextReader;
