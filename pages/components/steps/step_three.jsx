import { useState } from "react";
import ImageUploading from "react-images-uploading";
import Button from "@mui/material/Button";
import ImagePreview from "../imagePreview";
import ImageUploads from "../imagePreview/image_uploading";
const StepThree = () => {
    return (
        <div className="container step-container">
            <div className="row">
                <div className="col-lg-6 col-md-12 flex-columns">
                    <ImageUploads />
                </div>
                <div className="col-lg-6 col-md-12 flex-columns">
                    <ImageUploads />
                </div>
            </div>
        </div>
    );
};
export default StepThree;
