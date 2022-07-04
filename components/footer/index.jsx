import styles from "./footer.module.css";
import classNames from "classnames";
import { useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import NextOrPrevButton from "../common/button";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../state/slices/steps.slice";
const Footer = () => {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);
    const { products } = useSelector((state) => state.steps);
    const handleDelete = (item) => {
        dispatch(deleteProduct(item));
    };
    return (
        <div
            className={classNames(
                "container-fluid",
                styles.containerFluid,
                `${toggle ? styles.expand : ""}`
            )}
        >
            <section className={classNames("row", styles.header)}>
                <div className={classNames("col-lg-3", styles.toggleHolder)}>
                    <section>
                        {/* <button
                            onClick={() => setToggle(!toggle)}
                            type="button"
                            className={classNames(styles.toggleButton)}
                        >
                            <span>{products.length}</span>
                            <BsFillBagFill size={25} />
                            <small>Selected Items</small>
                        </button> */}
                    </section>
                </div>
                <div className={classNames("col-lg-7", styles.actionHolder)}>
                    <NextOrPrevButton />
                </div>
            </section>
            <section className={classNames("row", styles.row)}>
                <div className={classNames("col-lg-12", styles.itemSlider)}>
                    {/* item goes here */}
                </div>
            </section>
        </div>
    );
};
export default Footer;
