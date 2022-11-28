import Table from "../../components/admin/mainTable";
import DashNavBar from "../../components/admin/DashNavBar";
import SideBar from "../../components/admin/DashBoardSideBar";
import styles from '../../styles/dashboard.module.css'
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function PaidOrders() {

const [data, setData] = useState([])
const router = useRouter()

  useEffect(() => {
    if(!localStorage.getItem('token')) router.push('/admin/login')
    async function fetchData(){
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };
        await axios.get('https://promotion-typeform-api.onrender.com/api/order/all?status=true',config)
            .then((res)=>{
              setData(res.data.data)
            })
            .catch((err)=>console.log('error'))
    }
    fetchData()
  },[]);


  return (
    <div className={styles.dashboard}>
        <div className={styles.dashboardContainer}>
          <SideBar />
          <div className={styles.main}>
            <DashNavBar title={'All Paid Orders'} />
            {data?
            <Table  orders={data} />:
            null
            }
          </div>
        </div>
      </div>
  );
}
