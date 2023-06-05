import Input from './input';
// import style from '../../styles/login.module.css'
import { FaKey } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaLock } from 'react-icons/fa';
import styles from '../../styles/login.module.css'

export default function Login() {

  const router = useRouter();
  const [errorMessages, setError] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('initialState');
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    if(localStorage.getItem('token')) return router.push('/admin/dashboard')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[errorMessages]);




  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    };

    try {
      const res = await (await fetch(`${process.env.API_URL}/api/admin/login`, config)).json();
      if (res.status === 200) {
        localStorage.setItem('token', (res.data.token));
        router.push('/admin/dashboard');
      }
      else {
        setLoading(false);
        setError('error');
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }

  }

  // const handleChange = (e) => {
  //   setState({ ...state, [e.target.name]: e.target.value });
  // };
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Admin Login</h1>
            <form  onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.box1}>
                    <input type="text" placeholder="Username" className={styles.input} onChange={(e)=>setUsername(e.target.value)} />
                    <h1 className={styles.text}>@</h1>
                </div>
                <div className={styles.box1}>
                    <input type="password" placeholder="Password" className={styles.input} onChange={(e)=>setPassword(e.target.value)} />
                    <FaLock className={styles.text1}/>
                </div>
                {errorMessages?<p className={styles.errorMessage}>Username or Password Incorrect</p>:null}
                {/* <a href='' className='text-xs text-red-500 self-end -mt-[25px]'>Forgotten password ?</a> */}
                <button type="submit" className={styles.button}><a href='welcome'>{loading ? "Loading...." : "Login"}</a></button>
            </form>
        </div>
    </div>
    
  )
}
