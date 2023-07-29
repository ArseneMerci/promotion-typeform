import Table from "../../components/admin/referralTable";
import DashNavBar from "../../components/admin/DashNavBar";
import SideBar from "../../components/admin/DashBoardSideBar";
import styles from '../../styles/dashboard.module.css'
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function AllReferrals() {

const [data, setData] = useState([])
const router = useRouter()

  useEffect(() => {
    if(!localStorage.getItem('token')) router.push('/admin/login')
    async function fetchData(){
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };
        await axios.get(`${process.env.API_URL}/api/referrals/all`,config)
            .then((res)=>{
              console.log(res.data.data)
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
            <DashNavBar title={'All Referrals'} />
            {data?
            <Table referrals={data} />:
            null
            }
          </div>
        </div>
      </div>
  );
}
