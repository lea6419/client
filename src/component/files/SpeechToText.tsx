import  { useState, useEffect } from 'react';

function SpeechToText({ onTextChange }: { onTextChange: (transcript: string) => void }) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    
    if (!('webkitSpeechRecognition' in window)) {
      console.error('Web Speech API is not supported in this browser.');
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.lang = 'he'; // שנה לשפה הרצויה

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event: { results: any[]; resultIndex: number; }) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            currentTranscript += event.results[i][0].transcript;
          } else {
            currentTranscript += event.results[i][0].transcript + '...'; // הצגת תוצאות ביניים
          }
        }
        setTranscript(currentTranscript);
        onTextChange(currentTranscript);
      };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening, onTextChange]);

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div>
      <button onClick={toggleListening}>
        {isListening ? 'עצור הקלטה' : 'התחל הקלטה'}
      </button>
      <p>{transcript}</p>
    </div>
  );
}

export default SpeechToText;