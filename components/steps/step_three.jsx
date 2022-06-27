import ImageUploads from "../imagePreview/image_uploading";
import Divider from "@mui/material/Divider";
const StepThree = () => {
    return (
        <div className="container step-container">
            <div className="row">
                <div className="col-lg-6 col-md-12 flex-columns">
                    <h5>Upload Plan</h5>
                    <Divider component="li" variant="inset" />
                    <ImageUploads />
                </div>
                <div className="col-lg-6 col-md-12 flex-columns">
                    <h5>Upload Images</h5>
                    <Divider component="li" variant="inset" />
                    <ImageUploads />
                </div>
            </div>
        </div>
    );
};
export default StepThree;
