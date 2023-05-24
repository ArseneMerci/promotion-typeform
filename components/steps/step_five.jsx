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


const StepFive = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.steps);
    // const[loading,setLoading]=useState(false);
    const router = useRouter();
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
        }
    }, []);
    const handleInfo = (e) => {
        const name = e.target.name;
        const value = { ...info, [name]: e.target.value };
        setInfo(value);
        setItem("stageFive", value);
        dispatch(addStageFive(value));
    };
    const successFull = () => {
        // dispatch(next());
        //  setLoading(true);
        router.push("/result");
    };
    const handleSubmit = () => {
        // return successFull();
        if(!info.fname || !info.email || !info.phone || !info.city) return toast.error("Please fill all fields");
        const { products, styles } = selector;
        // const image=dataURItoBlob(selector.pictures[0].files);
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
        <ContentWrapper>
        <div className="container step-container">
            <div className="row">
                <div className="col-lg-12 flex-columns" style={{alignItems:"flex-start"}}>
                    <div className="form-container">
                        <div className="form-header">
                            <h2>Information</h2>
                        </div>
                        <div className="form-contents">
                            <TextField
                                id="standard-basic"
                                name="fname"
                                value={info.fname}
                                label="Enter Full Names"
                                onChange={handleInfo}
                                variant="standard"
                                required
                            />
                            <TextField
                                id="standard-b asic"
                                name="email"
                                value={info.email}
                                label="Enter E-mail"
                                onChange={handleInfo}
                                variant="standard"
                                required
                            />
                            <TextField
                                id="standard-basic"
                                name="phone"
                                value={info.phone}
                                label="Enter Phone"
                                onChange={handleInfo}
                                variant="standard"
                            />
                            <TextField
                                id="standard-basic"
                                value={info.city}
                                label="Enter City"
                                name="city"
                                onChange={handleInfo}
                                variant="standard"
                            />
                        </div>
                        <div className="flex-center">
                            {selector.loading &&(
                                <CircularProgress size={20} color="inherit" />
                            )}
                        </div>
                        <div className="flex-center">
                            <button
                                type="button"
                                className={`form-button`}
                                style = {selector.loading ? { opacity: "0.2", cursor: "not-allowed" } : {}}
                                disabled={selector.loading}
                                onClick={handleSubmit}
                            >
                                <p>{selector.loading? 'Loading...': 'Submit'}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </ContentWrapper>

    );
};
export default StepFive;
