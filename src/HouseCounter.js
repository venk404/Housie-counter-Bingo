import React, { useState, useEffect, useCallback, useRef } from 'react';

// Utility function to generate the sound files dictionary
const generateSoundFilesDictionary = () => {
  const dict = {};
  for (let i = 1; i <= 90; i++) {
    dict[i] = new Audio(`/Sounds/${i}.mp3`);
  }
  return dict;
};

const NumberComponent = ({ number, color }) => (
  <div
    className={`w-12 h-12 m-1 flex items-center justify-center ${color} text-white font-bold rounded-full`}
  >
    {number}
  </div>
);

const HouseCounter = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [colors, setColors] = useState(Array(91).fill('bg-blue-500 bg-opacity-50'));
  const [generatedNumbers, setGeneratedNumbers] = useState([]);
  const [soundFiles, setSoundFiles] = useState({});
  const [isAutoGenerating, setIsAutoGenerating] = useState(false);
  const autoGenerateIntervalRef = useRef(null);
  const currentAudioRef = useRef(null);

  useEffect(() => {
    setSoundFiles(generateSoundFilesDictionary());
  }, []);

  const handleReset = () => {
    setGeneratedNumbers([]);
    setSelectedNumber(0);
    setColors(Array(91).fill('bg-blue-500 bg-opacity-50'));
    stopAutoGenerate();
  };

  const playAudioSlowly = useCallback((audio) => {
    return new Promise((resolve) => {
      audio.playbackRate = 1; // Normal playback speed
      audio.play();
      audio.onended = resolve;
    });
  }, []);

  const generateNumber = useCallback(async () => {
    if (generatedNumbers.length === 90) {
      alert("All numbers have been generated!");
      stopAutoGenerate();
      return;
    }
   
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 90) + 1; // Generate numbers from 1 to 90
    } while (generatedNumbers.includes(randomNumber));

    setSelectedNumber(randomNumber);
    setGeneratedNumbers(prev => [...prev, randomNumber]);
    
    setColors(prevColors => {
      const newColors = [...prevColors];
      newColors[randomNumber] = 'bg-red-500';
      return newColors;
    });

    // Play the sound if not muted
          if (soundFiles[randomNumber]){
            currentAudioRef.current = soundFiles[randomNumber];
            await playAudioSlowly(currentAudioRef.current);
          }
  }, [generatedNumbers, soundFiles, playAudioSlowly]);

  const startAutoGenerate = () => {
    setIsAutoGenerating(true);
    generateNumber(); // Generate first number immediately
    autoGenerateIntervalRef.current = setInterval(generateNumber, 3000); // Then every 3 seconds
  };

  const stopAutoGenerate = () => {
    setIsAutoGenerating(false);
    clearInterval(autoGenerateIntervalRef.current);
  };

  const toggleAutoGenerate = () => {
    if (isAutoGenerating) {
      stopAutoGenerate();
    } else {
      startAutoGenerate();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Housie Counter</h1>
      <div className="text-2xl font-bold mb-4">
        Selected Number: {selectedNumber !== 0 ? selectedNumber : '-'}
      </div>
      <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-10 gap-2 mb-8">
        {Array.from({ length: 90 }, (_, i) => (
          <NumberComponent key={i + 1} number={i + 1}  color={colors[i + 1]}/>
        ))}
      </div>
      <div className="space-x-4 flex items-center">
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors"
          onClick={generateNumber}
          disabled={isAutoGenerating}
        >
          Generate
        </button>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          onClick={toggleAutoGenerate}
        >
          {isAutoGenerating ? 'Stop Auto Generate' : 'Start Auto Generate'}
        </button>
        <button
          className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-colors"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default HouseCounter;
