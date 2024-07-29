import React from 'react';
import styles from './Title.module.css';

interface TitleProperties {
  text: string;
  size?: 'small' | 'medium' | 'large';
}

const Title: React.FC<TitleProperties> = ({ text, size = 'medium' }) => {
  let fontSize: string;

  switch (size) {
    case 'small':
      fontSize = '1.5rem';
      break;
    case 'medium':
      fontSize = '2rem';
      break;
    case 'large':
      fontSize = '2.5rem';
      break;
    default:
      fontSize = '2rem';
  }

  return (
    <h1 className={styles.title} style={{ fontSize }}>
      {text}
    </h1>
  );
};

export default Title;
