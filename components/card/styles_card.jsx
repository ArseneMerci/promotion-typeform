import styles from "./card.module.css";
import classNames from "classnames";
const StyleCard = ({ item, handleClick }) => {
    return (
        <div
            className={classNames(styles.styleContainer)}
            onClick={() => handleClick(item)}
        >
            <section className={classNames(styles.styleCardLeft)}>
                <img src={item.image} />
            </section>
            <section className={classNames(styles.styleCardRight)}>
                <h4>{item.name}</h4>
                <small>{item.description}</small>
                <small>{item.description}</small>
            </section>
        </div>
    );
};
export default StyleCard;
