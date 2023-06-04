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


const StepPrice = () => {

    const [minValue, setMinValue] = useState(null);
    const [maxValue, setMaxValue] = useState(null);

    const handlePriceChange = (values) => {
        setMinValue(values[0]);
        setMaxValue(values[1]);  
    };
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
                            <h1 className="text-md font-medium mb-4">{`Currency (RWF)`}</h1>
                            {price && <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={price}
                                onChange={handleSetPrice}
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
                       
                        {price=="" && <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={price}
                                onChange={handleSetPrice}
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

                    {/* <div className='h-screen bg-white p-56 mx-auto py-20'>
                        <Slider
                            range
                            min={0}
                            max={1000}
                            defaultValue={[0, 1000]}
                            onChange={handlePriceChange}
                        />
                        <div className='flex justify-between'>
                            <div className='h-[50px] w-[100px] border-[1px] border-black rounded'>
                                <h1 className='text-gray-600 text-[13px]'>{`Min (RWF)`}</h1>
                                <h1 className='text-black text-[20px]'>{!minValue ? '0':`${minValue}`}</h1>
                            </div>
                            <div className='h-[50px] w-[100px] border-[1px] border-black rounded'>
                                <h1 className='text-gray-600 text-[13px]'>{`Max (RWF)`}</h1>
                                <h1 className='text-black text-[20px]'>{!maxValue ? '1000':`${maxValue}`}</h1>
                            </div>
                        </div>
                    </div> */}
                </div>
        </div>
    );
};
export default StepPrice;
