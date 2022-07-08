import { useState, useEffect } from "react";
import ImageUploads from "../imagePreview/image_uploading";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { addStageFour } from "../../state/slices/steps.slice";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { getItem, setItem } from "../../utils/persist";
const StepFour = () => {
    const dispatch = useDispatch();
    const [picturesList, setPictures] = useState([]);
    const [planImage, setPlan] = useState([]);
    const [request, setRequest] = useState(true);
    useEffect(() => {
        const data = getItem("stageFour");
        if (data) {
            setPictures(data.pictures);
            setPlan(data.plan);
            setRequest(data.request);
        }
    }, []);
    const onChange = (pictures) => {
        setPictures(pictures);
        console.log(pictures);
    };
    const onPlan = (plan) => {
        setPlan(plan);
    };
    const addToList = () => {
        const data = {
            pictures: picturesList,
            plan: planImage,
            request: request,
        };
        setItem("stageFour", data);
        dispatch(addStageFour(data));
    };
    return (
        <div className="container step-container">
            <div className="row">
                <div className="col-lg-6 col-md-12 flex-columns">
                    <h5>Upload Images</h5>
                    <br />
                    <ImageUploads
                        className="mt-12"
                        onChange={onChange}
                        maxNumber={5}
                        images={picturesList}
                    />
                </div>
                <div className="col-lg-6 col-md-12 flex-columns">
                    <h5>Upload Plan</h5>
                    <br />
                    <ImageUploads
                        className="mt-12"
                        onChange={onPlan}
                        maxNumber={1}
                        images={planImage}
                    />
                </div>
                <div className="col-lg-7 col-md-12 flex-center">
                    <FormGroup>
                        <FormControlLabel
                            value={request}
                            onChange={() => setRequest(!request)}
                            control={<Checkbox />}
                            label="Request a professional data collection (10.000 Rwf)"
                        />
                    </FormGroup>
                </div>
                <div className="col-lg-12 button-holder">
                    <Button onClick={() => addToList()} className="mt-12">
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default StepFour;
