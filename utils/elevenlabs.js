// "use strict";

// import axios from 'axios'; // Used for making HTTP requests
// import { createWriteStream } from 'fs'; // Used for working with the file system

// // Define constants for the script
// const CHUNK_SIZE = 1024; // Size of chunks to read/write at a time
// const XI_API_KEY = "2800a75c7d4f8b2cd8a875ded2cd4a68"; // Your API key for authentication
// const VOICE_ID = "rsWTIhwUSKIGTJQpxG2P"; // ID of the voice model to use

// const outputPath = '@public/assets/instructions_audio/'; // Update this to your desired folder path

// async function createIntroAudio(exerciseIntro, exerciseName, outputPath) {
//     const introFileName = `${exerciseName}_intro.mp3`;
//     const introFilePath = `${outputPath}${introFileName}`;
//     const ttsUrl = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/stream`;

//     const headers = {
//         "Accept": "application/json",
//         "xi-api-key": XI_API_KEY
//     };

//     const data = {
//         "text": exerciseIntro,
//         "model_id": "eleven_multilingual_v2",
//         "voice_settings": {
//             "stability": 0.5,
//             "similarity_boost": 0.8,
//             "style": 0.0,
//             "use_speaker_boost": true
//         }
//     };

//     try {
//         const response = await axios({
//             method: 'post',
//             url: ttsUrl,
//             headers: headers,
//             data: data,
//             responseType: 'stream'
//         });

//         const writer = createWriteStream(introFilePath);
//         response.data.pipe(writer);

//         return new Promise((resolve, reject) => {
//             writer.on('finish', resolve);
//             writer.on('error', reject);
//         });
//     } catch (error) {
//         console.error(error.response ? error.response.data : error.message);
//         throw error;
//     }
// }

// async function createInstructionsAudio(exerciseInstructions, exerciseName, outputPath) {
//     const instructionsFileName = `${exerciseName}_instructions.mp3`;
//     const instructionsFilePath = `${outputPath}${instructionsFileName}`;
//     const ttsUrl = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/stream`;

//     const headers = {
//         "Accept": "application/json",
//         "xi-api-key": XI_API_KEY
//     };

//     const data = {
//         "text": exerciseInstructions,
//         "model_id": "eleven_multilingual_v2",
//         "voice_settings": {
//             "stability": 0.5,
//             "similarity_boost": 0.8,
//             "style": 0.0,
//             "use_speaker_boost": true
//         }
//     };

//     try {
//         const response = await axios({
//             method: 'post',
//             url: ttsUrl,
//             headers: headers,
//             data: data,
//             responseType: 'stream'
//         });

//         const writer = createWriteStream(instructionsFilePath);
//         response.data.pipe(writer);

//         return new Promise((resolve, reject) => {
//             writer.on('finish', resolve);
//             writer.on('error', reject);
//         });
//     } catch (error) {
//         console.error(error.response ? error.response.data : error.message);
//         throw error;
//     }
// }

// async function processExerciseSpeech(exerciseName, exerciseNumber, exerciseIntro, exerciseInstructions) {
//     try {
//         await createIntroAudio(exerciseIntro, exerciseName, outputPath);
//         await createInstructionsAudio(exerciseInstructions, exerciseName, outputPath);
//     } catch (error) {
//         console.error("Error processing exercise speech:", error);
//         throw error;
//     }
// }

// export { processExerciseSpeech };

// // Example usage (in another ESModule file):
// // import { processExerciseSpeech } from './path-to-this-file';
// // processExerciseSpeech("Push Ups", 1, "Introduction to Push Ups", "Do 20 push ups")
// //     .then(() => console.log("Audio files saved successfully."))
// //     .catch(error => console.error("Error:", error));
