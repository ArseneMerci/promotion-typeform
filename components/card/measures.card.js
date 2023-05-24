import styles from "./card.module.css";
import classNames from "classnames";
import TextField from "@mui/material/TextField";
const MeasureCard = ({ item }) => {
    return (
        <div className={classNames(styles.measureCard)}>
            <div className={classNames(styles.measureHeader)}>
                <span>{item.name}</span>
            </div>
            <section className={classNames(styles.measureInputs)}>
                <TextField
                    id="standard-basic"
                    label="Enter width"
                    variant="standard"
                />
                <TextField
                    id="standard-basic"
                    label="Enter height"
                    variant="standard"
                />
            </section>
        </div>
    );
};
export default MeasureCard;
