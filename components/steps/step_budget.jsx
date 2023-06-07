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
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const StepBudget = () => {

    const [minValue, setMinValue] = useState(null);
    const [maxValue, setMaxValue] = useState(null);

    const handleBudgetChange = (values) => {
        setMinValue(values[0]);
        setMaxValue(values[1]);  
    };
    const dispatch = useDispatch();
    const [space, setSpace] = useState("");
    const [budget, setBudget] = useState();
    const [cost, setCost] = useState("");
    useEffect(() => {
        const items = getItem("space");
        
        if (items) {
            setSpace(items.space);
            setCost(items.cost);
            setBudget(items.budget);
            dispatch(addSpace({ space: items.space, cost: items.cost, budget:items.budget}));
        }
    }, []);
    const handleSetBudget=(e)=>{
      setBudget(e.target.value);
      const data = { space: space, budget: e.target.value, cost: cost };
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
                            <h1 className="text-md font-medium mb-4">{`Currency (RWF)`}</h1>
                            {budget && <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={budget}
                                onChange={handleSetBudget}
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="0-500000"
                                    control={<Radio />}
                                    label="Less than 500,000"
                                />
                                <FormControlLabel
                                    value="500000-1000000"
                                    control={<Radio />}
                                    label="500,000 to 1,000,000"
                                />
                                <FormControlLabel
                                    value="1000000-3000000"
                                    control={<Radio />}
                                    label="1,000,000 to 3,000,000"
                                />
                                <FormControlLabel
                                    value="3000000-"
                                    control={<Radio />}
                                    label="3,000,000 and above"
                                />
                            </RadioGroup>}
                       
                        {budget=="" && <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={budget}
                                onChange={handleSetBudget}
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="-500K"
                                    control={<Radio />}
                                    label="Less than 500K"
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
                                    value="3000K-"
                                    control={<Radio />}
                                    label="3000K and above"
                                />
                            </RadioGroup>
                        
                        }
                        </FormControl>
                    </div>
                </div>
                {
                        budget == "0-500000" && 
                        <div className=''>
                            <h1 className='text-danger'>Your budget is low, you should expect minor decorations and space planning only</h1>
                        </div>
                    }
        </div>
    );
};
export default StepBudget;
