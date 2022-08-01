import { useDispatch, useSelector } from "react-redux";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import classNames from "classnames";
import styles from "./button.module.css";
import { next,prev } from "../../../state/slices/steps.slice";
const NextOrPrevButton = () => {
	const dispatch = useDispatch();
	const {activeStep} = useSelector((state) => state.steps);
	return (
		<>
			{activeStep!=0 &&
				<button
					className={classNames(styles.button, styles.back)}
					onClick={() => dispatch(prev())}
				>

					<BsArrowLeft size={15} />
					<small>Back</small>
				</button>
			}
			{activeStep==0 &&
				<span></span>
			}
			<button
				className={classNames(styles.button)}
				onClick={() => dispatch(next())}
			>
				<small>Next</small>
				<BsArrowRight size={15} />
			</button>
		</>
	);
};
export default NextOrPrevButton;
