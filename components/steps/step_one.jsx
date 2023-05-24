import { useDispatch } from "react-redux";
import Card from "../card";
import { products } from "../../utils/data/data.js";
import { addSpace } from "../../state/slices/steps.slice";
import { useState } from "react";
import { getItem, setItem } from "../../utils/persist";
import { useEffect } from "react";
import ContentWrapper from "../contentWrapper";

const StepOne = () => {
    console.log(process.env.API_URL, 'url');
    const dispatch = useDispatch();
    const [space, setSpace] = useState("");
    const [price, setPrice] = useState("");
    useEffect(() => {
        const items = getItem("space");
        if (items) {
            setSpace(items.space);
            setPrice(items.price);
            dispatch(addSpace({ space: items.space, price: items.price}));
        }
    }, []);
    const handleAddSpace = (item) => {
        const data = { space: item.name, price: price };
        setSpace(item.name);
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
