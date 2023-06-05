import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { saveOrderAsync } from "../../state/slices/steps.slice";
import { useRouter } from "next/router";
import { clearAll } from "../../utils/persist";
import { toast } from "react-toastify";
// import { next } from "../../../state/slices/steps.slice";
import { addStageFive, next } from "../../state/slices/steps.slice";
import { useEffect } from "react";
import { getItem, setItem } from "../../utils/persist";
import ContentWrapper from "../contentWrapper";
import styles from '../../styles/information.module.css'


const StepFive = () => {
    const dispatch = useDispatch();
    // const selector = useSelector((state) => state.steps);
    // const[loading,setLoading]=useState(false);
    // const router = useRouter();
    // const [file,setFile]=useState([]);
    const [info, setInfo] = useState({
        fname: "",
        email: "",
        phone: "",
        city: "",
    });
    useEffect(() => {
        const data = getItem("stageFive");
        if (data) {
            setInfo(data);
            dispatch(addStageFive(data));
        }
    }, []);
    const handleInfo = (e) => {
        const name = e.target.name;
        const value = { ...info, [name]: e.target.value };
        setInfo(value);
        setItem("stageFive", value);
        dispatch(addStageFive(value));
    };
    // const successFull = () => {
    //     dispatch(next());
    //     //  setLoading(true);
    //     // router.push("/result");
    // };
    const handleSubmit = () => {
        if(!info.fname || !info.email || !info.phone || !info.city) return toast.error("Please fill all fields");
        dispatch(next());
        // return successFull();
        // if(!info.fname || !info.email || !info.phone || !info.city) return toast.error("Please fill all fields");
        // const { products, styles } = selector;
        // // const image=dataURItoBlob(selector.pictures[0].files);
        // const formdata = new FormData();
        // formdata.append("space", products.space);
        // formdata.append("spacePrice", products.price);
        // formdata.append("style", styles.styles);
        // formdata.append("inspirationalPics",JSON.stringify(styles.images));
        // formdata.append("colorStyle", styles.colors.status);
        // formdata.append("colorLiked", styles.colors.like);
        // formdata.append("colorNotLiked", styles.colors.not);
        // formdata.append("improvements", selector.improvements);
        // formdata.append("modification", selector.modification);
        // formdata.append("furnitureToKeep", selector.furnatureToKeep);
        // formdata.append("pictures", JSON.stringify(selector.pictures));
        // formdata.append("plan", selector.plan[0]?.data_url);
        // formdata.append("request", selector.request);
        // formdata.append("fname", info.fname);
        // formdata.append("address", info.city);
        // formdata.append("email", info.email);
        // formdata.append("phoneNumber", info.phone);
        // dispatch(saveOrderAsync({ data: formdata, success: successFull }));
    };
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Personal Information</h1>
                <form action="" className={styles.form}>
                    <label htmlFor="" className={styles.label}>
                        Full names:
                    </label>
                    <input 
                        name="fname"
                        value={info.fname}
                        onChange={handleInfo}
                        required
                        type="text" 
                        className={styles.text} 
                        placeholder="Enter full names" 
                    />
                    <label htmlFor="" className={styles.label}>
                        Email:
                    </label>
                    <input 
                        type="email" 
                        className={styles.text} 
                        placeholder="Enter email" 
                        required
                        name="email"
                        value={info.email}
                        onChange={handleInfo}
                    />
                    <label htmlFor="" className={styles.label}>
                        Phone number
                    </label>
                    <input 
                        type="text" 
                        className={styles.text} 
                        placeholder="Enter phone number" 
                        required
                        name="phone"
                        value={info.phone}
                        onChange={handleInfo}

                    />
                    <label htmlFor="" className={styles.label}>
                        City:
                    </label>
                    <input 
                        type="text" 
                        className={styles.text} 
                        placeholder="Enter city" 
                        required
                        value={info.city}
                        name="city"
                        onChange={handleInfo}
                    />
                    <button 
                        type="submit" 
                        className={styles.btn}
                        onClick={handleSubmit}
                    >
                        Go to Checkout
                    </button>
                </form>
            </div>
        </div>
      )
};
export default StepFive;
