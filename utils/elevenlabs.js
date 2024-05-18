import axios from 'axios'; // Used for making HTTP requests
import { createWriteStream } from 'fs'; // Used for working with the file system

// Define constants for the script
const CHUNK_SIZE = 1024; // Size of chunks to read/write at a time
const XI_API_KEY = "<xi-api-key>"; // Your API key for authentication
const VOICE_ID = "<voice-id>"; // ID of the voice model to use

/**
 * Generate speech from text and save it as an audio file.
 * 
 * @param {string} textToSpeak - Text you want to convert to speech.
 * @param {string} outputPath - Path to save the output audio file.
 */
async function generateSpeech(textToSpeak, outputPath) {
    // Construct the URL for the Text-to-Speech API request
    const ttsUrl = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/stream`;

    // Set up headers for the API request, including the API key for authentication
    const headers = {
        "Accept": "application/json",
        "xi-api-key": XI_API_KEY
    };

    // Set up the data payload for the API request, including the text and voice settings
    const data = {
        "text": textToSpeak,
        "model_id": "eleven_multilingual_v2",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.8,
            "style": 0.0,
            "use_speaker_boost": true
        }
    };

    try {
        // Make the POST request to the TTS API with headers and data, enabling streaming response
        const response = await axios({
            method: 'post',
            url: ttsUrl,
            headers: headers,
            data: data,
            responseType: 'stream'
        });

        // Open the output file in write-binary mode
        const writer = createWriteStream(outputPath);
        // Pipe the response data to the file
        response.data.pipe(writer);

        // Return a promise that resolves when the file is fully written
        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        // Print the error message if the request was not successful
        console.error(error.response ? error.response.data : error.message);
        throw error;
    }
}

export { generateSpeech };

// Example usage (in another ESModule file):
// import { generateSpeech } from './path-to-this-file';
// generateSpeech("Hello, world!", "output.mp3")
//     .then(() => console.log("Audio stream saved successfully."))
//     .catch(error => console.error("Error:", error));
