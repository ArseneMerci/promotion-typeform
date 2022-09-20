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
import { getItem, setItem } from "../../utils/persist";
import { addSpace } from "../../state/slices/steps.slice";
import { useEffect } from "react";
const StepPrice = () => {
    const dispatch = useDispatch();
    const [space, setSpace] = useState("");
    const [price, setPrice] = useState();
    useEffect(() => {
        const items = getItem("space");
        
        if (items) {
            setSpace(items.space);
            setPrice(items.price);
            dispatch(addSpace({ space: items.space, price: items.price}));
        }
    }, []);
    const handleSetPrice=(e)=>{
      setPrice(e.target.value);
      const data = { space: space, price: e.target.value };
      setItem("space", data);
      dispatch(addSpace(data));
    }
    return (
        <div className="container step-container">
                <div className="row onstep-one-one">
                    <div className={`col-lg-12 col-md-4 `}>
                        <FormControl>
                            <p className="text-title">
                                o Have you planned a budget that you want to
                                devote to it?
                            </p>
                            {price && <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={price}
                                onChange={handleSetPrice}
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="300K-500K"
                                    control={<Radio />}
                                    label="300K-500K"
                                />
                                <FormControlLabel
                                    value="500K-1000K"
                                    control={<Radio />}
                                    label="500K to 1000K"
                                />
                                <FormControlLabel
                                    value="1000K-3000K"
                                    control={<Radio />}
                                    label="1000K to 3000K"
                                />
                                <FormControlLabel
                                    value="3000K"
                                    control={<Radio />}
                                    label="3000K"
                                />
                            </RadioGroup>}
                       
                        {price=="" && <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={price}
                                onChange={handleSetPrice}
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="300K-500K"
                                    control={<Radio />}
                                    label="300K-500K"
                                />
                                <FormControlLabel
                                    value="500K-1000K"
                                    control={<Radio />}
                                    label="500K to 1000K"
                                />
                                <FormControlLabel
                                    value="1000K-3000K"
                                    control={<Radio />}
                                    label="1000K to 3000K"
                                />
                                <FormControlLabel
                                    value="3000K"
                                    control={<Radio />}
                                    label="3000K"
                                />
                            </RadioGroup>
                        
                        }
                        </FormControl>
                    </div>
                </div>
        </div>
    );
};
export default StepPrice;
