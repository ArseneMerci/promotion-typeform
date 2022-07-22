import { useState, useEffect } from "react";
import StyleCard from "../card/styles_card";
import { designs } from "../../utils/data/data.js";
import { useDispatch, useSelector } from "react-redux";
import { addStyle } from "../../state/slices/steps.slice";
import { Button } from "@mui/material";
import ImageUploads from "../imagePreview/image_uploading";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { getItem, setItem } from "../../utils/persist";
const StepTwo = () => {
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
        if (s_styles) {
            setSelectedStyle(s_styles.styles);
            setImages(s_styles.images);
            setColors(s_styles.colors);
        }
    }, []);

    const onChange = (imageList) => {
        setImages(imageList);
    };
    const addSelectedStyle = (item) => {
        let check = selectedStyle.includes(item.name);
        if (!check) {
            console.log(selectedStyle.length)
            if(selectedStyle.length >= 2)
            {
                return;
            }
            const newStyle =selectedStyle.concat(item.name);
            setSelectedStyle(newStyle);
        }
        if (check) {
            const result = selectedStyle.filter(
                (selected) => selected != item.name
            );
            setSelectedStyle(result);
        }
    };
    const addToList = () => {
        const style = { styles: selectedStyle, images: images, colors: colors };
        setItem("styles", style);
        dispatch(addStyle(style));
    };
    return (
        <div className="container step-container">
            {step == 0 && (
                <div className="row">
                    <div className="col-lg-12">
                        <p>o Choose the style that suits you the most</p>
                    </div>
                    {styles.map((item, index) => (
                        <div
                            className="col-lg-4 col-md-12 flex-center"
                            key={index}
                        >
                            <StyleCard
                                selected={selectedStyle}
                                item={item}
                                handleClick={addSelectedStyle}
                            />
                        </div>
                    ))}
                    <div className="col-lg-12 flex-center ">
                        {
                            <Button
                                onClick={() => setStep(1)}
                                className="mt-12"
                            >
                                Add my own inspiration pictures
                            </Button>
                        }
                    </div>
                    {selectedStyle.length > 0 && (
                        <div className="col-lg-12 flex-center button-holder">
                            <Button
                                onClick={() => setStep(2)}
                                className="mt-12"
                            >
                                Next
                            </Button>
                        </div>
                    )}
                </div>
            )}
            {step == 1 && (
                <div className="row">
                    <div className="col-lg-12 flex-center">
                        <p>Add your inspiration pictures </p>
                    </div>
                    <div className="col-lg-12 flex-center">
                        <div className="col-lg-6 col-md-12 flex-center mt-12">
                            <ImageUploads
                                onChange={onChange}
                                maxNumber={maxNumber}
                                images={images}
                            />
                        </div>
                    </div>
                    <div className="button-holder">
                        {images.length > 0 && (
                            <div className="button-holder">
                                <Button
                                    onClick={() => setStep(2)}
                                    className="mt-12"
                                >
                                    Next
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {step == 2 && (
                <div className="row">
                    <div className="col-lg-12 flex-center">
                        <FormControl>
                            <h5>o On colours you are more ??</h5>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={colors.status}
                                onChange={(e) =>
                                    setColors({
                                        ...colors,
                                        ["status"]: e.target.value,
                                    })
                                }
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="Neutral vibe "
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
                        </FormControl>
                    </div>
                    <div className="col-lg-12 flex-columns">
                        <h5 className="stepTwoColors">
                            o Are there any colours you like?
                        </h5>
                        <TextField
                            className="stepTwoColors"
                            onChange={(e) =>
                                setColors({
                                    ...colors,
                                    ["like"]: e.target.value,
                                })
                            }
                            required
                            id="standard-basic"
                            label="Enter color"
                            variant="standard"
                            defaultValue={colors.like}
                        />
                    </div>
                    <div className="col-lg-12 flex-columns">
                        <h5 className="stepTwoColors">
                            o Are there any colours you do not like?
                        </h5>
                        <TextField
                            className="stepTwoColors"
                            onChange={(e) =>
                                setColors({
                                    ...colors,
                                    ["not"]: e.target.value,
                                })
                            }
                            required
                            id="standard-basic"
                            label="Enter color if any"
                            variant="standard"
                            defaultValue={colors.not}
                        />
                    </div>
                    <div className="col-lg-12 button-holder">
                        <button onClick={() => setStep(0)} className="mt-12">
                            Back
                        </button>
                        {colors.status && (
                            <button
                                onClick={() => addToList()}
                                className="mt-12"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
export default StepTwo;
