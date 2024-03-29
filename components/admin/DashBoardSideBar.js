import styles from '../../styles/sidebar.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { FaRegListAlt } from 'react-icons/fa';




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
          <FaRegListAlt className={styles.sideBarCardsImage} />
            <Link href="/admin/AllOrders">
              <a className={ router.pathname == "/admin/AllOrders" ? "text-success" : "" }>All Orders</a>
            </Link>
          </div>
          <div className={styles.items} >
            <FaRegListAlt className={styles.sideBarCardsImage} />
            <Link href="/admin/completeOrders">
              <a className={ router.pathname == "/admin/completeOrders" ? "text-success" : "" }>Completed Orders</a>
            </Link>
          </div>
          <div className={styles.items} >
          <FaRegListAlt className={styles.sideBarCardsImage} />
            <Link href="/admin/inCompleteOrders">
              <a className={ router.pathname == "/admin/inCompleteOrders" ? "text-success" : "" }>Incomplete Orders</a>
            </Link>
          </div>
          <div className={styles.items} >
          <FaRegListAlt className={styles.sideBarCardsImage} />
            <Link href="/admin/assistant-orders">
              <a className={ router.pathname == "/admin/assistant-orders" ? "text-success" : "" }>Orders Requesting Assistance</a>
            </Link>
          </div>
          <div className={styles.items} >
          <FaRegListAlt className={styles.sideBarCardsImage} />
            <Link href="/admin/newReferral">
              <a className={ router.pathname == "/admin/newReferral" ? "text-success" : "" }>New Referral</a>
            </Link>
          </div>
          <div className={styles.items} >
          <FaRegListAlt className={styles.sideBarCardsImage} />
            <Link href="/admin/allReferrals">
              <a className={ router.pathname == "/admin/allReferrals" ? "text-success" : "" }>All Referral</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
