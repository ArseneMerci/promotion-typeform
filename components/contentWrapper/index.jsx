import styles from "./wrapper.module.css";
import classNames from "classnames";
const ContentWrapper = (props) => {
    return <div className={classNames(styles.container)}>
        {props.children}
    </div>;
};
export default ContentWrapper;
