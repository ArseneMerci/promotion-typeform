import { useRouter } from "next/router";
import axios from "axios";

export default function ReferralsTable({ referrals }) {
const router = useRouter()
// const handleComplete = async(e,id)=>{
//     e.preventDefault()
//     const response = confirm('Do you want to Mark it as completed?')
//     if(!response) return
//     const config = {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//     };
//     const url = `${process.env.API_URL}/api/referrals/${id}?status=true`
//     await axios.put(url,null,config)
//         .then(()=>{
//             router.push('/admin/Allreferralss')
//         })
//         .catch((err)=>alert('An error occured! try Again'))
// }

  return (
        <><table className="table mt-3 mb-5">
          <thead className="thead-dark">
              <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Code</th>
                  <th scope="col">Percentage</th>
              </tr>
          </thead>
          <tbody>
            {
                referrals && referrals.map((referral)=>{
                    return (
                    <tr key={referral._id}>
                    <td scope="row">{referral.referralName}</td>
                    <td>{referral.referralCode}</td>
                    <td>{referral.referralPercentage}%</td>
                    </tr>
                    )
                })
            }
              <tr>
                  <td scope="row">{referrals.referralName}</td>
                  <td>{referrals.referralCode}</td>
                  <td>{referrals.referralPercentage}</td>
              </tr>
          </tbody>
      </table>
        </>
  );
}
