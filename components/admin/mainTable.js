import axios from "axios";
import { useRouter } from "next/router";

export default function Table({ orders }) {
const router = useRouter()
const handleDetails = (e,id)=>{
    e.preventDefault()
    router.push(`/admin/order/${id}`)
}

const handleComplete = async(e,id)=>{
    e.preventDefault()
    const response = confirm('Do you want to Mark it as completed?')
    if(!response) return
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    const url = `https://portal-api.cyclic.app/api/order/${id}?status=true`
    await axios.put(url,null,config)
        .then(()=>{
            router.push('/admin/AllOrders')
        })
        .catch((err)=>alert('An error occured! try Again'))
}
  return (
        <table className="table mt-3">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Client Name</th>
                <th scope="col">Address</th>
                <th scope="col">Space</th>
                <th scope="col">Status</th>
                <th scope="col">Requesting Assistance</th>
                <th scope="col">View Details</th>
                <th scope="col">Mark Completed</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders && orders.map((order)=>{
                        return (
                        <tr key={order._id}>
                        <th scope="row">{order.client.email}</th>
                        <td>{order.client.address}</td>
                        <td>{order.space}</td>
                        <td>{order.status?'Completed':'InCompleted'}</td>
                        <td>{order.request?<span className="text-success">Yes</span>:'No'}</td>
                        <td><button className="btn btn-primary" onClick={(e)=>handleDetails(e,order._id)}>Details</button></td>
                        {order.status
                            ?<td><p className="text-success">Completed</p></td>
                            :<td><button className="btn btn-primary"  onClick={(e)=>handleComplete(e,order._id)}>Complete</button></td>
                        }
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
  );
}
