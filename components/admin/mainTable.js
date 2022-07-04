import { useRouter } from "next/router";

export default function Table({ orders }) {
const router = useRouter()
const handleDetails = (e,id)=>{
    e.preventDefault()
    router.push(`/admin/order/${id}`)
}
  return (
        <table className="table mt-3">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Client Name</th>
                <th scope="col">Address</th>
                <th scope="col">Space</th>
                <th scope="col">Status</th>
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
                        <td><button className="btn btn-primary" onClick={(e)=>handleDetails(e,order._id)}>Details</button></td>
                        {order.status
                            ?<td><p className="text-success">Completed</p></td>
                            :<td><button className="btn btn-primary">Complete</button></td>
                        }
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
  );
}
