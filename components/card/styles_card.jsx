import styles from "./card.module.css";
import classNames from "classnames";
const StyleCard = ({ selected, item, handleClick }) => {
    return (
        <div
            className={classNames(styles.styleContainer)}
            onClick={() => handleClick(item)}
        >
            <section
                className={classNames(
                    styles.styleCardLeft,
                    selected.includes(item?.name) ? "active" : ""
                )}
            >
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
