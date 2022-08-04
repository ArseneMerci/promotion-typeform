import Input from './input';
import style from '../../styles/login.module.css'
import { FaKey } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Login() {

  const router = useRouter();
  const initialState = {
    username: "",
    password: ""
  };

  const [errorMessages, setError] = useState('');

  const [state, setState] = useState(initialState);
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
      body: JSON.stringify(state)
    };

    try {
      const res = await (await fetch(`https://promotion-typeform-api.herokuapp.com/api/admin/login`, config)).json();
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

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.loginFormContainer} >
      <div className={style.loginTitle} >
        <h1>Login</h1>

      </div>
      <div className={style.loginContainer} >
        <form onSubmit={handleSubmit} >
          <div className={style.flexIcons} >
            <AiFillMail className={style.loginIcon} color='#002966' />
            <Input placeholder={'Username'} name={'username'} type="text" handleOnchange={handleChange} />
          </div>
          <div className='flex-icons'>
            <FaKey className={style.loginIcon} color='#002966' />
            <Input placeholder={'Password'} name={'password'} type="password" handleOnchange={handleChange} />
          </div>
          {errorMessages?<p className={style.errorMessage}>Username or Password Incorrect</p>:null}
          <button className={style.loginButton}>{loading ? "Loading...." : "Login"}</button>
        </form>
      </div>
    </div>
  );
}
