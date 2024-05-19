import { useState, useEffect } from 'react';
import styles from '@styles/SpeechCard.module.css';

const SpeechCard = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText(''); // Reset displayed text when text changes
    setIndex(0); // Reset index when text changes
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
