import Image from 'next/image'
import { FaLock } from 'react-icons/fa';
import styles from '../../styles/loginTest.module.css'


const TestLogin = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Admin Login</h1>
            <form action="" className={styles.form}>
                <div className={styles.box1}>
                    <input type="text" placeholder="Username" className={styles.input}/>
                    <h1 className={styles.text}>@</h1>
                </div>
                <div className={styles.box1}>
                    <input type="password" placeholder="Password" className={styles.input}/>
                    <FaLock className={styles.text1}/>
                </div>
                {/* <a href='' className='text-xs text-red-500 self-end -mt-[25px]'>Forgotten password ?</a> */}
                <button type="submit" className={styles.button}><a href='welcome'>Login</a></button>
            </form>
        </div>
    </div>
    
  )
}

export default TestLogin