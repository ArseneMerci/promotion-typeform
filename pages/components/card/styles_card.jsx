import styles from "./card.module.css";
import classNames from "classnames";
import Image from "next/image";

const StyleCard = () => {
    return (
        <div className={classNames(styles.styleContainer)}>
            <section className={classNames(styles.styleCardLeft)}>
                <img src="/assets/contemorary.jpg" />
            </section>
            <section className={classNames(styles.styleCardRight)}>
                <h4>Contemporary</h4>
                <small>
                    component accepts a number of additional properties beyond
                    those which ...
                </small>
                <small>
                    component accepts a number of additional properties beyond
                    those which ...
                </small>
            </section>
        </div>
    );
};
export default StyleCard;
