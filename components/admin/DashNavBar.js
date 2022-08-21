import styles from '../../styles/dashNav.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image'
import user from '../../public/user.png'

export default function DashNavBar({ title }) {
  const router = useRouter();

  function logOut() {
    localStorage.removeItem('token');
    router.push('/admin/login');
  }

  return (
    <div className={styles.dashNav} >
      <div>
        <h3 className={styles.dashboardTitle} >{title}</h3>
      </div>
      <div className={styles.dashNavLinks} >
        <p>
        <Image
          src={user}
          alt="Picture of the Admin"
          width={30}
          height={30}
        />
        </p>
        <p>Admin</p>
        <p onClick={() => logOut()} >Log out</p>
      </div>
    </div>
  );
}
