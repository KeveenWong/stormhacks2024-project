import { useState, useEffect } from 'react';
import styles from '@styles/SpeechCard.module.css';
import main from '../utils/openai-test';
require('dotenv').config();

const SpeechCard = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchText = async () => {
      // uncomment for gpt 
      // const result = await main();
      const result = "Hello, this is a simulated speech being displayed in the card.";
      setText(result);
    };

    fetchText();
  }, []);

  useEffect(() => {
    console.log("text: " + text); 
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 20); // Adjust delay for speed of text display
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return (
    <div className={styles.card}>
      <p>{displayedText}</p>
    </div>
  );
};

export default SpeechCard;
