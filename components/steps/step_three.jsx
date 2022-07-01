import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addStageThree } from "../../state/slices/steps.slice";
const StepThree = () => {
    const dispatch = useDispatch();
    const [option, setOption] = useState("");
    const [furnature, setFurnature] = useState("");
    const [flooring, setFlooring] = useState("");

    const handleChange = (event) => {
        setOption(event.target.value);
    };
    const addToList = () => {
        dispatch(
            addStageThree({
                improvements: option,
                furnatureToKeep: furnature,
                modification: flooring,
            })
        );
    };
    return (
        <div className="container step-container">
            <div className="row">
                <div className="col-lg-12 col-md-12 flex-columns">
                    <h5 className="">
                        o By rethinking your interior, what would you like to
                        improve?
                    </h5>
                    <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 370 }}
                    >
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={option}
                            onChange={handleChange}
                            label=""
                        >
                            <MenuItem value="">
                                <em>Select 2 most important </em>
                            </MenuItem>
                            <MenuItem value="Bring more light">
                                Bring more light{" "}
                            </MenuItem>
                            <MenuItem value="Optimize storage">
                                Optimize storage
                            </MenuItem>
                            <MenuItem value="Review furniture layout">
                                Review furniture layout
                            </MenuItem>
                            <MenuItem value="Review my decoration">
                                Review my decoration{" "}
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-lg-12 col-md-12 flex-columns mt-12">
                    <h5>
                        o Our decoration proposal may involve a modification of
                        your
                        <br /> floor covering, what do you want to do?
                    </h5>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            onChange={(e) => setFlooring(e.target.value)}
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                value="I want to keep my current flooring"
                                control={<Radio />}
                                label="I want to keep my current flooring"
                            />
                            <FormControlLabel
                                value="I am open to new proposals"
                                control={<Radio />}
                                label="I am open to new proposals"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="col-lg-12 col-md-12 flex-columns mt-12">
                    <h5>o Is there any furniture you would like to keep?</h5>

                    <TextField
                        className="stepTwoColors"
                        onChange={(e) => setFurnature(e.target.value)}
                        required
                        id="standard-basic"
                        label="Enter if any"
                        variant="standard"
                    />
                </div>
                <div className="flex-center">
                    {option && flooring && (
                        <Button onClick={() => addToList()} className="mt-12">
                            next
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};
export default StepThree;
