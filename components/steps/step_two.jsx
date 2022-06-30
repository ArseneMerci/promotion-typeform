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
    const maxNumber = 5;

    useEffect(() => {
        designs.filter((item) => {
            if (item.name == products.space) {
                return item.data.length > 0 ? setStyles(item.data) : "";
            }
        });
    }, []);

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };
    const addSelectedStyle = (item) => {
        let check = selectedStyle.includes(item.name);
        if (!check) {
            const newStyle = selectedStyle.concat(item.name);
            setSelectedStyle(newStyle);
        }
    };
    const addToList = () => {
        const style = { styles: selectedStyle, images: images, colors: colors };
        dispatch(addStyle(style));
    };
    return (
        <div className="container step-container">
            {step == 0 && (
                <div className="row">
                    <div className="col-lg-12">
                        <p>o Choose the style that suits you the most</p>
                        {JSON.stringify(selectedStyle)}
                    </div>
                    {styles.map((item, index) => (
                        <div
                            className="col-lg-4 col-md-12 flex-center"
                            key={index}
                        >
                            <StyleCard
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
                        <div className="col-lg-12 flex-center">
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
                    <div className=" col-lg-12 flex-center">
                        <Button onClick={() => setStep(0)} className="mt-12">
                            Back
                        </Button>
                        {images.length > 0 && (
                            <Button
                                onClick={() => setStep(2)}
                                className="mt-12"
                            >
                                Next
                            </Button>
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
                                defaultValue=""
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
                                    label="• Neutral vibe"
                                />
                                <FormControlLabel
                                    value="Neutral ambience with pops of colour"
                                    control={<Radio />}
                                    label="• Neutral ambience with pops of colour"
                                />
                                <FormControlLabel
                                    value="Colourful ambiance "
                                    control={<Radio />}
                                    label="• Colourful ambiance "
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="col-lg-12 flex-columns">
                        <h5 className="stepTwoColors">
                            o are there any colours you like?
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
                        />
                    </div>
                    <div className="col-lg-12 flex-columns">
                        <h5 className="stepTwoColors">
                            o are there any colours you do not like?
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
                        />
                    </div>
                    <div className="col-lg-12 flex-center">
                        <Button onClick={() => setStep(0)} className="mt-12">
                            Back
                        </Button>
                        {colors.status && (
                            <Button
                                onClick={() => addToList()}
                                className="mt-12"
                            >
                                Next
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
export default StepTwo;
