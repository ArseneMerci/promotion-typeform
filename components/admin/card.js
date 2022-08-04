import { FaTasks } from 'react-icons/fa';
import { useRouter } from 'next/router';
import styles from '../../styles/dashCards.module.css'

export default function Card({data, title}) {

  const router = useRouter()
  return (
    <>
          <div className={styles.projectCard} >
            <div className={styles.stats}>
              <p className={styles.new}> {data} </p>
              <p>{ title }</p>
            </div>
            <FaTasks className="cards-image" />
          </div>
    </>
  );
}
