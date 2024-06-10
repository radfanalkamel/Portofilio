// Typewriter.js
import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import styles from './Typewriter.module.scss';

const Typewriter = () => {
  const [text] = useTypewriter({
    words: ['Programmer', 'freelancer', 'FrontEnd'],
    loop: true,
    typeSpeed: 200,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className={styles.typewriter}>
      I am <span>{text}</span>
    </div>
  );
};

export default Typewriter;
