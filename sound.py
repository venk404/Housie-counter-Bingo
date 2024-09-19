import os
from gtts import gTTS

# Create a folder to save the audio files
output_folder = "number_sounds"
os.makedirs(output_folder, exist_ok=True)

# Loop from 1 to 90
for i in range(1, 91):
    # Convert the number to text
    number_text = str(i)
    
    # Use gTTS to generate the sound
    tts = gTTS(text=number_text, lang='en')
    
    # Save the file as "1.mp3", "2.mp3", ..., "90.mp3"
    output_file = os.path.join(output_folder, f"{i}.mp3")
    tts.save(output_file)

    print(f"Saved: {output_file}")

print("All files generated and saved successfully!")
