import styles from "./card.module.css";
import classNames from "classnames";
import { AiFillDelete } from "react-icons/ai";
const Card = ({ item, handleClick,handleDelete,active}) => {
  return (
    <div
      className={classNames(styles.container,active==item?.name?'activecard':'')}
      onClick={handleClick?() => handleClick(item):()=>{}}
    >
      <section className={classNames(styles.image)}>
        <img src={item?.image} />
      </section>
      <section className={classNames(styles.caption)}>
        <p>{item?.name}</p> <br/>
      </section>
      <section className={classNames(styles.price)}>
        <p className="text-center text-sm italic">{item?.cost} RWF</p>
      </section>
      <section className={classNames(styles.actionHolder)}>
        {handleDelete && <AiFillDelete size={30} onClick={()=>handleDelete(item)}/>}
      </section>
    </div>
  );
};
export default Card;
