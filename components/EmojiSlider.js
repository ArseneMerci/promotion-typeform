import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const emojis = ['😡','🙁','😐','😃','😍']; // Define your emojis here

const EmojiSlider = ({ onEmojiSelect }) => {
  const [sliderValue, setSliderValue] = useState(1); // Default value in the middle

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
            <div key={index} className={`emoji ${sliderValue === index ? 'selected' : ''}`} onClick={()=>{setSliderValue(index);onEmojiSelect(index)}}>
                {emoji}
            </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default EmojiSlider;
