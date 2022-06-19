import styles from "./footer.module.css";
import classNames from "classnames";
import { useState } from "react";
import { BsFillBagFill, BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { next } from "../../state/slices/steps.slice";

const Footer = () => {
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
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
                        <button
                            onClick={() => setToggle(!toggle)}
                            type="button"
                            className={classNames(styles.toggleButton)}
                        >
                            <span>7</span>
                            <BsFillBagFill size={25} />
                            <small>Selected Items</small>
                        </button>
                    </section>
                </div>
                <div className={classNames("col-lg-7", styles.actionHolder)}>
                    <button
                        className={classNames(styles.button)}
                        onClick={() => dispatch(next())}
                    >
                        <small>Next</small>
                        <BsArrowRight size={15} />
                    </button>
                </div>
            </section>
            <section className={classNames("row", styles.row)}>
                <div className={classNames("col-lg-9", styles.itemSlider)}>
                    <h2>Footer</h2>
                </div>
                <div className={classNames("col-lg-2")}>footer</div>
            </section>
        </div>
    );
};
export default Footer;
