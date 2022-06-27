import StyleCard from "../card/styles_card";
import { designs } from "../../utils/data/data.js";
import { useDispatch } from "react-redux";
import { addStyle } from "../../state/slices/steps.slice";
const StepTwo = () => {
    const dispatch = useDispatch();
    const addToList = (item) => {
        dispatch(addStyle(item));
    };
    return (
        <div className="container step-container">
            <div className="row">
                {designs.map((item, index) => (
                    <div className="col-lg-4 col-md-12 flex-center" key={index}>
                        <StyleCard item={item} handleClick={addToList} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default StepTwo;
