import { useDispatch } from "react-redux";
import Card from "../card";
import { products } from "../../utils/data/data.js";
import { addSpace } from "../../state/slices/steps.slice";
import { useState } from "react";
import { getItem, setItem } from "../../utils/persist";
import { useEffect } from "react";
import ContentWrapper from "../contentWrapper";

const StepOne = () => {
    const dispatch = useDispatch();
    const [space, setSpace] = useState("");
    const [cost, setCost] = useState("");
    const [budget, setBudget] = useState("");
    useEffect(() => {
        const items = getItem("space");
        if (items) {
            setSpace(items.space);
            setCost(items.cost);
            setBudget(items.budget);
            dispatch(addSpace({ space: items.space, cost: items.cost, budget: items.budget}));
        }
    }, []);
    const handleAddSpace = (item) => {
        const data = { space: item.name, cost: item.cost, budget };
        setSpace(item.name);
        setCost(item.cost);
        setItem("space", data);
        dispatch(addSpace(data));
    };
    return (
        <ContentWrapper>
            <div className="container step-container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="text-title">
                            o Which room do you want to decorate or arrange?
                        </p>
                        {/* <p className="text-sm italic -mt-10 mb-5">From 50,000 RWF</p> */}
                    </div>
                    {products.map((item, index) => (
                        <div
                            className={`col-lg-4 col-md-4 flex-center`}
                            key={index}
                        >
                            <Card
                                item={item}
                                handleClick={handleAddSpace}
                                active={space}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </ContentWrapper>
    );
};
export default StepOne;
