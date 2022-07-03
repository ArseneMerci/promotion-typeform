import TextField from "@mui/material/TextField";
const StepFive = () => {
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
                                label="Enter Full Names"
                                variant="standard"
                            />
                            <TextField
                                id="standard-b asic"
                                label="Enter E-mail"
                                variant="standard"
                            />
                            <TextField
                                id="standard-basic"
                                label="Enter Phone"
                                variant="standard"
                            />
                            <TextField
                                id="standard-basic"
                                label="Enter City"
                                variant="standard"
                            />
                            <TextField
                                id="standard-basic"
                                label="Enter Village"
                                variant="standard"
                            />
                        </div>
                        <div className="flex-center">
                            <button className="form-button" onClick={() => {}}>
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
