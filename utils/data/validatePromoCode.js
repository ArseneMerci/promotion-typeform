import axios from "axios";


// const promoCodes = {
//     "Yannick": {
//       "code": 87129,
//       "discount": 10,
//     },
//     "User2": {
//       "code": 54371,
//       "discount": 10,
//     },
//     "Testing": {
//       "code": 12345,
//       "discount": 100,
//     },
//     "merge": {
//       "code": 97532,
//       "discount": 30,
//     },
//   };
  
  const validatePromoCode = async(code) => {
      const config = {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      };
      try{
        const resp =  await axios.get(`${process.env.API_URL}/api/referrals/exists/${code}`,config)
        const referral = resp.data.data;
        console.log(referral)
      return {valid:true,promo:{ discount: referral.referralPercentage, code: referral.referralCode },name:referral.referralName}
      } catch(err){
        return { valid: false, promo: null, name: null };
      }
  };  

export default validatePromoCode;
