import { useDispatch } from "react-redux";
import Card from "../card";
import { products } from "../../utils/data/data.js";
import { addProduct } from "../../state/slices/steps.slice";
import { Button } from "@mui/material";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
const StepOne = () => {
    const dispatch = useDispatch();
    const [step, setStep] = useState(0);
    const [space, setSpace] = useState("");
    const [price, setPrice] = useState();

    const addSpace = (item) => {
        setSpace(item.name);
    };
    const addToList = () => {
        dispatch(addProduct({ space: space, price: price }));
    };
    return (
        <div className="container step-container">
            {step == 0 && (
                <div className="row">
                    <div className="col-lg-12">
                        <p>o Choose the style that suits you the most</p>
                    </div>
                    {products.map((item, index) => (
                        <div
                            className={`col-lg-4 col-md-4 flex-center`}
                            key={index}
                        >
                            <Card
                                item={item}
                                handleClick={addSpace}
                                active={space}
                            />
                        </div>
                    ))}
                    {space && <Button onClick={() => setStep(1)}>next</Button>}
                </div>
            )}
            {step == 1 && (
                <div className="row">
                    <div className={`col-lg-12 col-md-4 flex-center`}>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                                o	Which room do you want to decorate/arrange??
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue=""
                                onChange={(e) => setPrice(e.target.value)}
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="300K to 500K"
                                    control={<Radio />}
                                    label="• 300K to 500K"
                                />
                                <FormControlLabel
                                    value="500K to 1000K"
                                    control={<Radio />}
                                    label="• 500K to 1000K"
                                />
                                <FormControlLabel
                                    value="• 1000K to 3000K"
                                    control={<Radio />}
                                    label="• 1000K to 3000K"
                                />
                                <FormControlLabel
                                    value="• >3000K"
                                    control={<Radio />}
                                    label="• >3000K"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="flex-center">
                        <Button onClick={() => setStep(0)}>back</Button>
                        {price && (
                            <Button onClick={() => addToList()}>next</Button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
export default StepOne;
