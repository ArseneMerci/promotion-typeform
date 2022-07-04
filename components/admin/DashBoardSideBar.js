import styles from '../../styles/sidebar.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { FaPlus, FaRegListAlt, FaSearch } from 'react-icons/fa';




export default function DashboardSideBar() {
  const router = useRouter();
  return (
    <>
      <div className={styles.sidebar} >
        <div className={styles.sidebarHeader} >
          <h3 style={{ color: "white" }} >MENU</h3>
        </div>
        <div className={styles.sideBarWrapper} >
          <div className={styles.items} >
            <AiFillHome className={styles.sideBarCardsImage} />
            <Link href="/admin/dashboard">
              <a className={ router.pathname == "/admin/dashboard" ? "text-success" : "" }>Dashboard</a>
            </Link>
          </div>
          <div className={styles.items} >
            <FaPlus className={styles.sideBarCardsImage} />
            <Link href="/admin/allOrders">
              <a className={ router.pathname == "/admin/allOrders" ? "text-success" : "" }>All Orders</a>
            </Link>
          </div>
          <div className={styles.items} >
            <FaRegListAlt className={styles.sideBarCardsImage} />
            <Link href="/admin/completeOrders">
              <a className={ router.pathname == "/admin/completeOrders" ? "text-success" : "" }>Completed Orders</a>
            </Link>
          </div>
          <div className={styles.items} >
            <FaSearch className={styles.sideBarCardsImage} />
            <Link href="/admin/inCompleteOrders">
              <a className={ router.pathname == "/admin/inCompleteOrders" ? "text-success" : "" }>Incomplete Orders</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
