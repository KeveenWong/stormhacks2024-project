const axios = require('axios'); // Import the axios library for making HTTP requests
const fs = require('fs'); // Import the fs module for file operations

// Define constants for the script
const CHUNK_SIZE = 1024; // Size of chunks to read/write at a time
const XI_API_KEY = "a42b9d76aefb8c7c6cf9ebf01231340a"; // Your API key for authentication
const VOICE_ID = "<voice-id>"; // ID of the voice model to use
const TEXT_TO_SPEAK = "this is a test"; // Text you want to convert to speech
const OUTPUT_PATH = "output.mp3"; // Path to save the output audio file

// Construct the URL for the Text-to-Speech API request
const ttsUrl = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/stream`;

// Set up headers for the API request, including the API key for authentication
const headers = {
  "Accept": "application/json",
  "xi-api-key": XI_API_KEY
};

// Set up the data payload for the API request, including the text and voice settings
const data = {
  "text": TEXT_TO_SPEAK,
  "model_id": "eleven_multilingual_v2",
  "voice_settings": {
    "stability": 0.5,
    "similarity_boost": 0.8,
    "style": 0.0,
    "use_speaker_boost": true
  }
};

// Make the POST request to the TTS API with headers and data, enabling streaming response
axios.post(ttsUrl, data, { headers: headers, responseType: 'stream' })
  .then((response) => {
    // Create a writable stream to save the output file
    const writer = fs.createWriteStream(OUTPUT_PATH);

    // Pipe the response stream to the output file
    response.data.pipe(writer);

    // Inform the user of success
    console.log("Audio stream saved successfully.");
  })
  .catch((error) => {
    // Print the error message if the request was not successful
    console.error(error.message);
  });
