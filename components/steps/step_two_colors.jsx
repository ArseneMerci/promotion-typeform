import { useState, useEffect } from "react";
import StyleCard from "../card/styles_card";
import { designs } from "../../utils/data/data.js";
import { useDispatch, useSelector } from "react-redux";
import { addStyle } from "../../state/slices/steps.slice";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { getItem, setItem } from "../../utils/persist";
import ContentWrapper from "../contentWrapper";

const StepTwoColors = () => {
    const dispatch = useDispatch();
    const [step, setStep] = useState(0);
    const [images, setImages] = useState([]);
    const selector = useSelector((state) => state.steps);
    const [styles, setStyles] = useState([]);
    const [selectedStyle, setSelectedStyle] = useState([]);
    const [colors, setColors] = useState({
        status: "",
        like: "",
        not: "",
    });
    const [cacheColors, setCacheColors] = useState({
        status: "",
        like: "",
        not: "",
    });
    const { products } = selector;
    const maxNumber = 2;

    useEffect(() => {
        designs.filter((item) => {
            if (item.name == products.space) {
                return item.data.length > 0 ? setStyles(item.data) : "";
            }
        });
    }, []);
    useEffect(() => {
        const s_styles = getItem("styles");
        console.log(s_styles);
        if (s_styles) {
            setSelectedStyle(s_styles.styles);
            setImages(s_styles.images);
            setCacheColors(s_styles.colors);
            console.log(s_styles);
        }
    }, []);
    const handleNotLikeColor = (e) => {
        setColors({
            ...colors,
            ["not"]: e.target.value,
        });
        const style = { styles: styles, images: images, colors: colors };
        setItem("styles", style);
        dispatch(addStyle(style));
    };
    const handleLikeColor = (e) => {
        setColors({
            ...colors,
            ["like"]: e.target.value,
        });
        const style = { styles: styles, images: images, colors: colors };
        setItem("styles", style);
        dispatch(addStyle(style));
    };
    const handleOnColors = (e) => {
        setColors({
            ...colors,
            ["status"]: e.target.value,
        });
        const style = { styles: styles, images: images, colors: colors };
        setItem("styles", style);
        dispatch(addStyle(style));
    };
    return (
        <ContentWrapper>
        <div className="container step-container">
            <div className="row">
                <div
                    className="col-lg-12 flex-columns"
                    style={{ alignItems: "flex-start" }}
                >
                    <FormControl>
                        <p className="text-title">
                            1. On colours you are more ??
                        </p>
                        {cacheColors.status && (
                            <RadioGroup
                                style={{ marginLeft: "1rem" }}
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={cacheColors.status}
                                onChange={handleOnColors}
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="Neutral vibe"
                                    control={<Radio />}
                                    label="Neutral vibe"
                                />
                                <FormControlLabel
                                    value="Neutral ambience with pops of colour"
                                    control={<Radio />}
                                    label="Neutral ambience with pops of colour"
                                />
                                <FormControlLabel
                                    value="Colourful ambiance "
                                    control={<Radio />}
                                    label="Colourful ambiance "
                                />
                            </RadioGroup>
                        )}
                        {cacheColors.status == "" && (
                            <RadioGroup
                                style={{ marginLeft: "1rem" }}
                                aria-labelledby="demo-radio-buttons-group-label"
                                onChange={handleOnColors}
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="Neutral vibe"
                                    control={<Radio />}
                                    label="Neutral vibe"
                                />
                                <FormControlLabel
                                    value="Neutral ambience with pops of colour"
                                    control={<Radio />}
                                    label="Neutral ambience with pops of colour"
                                />
                                <FormControlLabel
                                    value="Colourful ambiance "
                                    control={<Radio />}
                                    label="Colourful ambiance "
                                />
                            </RadioGroup>
                        )}
                    </FormControl>
                </div>
                <div
                    className="col-lg-12 flex-columns"
                    style={{ alignItems: "flex-start" }}
                >
                    <p className="stepTwoColors text-title">
                        2. Are there any colours you like?
                    </p>
                    {cacheColors.like && (
                        <TextField
                            className="stepTwoColors"
                            onChange={handleLikeColor}
                            required
                            id="standard-basic"
                            label="Enter color"
                            variant="standard"
                            defaultValue={cacheColors.like}
                        />
                    )}
                    {cacheColors.like == "" && (
                        <TextField
                            className="stepTwoColors"
                            onChange={handleLikeColor}
                            required
                            id="standard-basic"
                            label="Enter color"
                            variant="standard"
                        />
                    )}
                </div>
                <div
                    className="col-lg-12 flex-columns"
                    style={{ alignItems: "flex-start" }}
                >
                    <p className="stepTwoColors text-title">
                        3. Are there any colours you do not like?
                    </p>
                    {cacheColors.not && (
                        <TextField
                            className="stepTwoColors"
                            onChange={handleNotLikeColor}
                            required
                            id="standard-basic"
                            label="Enter color if any"
                            variant="standard"
                            defaultValue={cacheColors.not}
                        />
                    )}
                    {cacheColors.not == "" && (
                        <TextField
                            className="stepTwoColors"
                            onChange={handleNotLikeColor}
                            required
                            id="standard-basic"
                            label="Enter color if any"
                            variant="standard"
                        />
                    )}
                </div>
            </div>
        </div>
        </ContentWrapper>
    );
};
export default StepTwoColors;
