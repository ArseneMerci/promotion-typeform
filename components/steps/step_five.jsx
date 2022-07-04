import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { saveOrderAsync } from "../../state/slices/steps.slice";
import { useRouter } from "next/router";
const StepFive = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.steps);
    const router = useRouter();
    const [info, setInfo] = useState({
        fname: "",
        email: "",
        phone: "",
        city: "",
        village: "",
    });
    const handleInfo = (e) => {
        const name = e.target.name;
        const value = { ...info, [name]: e.target.value };
        setInfo(value);
    };
    const successFull = () => {
        router.push("/result");
    };
    const handleSubmit = () => {
        const { products, styles } = selector;
        const formdata = new FormData();
        formdata.append("space", products.space);
        formdata.append("spacePrice", products.price);
        formdata.append("styles", styles.styles);
        formdata.append("inspirationalPics", styles.styles.images);
        formdata.append("colorStyle", styles.colors.status);
        formdata.append("colorLiked", styles.colors.like);
        formdata.append("colorNotLiked", styles.colors.not);
        formdata.append("improvements", selector.improvements);
        formdata.append("modification", selector.modification);
        formdata.append("furnitureToKeep", selector.furnitureToKeep);
        formdata.append("pictures", selector.pictures);
        formdata.append("plan", selector.plan);
        formdata.append("fname", info.fname);
        formdata.append("address", info.city + " ," + info.village);
        formdata.append("email", info.email);
        formdata.append("phoneNumber", info.phone);
        dispatch(saveOrderAsync({ data: formdata, success: successFull }));
    };
    return (
        <div className="container step-container">
            <div className="row">
                <div className="col-lg-12 flex-center">
                    <div className="form-container">
                        <div className="form-header">
                            <h2>Information</h2>
                        </div>
                        <div className="form-contents">
                            <TextField
                                id="standard-basic"
                                name="fname"
                                label="Enter Full Names"
                                onChange={handleInfo}
                                variant="standard"
                            />
                            <TextField
                                id="standard-b asic"
                                name="email"
                                label="Enter E-mail"
                                onChange={handleInfo}
                                variant="standard"
                            />
                            <TextField
                                id="standard-basic"
                                name="phone"
                                label="Enter Phone"
                                onChange={handleInfo}
                                variant="standard"
                            />
                            <TextField
                                id="standard-basic"
                                label="Enter City"
                                name="city"
                                onChange={handleInfo}
                                variant="standard"
                            />
                            <TextField
                                id="standard-basic"
                                label="Enter Village"
                                name="village"
                                onChange={handleInfo}
                                variant="standard"
                            />
                        </div>
                        <div className="flex-center">
                            {selector.loading && (
                                <CircularProgress size={20} color="inherit" />
                            )}
                        </div>
                        <div className="flex-center">
                            <button
                                type="button"
                                className="form-button"
                                onClick={handleSubmit}
                            >
                                <p>Submit</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default StepFive;