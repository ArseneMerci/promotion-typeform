import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from "../../../components/admin/Table";
import DashNavBar from "../../../components/admin/DashNavBar";
import SideBar from "../../../components/admin/DashBoardSideBar";
import styles from '../../../styles/dashboard.module.css'
import OtherData from '../../../components/admin/otherData';
import ImageContainer from '../../../components/admin/imageContainer';

const Post = () => {
  const router = useRouter()
  const [data, setData] = useState({client:''})
  useEffect(() => {
    if(!localStorage.getItem('token')) router.push('/admin/login')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  console.log(data)

  useEffect(() => {
    if(!router.isReady) return
    const { param } = router.query
    console.log(param,'param')
    async function fetchData(){
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };
        await axios.get(`https://promotion-typeform-api.onrender.com/api/order/${param}`,config)
            .then((res)=>{
              setData(res.data.data)
            })
            .catch((err)=>console.log('error'))
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[router.isReady]);

  return (
    <div className={styles.dashboard}>
        <div className={styles.dashboardContainer}>
          <SideBar />
          <div className={styles.main}>
            {data?(
            <>
              <DashNavBar title={data.client?`${data.client.email.split("@")[0]}'s Order`:null}/>
              <Table order={data} />
              <OtherData order={data} />
              <ImageContainer order={data} />
            </>
            ): null }
          </div>
        </div>
      </div>
  );
}

export default Post
