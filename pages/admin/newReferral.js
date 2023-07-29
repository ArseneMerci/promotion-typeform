import Table from "../../components/admin/mainTable";
import DashNavBar from "../../components/admin/DashNavBar";
import SideBar from "../../components/admin/DashBoardSideBar";
import styles from '../../styles/dashboard.module.css'
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Referrals() {

const [referralCode, setReferralCode] = useState()
const [referralPercentage, setReferralPercentage] = useState()
const [referralName, setReferralName] = useState('')
const [passcode, setPasscode] = useState()
const [error, setError] = useState('')
const [submitting, setSubmitting] = useState(false)
const router = useRouter()

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!referralPercentage || !referralName || !passcode) {
    return setError("All Fields are required!");
  }
  setError("");
  setSubmitting(true);
  if(passcode !== process.env.SUPER_ADMIN_PASSWORD){
    setSubmitting(false)
    return setError("Wrong Passcode")
  } 
if(referralPercentage > 100 || referralPercentage < 0){
  setSubmitting(false)
  return setError("Referral Percentage must be between 0 and 100")
}
const data = {
  referralName,
  referralPercentage
}
const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
};
  const res = await axios.post(`${process.env.API_URL}/api/referrals/new`, data, config)
              .catch((data)=>{
                if(data.message=='Request failed with status code 409' ) setError("Referral already exists");
                else setError('check your internet connection.')
              });
  if(res){
    if(res.status==201){
      setReferralCode(res.data.data.referralCode)
      setReferralPercentage('')
      setReferralName('')
    }
  }
  return setSubmitting(false)
};


return (
  <div className={styles.dashboard}>
  <div className={styles.dashboardContainer}>
    <SideBar />
    <div className={styles.main}>
      <DashNavBar title={'New Referral'} />
      {/* create a simple input form for referral name and percentage */}
      <div className='m-2'>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <div className="mt-3">
            <label htmlFor="referralName">Referral Name</label>
            <input
              type="text"
              className="w-30 ml-[45px] p-2 border border-gray-300 rounded"
              name="referralName"
              id="referralName"
              value={referralName}
              onChange={(e) => setReferralName(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="referralPercentage">Referral Percentage</label>
            <input
              type="number"
              className="w-30 ml-2 p-2 border border-gray-300 rounded"
              name="referralPercentage"
              id="referralPercentage"
              value={referralPercentage}
              onChange={(e) => setReferralPercentage(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="referralPercentage">Passcode</label>
            <input
              type="password"
              className="w-30 ml-[80px] p-2 border border-gray-300 rounded"
              name="passcode"
              id="passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
            />
          </div>
          
        </div>
        </form>
          {
            submitting?
            <button className='w-40 mt-3 ml-[90px] p-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 focus:outline-none' disabled>Submitting...</button>:
            <button className="w-40 mt-3 ml-[90px] p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none" type="submit" onClick={handleSubmit}>Submit</button>
          }
          {error && <p className='text-red-700 text-sm  mt-3'>{error}</p>}
          {referralCode && <p className='text-green-700, text-sm'>Referral Code: <span className="font-bold ">{referralCode}</span></p>}
        </div>
    </div>
  </div>
</div>
  );
}