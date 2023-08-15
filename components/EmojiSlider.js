import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from '../styles/feedback.module.css'

const emojis = ['😡','🙁','😐','😃','😍'];
const labels = ['Very Dissatisfied','Somewhat Dissatisfied','Neutral','Satisfied','Very Satisfied']; 

const EmojiSlider = ({ onEmojiSelect }) => {
  const [sliderValue, setSliderValue] = useState(2); // Default value in the middle

  const handleSliderChange = (value) => {
    setSliderValue(value);
    console.log(value);
  };

  return (
    <div>
      <div className="emoji-slider">
          <Slider value={sliderValue} onChange={handleSliderChange} min={0} max={emojis.length - 1} />
          <div className='emoji-container'>
            {emojis.map((emoji, index) => (
            <div key={index} className={`emoji ${sliderValue === index ? 'selected' : ''}`} onClick={()=>{setSliderValue(index);onEmojiSelect(labels[index])}}>
                <h1>{emoji}</h1>
                <h1 className={`${sliderValue === index ? styles.label : styles.label2} ${labels[index] === 'Very Dissatisfied' || 'Somewhat Dissatisfied' ? styles.label3 : '' }`}>{labels[index]}</h1>
            </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default EmojiSlider;
