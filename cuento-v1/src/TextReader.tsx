import { useState, useEffect } from "react";

interface TextReaderProps {
  text: string;
}

function TextReader({ text }: TextReaderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  );

  useEffect(() => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = synth.getVoices()[0];
    setSynth(synth);
    setUtterance(utterance);
  }, [text]);

  useEffect(() => {
    if (!synth || !utterance) return;
    synth.speak(utterance);
    if (isPlaying) {
      synth.resume();
    } else {
      synth.pause();
    }
  }, [isPlaying, synth, utterance]);

  function handleButtonClick() {
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
      <button onClick={handleButtonClick}>
        <span className="material-icons">
          {isPlaying ? "pause_circle" : "play_circle"}
        </span>
      </button>
    </div>
  );
}

export default TextReader;
