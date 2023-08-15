/* eslint-disable react-hooks/rules-of-hooks */
import styles from '../styles/feedback.module.css'
import EmojiSlider from '../components/EmojiSlider'
import { useState } from 'react'
import axios from 'axios'
import Image from "next/image";
import Link from "next/link";
import log from "../public/assets/logo.png";

const feedback = () => {
    const [ fullName,setFullName ] = useState(null);
    const [ phone , setPhone ] = useState(null);
    const [ concept ,setConcept ] = useState({});
    const [ management ,setManagement ] = useState({});

    const handleEmojiSelect = (questionIndex, emojiIndex) => {
        setConcept((prevData) => ({
          ...prevData,
          [questionIndex]: emojiIndex,
        }));
      };
    const handleEmojiManagementSelect = (questionIndex, emojiIndex) => {
        setManagement((prevData) => ({
          ...prevData,
          [questionIndex]: emojiIndex,
        }));
      };

      const handleSubmitFeedback = async (e) => {
        e.preventDefault();
        try {

            const feedbackData = {
                fullName,
                emailOrPhone:phone,
                'concept': concept,
                'projectManagement': management,
            }
            console.log(feedbackData);

          const response = await axios.post(`https://mozaik-portal-api-wgwap.ondigitalocean.app/api/feedback/new`, { feedbackData });
          console.log(response);

        } catch (error) {
          console.error('Error submitting feedback:', error);
        }
      };
  return (
    <div className={styles.mainContainer}>
        <div style={{ cursor: "pointer" }}>
            <Link href='/'>
                <Image src={log} width='120px' height='100px' alt='logg' />
            </Link>
        </div>
        <div className={styles.container}>
            <div>
                <h1 className={styles.maintitle}>{`We'd love to hear from you`}</h1>
                <h1 className={styles.maintitle}>{`Concept`}</h1>

                <div>
                    <h1 className={styles.title}>{`1.Timeliness of clarity of communication regarding project updates and changes`}</h1>
                    <EmojiSlider questionIndex={'Timeliness of clarity of communication regarding project updates and changes'} onEmojiSelect={(emojiIndex) => handleEmojiSelect('Timeliness of clarity of communication regarding project updates and changes', emojiIndex)}/>
                </div>
                <div>
                    <h1 className={styles.title}>{`2.Ability to understand and address your design preferences and requirements`}</h1>
                    <EmojiSlider questionIndex='Ability to understand and address your design preferences and requirements' onEmojiSelect={(emojiIndex) => handleEmojiSelect('Ability to understand and address your design preferences and requirements', emojiIndex)}/>
                </div>
                <div>
                    <h1 className={styles.title}>{`3.Professionalism and courtesy of our staff`}</h1>
                    <EmojiSlider questionIndex={'Professionalism and courtesy of our staff'} onEmojiSelect={(emojiIndex) => handleEmojiSelect('Professionalism and courtesy of our staff', emojiIndex)}/>
                </div>
                <div>
                    <h1 className={styles.title}>{`4.Responsiveness to your feedback and requests`}</h1>
                    <EmojiSlider questionIndex={'Responsiveness to your feedback and requests'} onEmojiSelect={(emojiIndex) => handleEmojiSelect('Responsiveness to your feedback and requests', emojiIndex)}/>
                </div>
                <div>
                    <h1 className={styles.title}>{`5.Overall satisfaction with the interior design service provided.`}</h1>
                    <EmojiSlider questionIndex={'Overall satisfaction with the interior design service provided'} onEmojiSelect={(emojiIndex) => handleEmojiSelect('Overall satisfaction with the interior design service provided', emojiIndex)}/>
                </div>
            </div>
            <div style={{marginTop:'50px'}}>
                <h1 className={styles.maintitle}>{`Project management`}</h1>
                <div>
                    <h1 className={styles.title}>{`1. Adherence to project timelines and deadlines.`}</h1>
                    <EmojiSlider questionIndex={'Adherence to project timelines and deadlines'} onEmojiSelect={(emojiIndex) => handleEmojiManagementSelect('Adherence to project timelines and deadlines', emojiIndex)}/>
                </div>
                <div>
                    <h1 className={styles.title}>{`2. Handling of unexpected challenges or changes during the project`}</h1>
                    <EmojiSlider questionIndex={'Handling of unexpected challenges or changes during the project'} onEmojiSelect={(emojiIndex) => handleEmojiManagementSelect('Handling of unexpected challenges or changes during the project', emojiIndex)}/>
                </div>
                <div>
                    <h1 className={styles.title}>{`3.Professionalism and courtesy of our staff`}</h1>
                    <EmojiSlider questionIndex={'Professionalism and courtesy of our staff'} onEmojiSelect={(emojiIndex) => handleEmojiManagementSelect('Professionalism and courtesy of our staff', emojiIndex)}/>
                </div>
                <div>
                    <h1 className={styles.title}>{`4. Attention to detail in the execution of design elements.`}</h1>
                    <EmojiSlider questionIndex={'Attention to detail in the execution of design elements'} onEmojiSelect={(emojiIndex) => handleEmojiManagementSelect('Attention to detail in the execution of design elements', emojiIndex)}/>
                </div>
                <div>
                    <h1 className={styles.title}>{`5.Quality of materials and furnishings used.`}</h1>
                    <EmojiSlider questionIndex={'Quality of materials and furnishings used'} onEmojiSelect={(emojiIndex) => handleEmojiManagementSelect('Quality of materials and furnishings used', emojiIndex)}/>
                </div>
            </div>
            <form className={styles.form}>
                <input type="text" value={fullName} className="" placeholder="Enter your names" onChange={(e)=>setFullName(e.target.value)} required/>
                <input type="text" value={phone} className="" placeholder="Enter email or phone number" onChange={(e)=>setPhone(e.target.value)} required/>
            </form>
            <button onClick={handleSubmitFeedback}>Submit</button>
        </div>
    </div>
  )
}

export default feedback