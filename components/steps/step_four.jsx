import { useState, useEffect } from "react";
import ImageUploads from "../imagePreview/image_uploading";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { addStageFour } from "../../state/slices/steps.slice";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { getItem, setItem } from "../../utils/persist";
import ContentWrapper from "../contentWrapper";

const StepFour = () => {
    const dispatch = useDispatch();
    const [picturesList, setPictures] = useState([]);
    const [planImage, setPlan] = useState([]);
    const [request, setRequest] = useState(false);
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
        const data = {
            pictures: picturesList,
            plan: planImage,
            request: request,
        };
        setItem("stageFour", data);
        dispatch(addStageFour(data));
    };
    const onPlan = (plan) => {
        setPlan(plan);
        const data = {
            pictures: picturesList,
            plan: plan,
            request: request,
        };
        setItem("stageFour", data);
        dispatch(addStageFour(data));
    };
    const onRequest = (requestData) => {
        setRequest(requestData);
        const data = {
            pictures: picturesList,
            plan: planImage,
            request: requestData,
        };
        console.log(request,'request')
        setItem("stageFour", data);
        dispatch(addStageFour(data));
    };
    return (
        <ContentWrapper>
        <div className="container step-container">
            <div className="row">
                <div
                    className="col-lg-6 col-md-12 flex-columns"
                    style={{ alignItems: "flex-start" }}
                >
                    <p className="text-title">Upload Images</p>
                    <p><small>Here you upload pictures of your current room</small></p>
                    {/* <p style={{marginTop:"-20px"}}><small>Here you upload pictures of your current room</small></p> */}
                    <br />
                    <ImageUploads
                        className="mt-12"
                        onChange={onChange}
                        maxNumber={5}
                        images={picturesList}
                    />
                </div>
                <div
                    className="col-lg-6 col-md-12 flex-columns"
                    style={{ alignItems: "flex-start" }}
                >
                    <p className="text-title">Upload Plan</p>
                    <p><small>Here you upload a picture of your floor plan</small></p>
                    {/* <p style={{marginTop:"-20px"}}><small>Here you upload a picture of your floor plan</small></p> */}
                    <br />
                    <ImageUploads
                        className="mt-12"
                        onChange={onPlan}
                        maxNumber={1}
                        images={planImage}
                    />
                </div>
                <div
                    className="col-lg-7 col-md-12 flex-columns"
                    style={{ alignItems: "flex-start" }}
                >
                    <FormGroup>
                        <FormControlLabel
                            value={request}
                            checked={request}
                            onChange={() => onRequest(!request)}
                            control={<Checkbox />}
                            label="Select if you would like us to send a professional to take picture and measure your floor plan(10.000 Rwf)"
                        />
                    </FormGroup>
                </div>
            </div>
        </div>
        </ContentWrapper>
    );
};
export default StepFour;
