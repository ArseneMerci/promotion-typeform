import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { Button, Checkbox, FormGroup } from "@mui/material";
import { useDispatch } from "react-redux";
import { addStageThree } from "../../state/slices/steps.slice";
import { getItem, setItem } from "../../utils/persist";
const StepThree = () => {
    const dispatch = useDispatch();
    const [option, setOption] = useState([""]);
    const [furnature, setFurniture] = useState("");
    const [flooring, setFlooring] = useState("");
    useEffect(() => {
        const s_styles = getItem("stageThree");
        if (s_styles) {
            setOption(
                typeof s_styles.improvements === "string"
                    ? s_styles.improvements.split(",")
                    : s_styles.improvements
            );
            setFurniture(s_styles.furnatureToKeep);
            setFlooring(s_styles.modification);
        }
    }, []);
    const handlesetOptions = (e) => {
        const value = e.target.value;
        const check = option.includes(value);
        if (!check) {
            setOption(option.concat(value));
            const data = {
                improvements: option.concat(value),
                furnatureToKeep: furnature,
                modification: flooring,
            };
            setItem("stageThree", data);
            dispatch(addStageThree(data));
        }
        if (check) {
            let filtered = option.filter((item) => item != value);
            setOption(filtered);
            const data = {
                improvements: filtered,
                furnatureToKeep: furnature,
                modification: flooring,
            };
            setItem("stageThree", data);
            dispatch(addStageThree(data));
        }
    };
    const handleSetFurniture = (e) => {
        setFurniture(e.target.value);
        const data = {
            improvements: option,
            furnatureToKeep: furnature,
            modification: flooring,
        };
        setItem("stageThree", data);
        dispatch(addStageThree(data));
    };
    console.log(option);
    const handleSetFlooring = (e) => {
        setFlooring(e.target.value);
        const data = {
            improvements: option,
            furnatureToKeep: furnature,
            modification: e.target.value,
        };
        setItem("stageThree", data);
        dispatch(addStageThree(data));
    };

    return (
        <div className="container step-container">
            <div
                className="row flex-columns"
                style={{ alignItems: "flex-start" }}
            >
                <div className="col-lg-8 col-md-12">
                    <p className="text-title">
                        By rethinking your interior, what would you like to
                        improve?
                    </p>
                    <FormGroup style={{ marginLeft: "20px" }}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Bring more light"
                            value="Bring more light"
                            checked={option.includes("Bring more light")}
                            onChange={handlesetOptions}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Optimize storage"
                            value="Optimize storage"
                            checked={option.includes("Optimize storage")}
                            onChange={handlesetOptions}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Review furniture layout"
                            value="Review furniture layout"
                            onChange={handlesetOptions}
                            checked={option.includes("Review furniture layout")}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Review my decoration"
                            value="Review my decoration"
                            checked={option.includes("Review my decoration")}
                            onChange={handlesetOptions}
                        />
                    </FormGroup>
                </div>
                <div className="col-lg-8 col-md-12  mt-[10px]">
                    <br />
                    <p className="text-title">
                        Our decoration proposal may involve a modification{" "}
                        <br /> of your floor covering, what do you want to do?
                    </p>
                    <br />
                    <FormControl style={{ marginLeft: "20px" }}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            value={flooring}
                            onChange={handleSetFlooring}
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                value="I want to keep my current flooring"
                                control={<Radio />}
                                label="I want to keep my current flooring"
                            />
                            <FormControlLabel
                                value="I am open to new proposals"
                                control={<Radio />}
                                label="I am open to new proposals"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="col-lg-8 col-md-12  mt-12">
                    <br />
                    <p className="text-title">
                        Is there any furniture you would like to keep?
                    </p>

                    <TextField
                        className="stepTwoColors"
                        onChange={handleSetFurniture}
                        required
                        id="standard-basic"
                        label="Enter if any"
                        value={furnature}
                        variant="standard"
                        style={{ width: "70%", marginLeft: "20px" }}
                    />
                </div>
            </div>
        </div>
    );
};
export default StepThree;
