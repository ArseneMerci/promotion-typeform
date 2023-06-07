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
    const { space } = useSelector((state) => state.steps);
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
                <div className={classNames("col-lg-12 col-md-12", styles.actionHolder)}>
                    <NextOrPrevButton />
                </div>
            </section>
        </div>
    );
};
export default Footer;
