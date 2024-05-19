import axios from 'axios';
import { createWriteStream } from 'fs';
import path from 'path';

// Define constants for the script
const XI_API_KEY = "a42b9d76aefb8c7c6cf9ebf01231340a"; // Your API key for authentication
const VOICE_ID = "nbh8sJLTwilP7NHXTpBz"; // ID of the voice model to use

const outputPath = path.join(process.cwd(), 'public', 'assets', 'instructions_audio'); // Update this to your desired folder path

const createAudio = async (text, fileName) => {
  const ttsUrl = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/stream`;
  
  const headers = {
    "Accept": "application/json",
    "xi-api-key": XI_API_KEY
  };
  
  const data = {
    "text": text,
    "model_id": "eleven_multilingual_v2",
    "voice_settings": {
      "stability": 0.25,
      "similarity_boost": 0.8,
      "style": 0.0,
      "use_speaker_boost": true
    }
  };

  try {
    const response = await axios({
      method: 'post',
      url: ttsUrl,
      headers: headers,
      data: data,
      responseType: 'stream'
    });

    const filePath = path.join(outputPath, fileName);
    const writer = createWriteStream(filePath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    throw error;
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { exerciseName, exerciseIntro, exerciseInstructions } = req.body;

    try {
      await createAudio(exerciseIntro, `${exerciseName}_intro.mp3`);
      await createAudio(exerciseInstructions, `${exerciseName}_instructions.mp3`);
      res.status(200).json({ message: 'Audio files created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create audio files' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
