import { useDispatch } from "react-redux";
import Card from "../card";
import { products } from "../../utils/data/data.js";
import { addProduct } from "../../state/slices/steps.slice";
const StepOne = () => {
    const dispatch = useDispatch();
    const addToList = (item) => {
        dispatch(addProduct(item));
    };
    return (
        <div className="container step-container">
            <div className="row">
                {products.map((item, index) => (
                    <div className="col-lg-4 col-md-4 flex-center" key={index}>
                        <Card item={item} handleClick={addToList} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default StepOne;
