import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { saveOrderAsync } from "../../state/slices/steps.slice";
import { useRouter } from "next/router";
import { clearAll } from "../../utils/persist";
import { toast } from "react-toastify";
import ContentWrapper from "../contentWrapper";
import styles from '../../styles/checkout.module.css';
import pic from '../../public/assets/1.jpg'
import Image from "next/image";
import { AiFillCheckCircle } from 'react-icons/ai';

const StepFive = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.steps);
    const[loading,setLoading]=useState(false);
    const router = useRouter();
    const [file,setFile]=useState([]);
    const [info, setInfo] = useState({
        fname: "",
        email: "",
        phone: "",
        city: "",
    });
    const handleInfo = (e) => {
        const name = e.target.name;
        const value = { ...info, [name]: e.target.value };
        setInfo(value);
    };
    const successFull = () => {
         setLoading(true);
        router.push("/result");
    };
    const handleSubmit = () => {
        if(!info.fname || !info.email || !info.phone || !info.city) return toast.error("Please fill all fields");
        const { products, styles } = selector;
        // const image=dataURItoBlob(selector.pictures[0].files);
        console.log(products.space);
        const formdata = new FormData();
        formdata.append("space", products.space);
        formdata.append("spacePrice", products.price);
        formdata.append("style", styles.styles);
        formdata.append("inspirationalPics",JSON.stringify(styles.images));
        formdata.append("colorStyle", styles.colors.status);
        formdata.append("colorLiked", styles.colors.like);
        formdata.append("colorNotLiked", styles.colors.not);
        formdata.append("improvements", selector.improvements);
        formdata.append("modification", selector.modification);
        formdata.append("furnitureToKeep", selector.furnatureToKeep);
        formdata.append("pictures", JSON.stringify(selector.pictures));
        formdata.append("plan", selector.plan[0]?.data_url);
        formdata.append("request", selector.request);
        formdata.append("fname", info.fname);
        formdata.append("address", info.city);
        formdata.append("email", info.email);
        formdata.append("phoneNumber", info.phone);
        dispatch(saveOrderAsync({ data: formdata, success: successFull }));
    };
    return (
        // <ContentWrapper>
        // <div className="container step-container">
        //     <div className="row">
        //         <div className="col-lg-12 flex-columns" style={{alignItems:"flex-start"}}>
        //             <div className="form-container">
        //                 <div className="form-header">
        //                     <h2>Information</h2>
        //                 </div>
        //                 <div className="form-contents">
        //                     <TextField
        //                         id="standard-basic"
        //                         name="fname"
        //                         label="Enter Full Names"
        //                         onChange={handleInfo}
        //                         variant="standard"
        //                         required
        //                     />
        //                     <TextField
        //                         id="standard-b asic"
        //                         name="email"
        //                         label="Enter E-mail"
        //                         onChange={handleInfo}
        //                         variant="standard"
        //                         required
        //                     />
        //                     <TextField
        //                         id="standard-basic"
        //                         name="phone"
        //                         label="Enter Phone"
        //                         onChange={handleInfo}
        //                         variant="standard"
        //                     />
        //                     <TextField
        //                         id="standard-basic"
        //                         label="Enter City"
        //                         name="city"
        //                         onChange={handleInfo}
        //                         variant="standard"
        //                     />
        //                 </div>
        //                 <div className="flex-center">
        //                     {selector.loading || loading &&(
        //                         <CircularProgress size={20} color="inherit" />
        //                     )}
        //                 </div>
        //                 <div className="flex-center">
        //                     <button
        //                         type="button"
        //                         className="form-button"
        //                         disable={selector.loading || loading}
        //                         onClick={handleSubmit}
        //                     >
        //                         <p>Submit</p>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </ContentWrapper>
        <div className="" style={{display:"flex",justifyContent:"space-between", padding: "50px 100px" }}>
            <div className={styles.container}>
                <h1 className={styles.title}>Double checking, before making payment</h1>
                <p className={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa placeat, illo ratione voluptatum numquam optio amet quos perspiciatis.</p>
                <div className={styles.card}>
                    <div className={styles.photoCard}>
                        <div className={styles.photo}>
                            <Image
                                src={pic}
                                className={styles.blogPhoto1}   
                                alt="Picture of process"
                                layout="fill"
                            />
                        </div>
                        <div className={styles.photo}>
                            <Image
                                src={pic}
                                className={styles.blogPhoto1}   
                                alt="Picture of process"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div className={styles.cardDetails}>
                        <h1 style={{fontSize:"23px" ,fontWeight:"600" , marginBottom:"20px"}}>Kids bedroom</h1>
                        <div style={{display:"flex ",marginBottom:"10px"}}>
                            <AiFillCheckCircle style={{color:"green",marginRight:"5px", fontSize:"20px",marginTop:"-1px"}}/>
                            <h1 style={{fontSize:"14px",color:"gray" ,fontWeight:"400"}}>300,000-500,000 RWF</h1>
                        </div>
                        <div style={{display:"flex"}}>
                            <AiFillCheckCircle style={{color:"green",marginRight:"5px", fontSize:"20px",marginTop:"-1px"}}/>
                            <h1 style={{fontSize:"14px",color:"gray" ,fontWeight:"400"}}>Red,Yellow</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height:"400px" ,borderRight:"1px solid #000",color:"#000"}}></div>
            <div className={styles.container2}>
                <div style={{width:"100%"}}>
                    <h1 style={{fontSize:"13px" ,color:"gray", fontWeight:"400",marginBottom:"10px"}}>{`You've to pay,`}</h1>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:"40px"}}>
                    <div style={{display:"flex"}}><h1 className={styles.fff} style={{fontSize:"30px",marginRight:"8px"}}>RWF</h1><h1 className={styles.fff} style={{fontSize:"30px"}}>300K</h1></div>
                    <h1 className={styles.fff} style={{fontSize:"20px",alignSelf:"center"}}>Total</h1>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
                    <h1 style={{fontSize:"15px",fontWeight:"400"}}>Item</h1>
                    <h1 style={{fontSize:"15px",fontWeight:"400"}}>280K</h1>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h1 style={{fontSize:"15px",fontWeight:"400"}}>Technician fee</h1>
                    <h1 style={{fontSize:"15px",fontWeight:"400"}}>20K</h1>
                </div>
                <button className={styles.btn}>Checkout</button>
            </div>
        </div>
        
    

    );
};
export default StepFive;
