import { useRouter } from "next/router";
import axios from "axios";

export default function Table({ order }) {
const router = useRouter()
const handleComplete = async(e,id)=>{
    e.preventDefault()
    const response = confirm('Do you want to Mark it as completed?')
    if(!response) return
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    const url = `${process.env.API_URL}/api/order/${id}?status=true`
    await axios.put(url,null,config)
        .then(()=>{
            router.push('/admin/AllOrders')
        })
        .catch((err)=>alert('An error occured! try Again'))
}

  return (
        <><table className="table mt-3 mb-5">
          <thead className="thead-dark">
              <tr>
                  <th scope="col">Client Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Space</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Color Style</th>
                    <th scope="col">Color Liked</th>
                    <th scope="col">Color Not Liked</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td scope="row">{order.client.fname}</td>
                  <td>{order.client.address}</td>
                  <td>{order.client.email}</td>
                  <td>{order.client.phoneNumber}</td>
                  <td scope="row">{order.space}</td>
                    <td>{order.spacePrice}</td>
                    <td>{order.colorStyle}</td>
                    <td>{order.colorLiked}</td>
                    <td>{order.colorNotLiked}</td>
              </tr>
          </tbody>
      </table>
        <table className="table mt-3">
              <thead className="thead-dark">
                  <tr>
                      <th scope="col">Modification</th>
                      <th scope="col">Furniture to Keep</th>
                      <th scope="col">status</th>
                      <th scope="col">Requesting Assistance</th>
                      <th scope="col">Ordered At</th>
                      <th scope="col">Completed At</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td scope="row">{order.modification}</td>
                      <td>{order.furnitureToKeep}</td>
                      <td>{order.status?'Completed':'Incomplete'}</td>
                      <td>{order.request?'Yes':'No'}</td>
                      <td>{order.createdAt?order.createdAt.split("T")[0]:null}</td>
                      {
                        order.status? <td>{order.updatedAt?order.updatedAt.split("T")[0]:null}</td>
                                    : <td><button className="btn btn-primary"  onClick={(e)=>handleComplete(e,order._id)}>Complete</button></td>
                      }
                  </tr>
              </tbody>
          </table></>
  );
}
