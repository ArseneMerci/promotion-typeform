import styles from './card.module.css'
import classNames from 'classnames';
const Card=()=>{
  return <div className={classNames(styles.container)}>
    <section className={classNames(styles.image)} style={{backgroundImage:`url('/assets/17.png')`}}>
    </section>
    <section className={classNames(styles.caption)}>
        <p>Salon</p>
    </section>
  </div>
}
export default Card;