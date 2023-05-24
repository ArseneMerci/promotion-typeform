import { useState, useEffect } from "react";
import StyleCard from "../card/styles_card";
import { designs } from "../../utils/data/data.js";
import { useDispatch, useSelector } from "react-redux";
import { addStyle, next } from "../../state/slices/steps.slice";
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
        console.log(s_styles);
        if (s_styles) {
            setSelectedStyle(s_styles.styles);
            setImages(s_styles.images);
            setColors(s_styles.colors);

        }
    }, []);
    console.log("calling", selectedStyle);
    const onChange = (imageList) => {
        setImages(imageList);
        const style = { styles: selectedStyle, images: imageList, colors: colors };
        setItem("styles", style);
        dispatch(addStyle(style));
    };
    const addSelectedStyle = (item) => {
        let check = selectedStyle.includes(item.name);
        if (!check) {
            console.log(selectedStyle.length);
            if (selectedStyle.length >= 2) {
                return;
            }
            const newStyle = selectedStyle.concat(item.name);
            setSelectedStyle(newStyle);
            const style = { styles: newStyle, images: images, colors: colors };
            setItem("styles", style);
            dispatch(addStyle(style));
        }
        if (check) {
            const result = selectedStyle.filter(
                (selected) => selected != item.name
            );
            setSelectedStyle(result);
            const style = { styles: result, images: images, colors: colors };
            setItem("styles", style);
            dispatch(addStyle(style));
        }

    };
    return (
        <div className="container step-container">
            {step == 0 && (
                <div className="row">
                    <div className="col-lg-12">
                        <p className="text-title">
                            o Choose the style that suits you the most
                        </p>
                        <p className="text-sm italic -mt-10 mb-5">{`(These visuals help us grasp your taste ,they are not representative to the design to be proposed)`}</p>
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
                </div>
            )}
            {step == 1 && (
                <div className="row">
                    <div className="col-lg-12 flex-columns" style={{ alignItems: "flex-start" }}>
                        <p className="text-title">Add your inspiration pictures </p>
                    </div>
                    <div className="col-lg-12 flex-columns" style={{ alignItems: "flex-start" }}>
                        <div className="col-lg-6 col-md-12 mt-12">
                            <ImageUploads
                                onChange={onChange}
                                maxNumber={maxNumber}
                                images={images}
                            />
                        </div>
                    </div>
                    <div className="col-lg-3 mt-5 flex-columns" style={{ alignItems: "flex-start" }}>
                        <div className="button-holder" style={{ marginLeft: '-4rem' }} >
                            <div className="button-holder">
                                <Button
                                    onClick={() => setStep(0)}
                                    className="mt-12"
                                >
                                    Back
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
            <div className="row" style={{ height: '200px' }}>

            </div>
        </div>
    );
};
export default StepTwo;
