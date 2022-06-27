import MeasureCard from "../card/measures.card";
import { useSelector } from "react-redux";
import Alert from '@mui/material/Alert';
const StepFour = () => {
    const { products } = useSelector((state) => state.steps);
    return (
        <div className="container step-container">
            <div className="row">
                {products.map((item, index) => (
                    <div className="col-lg-4 col-md-4 flex-center" key={index}>
                        <MeasureCard item={item} />
                    </div>
                ))}
                {!products.length && <Alert severity="warning" className="flex-center">No selected Item — check it out!</Alert>}
            </div>
        </div>
    );
};
export default StepFour;
