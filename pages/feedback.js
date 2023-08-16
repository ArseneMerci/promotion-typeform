/* eslint-disable react-hooks/rules-of-hooks */
import styles from '../styles/feedback.module.css'
import EmojiSlider from '../components/EmojiSlider'
import { useState } from 'react'
import axios from 'axios'
import Image from "next/image";
import Link from "next/link";
import log from "../public/assets/logo.png";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Stepper from 'react-stepper-horizontal';
import { useSelector } from 'react-redux';


const feedback = () => {
    const [ fullName,setFullName ] = useState(null);
    const [ phone , setPhone ] = useState(null);
    const [ concept ,setConcept ] = useState({});
    const [ management ,setManagement ] = useState({});
    const [ loader ,setLoader ] = useState();
    const count = useSelector((state)=>state.pages.value);


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
        setLoader(true);
        try {
            if(!fullName || !phone){
                setLoader(false);
                return toast.warning('Please provide name and contact.');
            }
            const feedbackData = {
                fullName,
                emailOrPhone:phone,
                'concept': concept,
                'projectManagement': management,
            }

          const response = await axios.post(`https://mozaik-portal-api-wgwap.ondigitalocean.app/api/feedback/new`,  feedbackData );
          setConcept({});
          setManagement({});
          setFullName(null);
          setPhone(null);
          setLoader(false);
          return toast.success(response.data.message, {
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        } catch (error) {
            setLoader(false);
            return toast.error('Internet Connection Error', {
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
      };
  return (
    <div className={`${styles.mainContainer} `}>
      <ToastContainer />
        <div style={{ cursor: "pointer" }}>
            <Link href='/'>
                <Image src={log} width='120px' height='100px' alt='logg' />
            </Link>
        </div>
        <div className={`${styles.container} border-[1px] border-amber-500 rounded`}>
            <Stepper steps={ [{title: 'Concept'}, {title: `Management`}] } activeStep={ count } />
            <h1 className={styles.maintitle}>{`We'd love to hear from you`}</h1>
            {count === 0 && <div>
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
            </div>}
            {count === 1 && <div style={{marginTop:'50px'}}>
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
            </div>}
            <form className={styles.form}>
                <input type="text" value={fullName} className="" placeholder="Enter your names" onChange={(e)=>setFullName(e.target.value)} required/>
                <input type="text" value={phone} className="" placeholder="Enter email or phone number" onChange={(e)=>setPhone(e.target.value)} required/>
            </form>
            <div onClick={handleSubmitFeedback} className={!loader ? 'flex justify-center cursor-pointer items-center bg-black text-white my-7 rounded w-[150px] h-[40px]' : 'flex justify-center items-center text-white my-7 rounded w-[150px] h-[40px] bg-gray-700 cursor-not-allowed'}> 
                {!loader ? <h1 className='text-white font-semibold'>Submit</h1>
                :
                <div role="status" className='flex'>
                    <h1 className='text-white font-semibold mr-3'>Please wait</h1>
                    <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default feedback