# House Counter

House Counter is a React-based web application designed to assist in playing housie (also known as bingo or tambola) during the Ganpati festival season. This digital solution addresses the challenges of manual number calling, ensuring accuracy and ease in number generation during the game.

## Background

During the Ganpati festival, many communities enjoy playing housie as a social activity. However, manual number calling can be prone to errors and can be difficult to manage, especially in larger gatherings. This application was created to solve these issues by providing a reliable, automated number generation and tracking system.

## Features

- Generate random numbers from 1 to 90, simulating a traditional housie game
- Visual representation of called numbers for easy tracking
- Audio playback for each generated number, ensuring clear communication
- Auto-generate mode with configurable interval for consistent pacing
- Reset functionality to start a new game

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Python (v3.6 or later) - for generating audio files

## Local Setup

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/yourusername/house-counter.git
   cd house-counter
   ```

2. Install the project dependencies:
   ```
   npm install
   ```

3. Generate audio files (see "Generating Audio Files" section below)

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Generating Audio Files

The project includes a Python script to generate MP3 audio files for each number, which is crucial for clear number announcements during the game. Follow these steps to create the audio files:

1. Install the required Python package:
   ```
   pip install gTTS
   ```

2. Run the Python script:
   ```
   python generate_audio.py
   ```

3. The script will create a folder named `number_sounds` and generate 90 MP3 files named `1.mp3` through `90.mp3`.

4. Move the generated MP3 files to the `public/Sounds` directory in your React project.

### About the Python Script

The `generate_audio.py` script uses the Google Text-to-Speech (gTTS) library to convert numbers to speech. Here's a brief explanation of how it works:

- It creates a folder called `number_sounds` to store the generated audio files.
- It loops through numbers 1 to 90, converting each number to speech.
- For each number, it generates an MP3 file with the corresponding spoken number.
- The files are saved as `1.mp3`, `2.mp3`, ..., `90.mp3` in the `number_sounds` folder.

This script ensures clear and consistent number announcements during the game.

## Usage

- Click the "Generate" button to select and announce a random number.
- Use the "Start Auto Generate" button to begin automatic number generation every 3 seconds, useful for maintaining a steady pace in the game.
- Click "Stop Auto Generate" to pause the automatic generation, allowing for breaks or discussions during the game.
- Press the "Reset" button to clear all selections and start a new game.

## Customization

- To change the auto-generate interval, modify the `setInterval` call in the `startAutoGenerate` function.
- Adjust the styling by modifying the Tailwind CSS classes in the component to match your preferred visual theme.
- To use a different language for number pronunciation (e.g., Hindi or Marathi for local games), modify the `lang` parameter in the `gTTS` function call in the Python script.

## Benefits for Ganpati Festival Housie Games

- Eliminates human error in number calling
- Ensures fair and random number generation
- Improves audibility with clear audio announcements
- Provides visual tracking for players and organizers
- Allows for flexible pacing with manual and auto-generate options
- Enhances the overall
- gaming experience during festival celebrations
  
##image

![image](https://github.com/user-attachments/assets/cbe9ce5e-db6e-498a-8380-f0a6d8b5429f)

## Contributing

Contributions are welcome! If you have ideas for improvements or new features that could enhance the housie experience during Ganpati festival, please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
