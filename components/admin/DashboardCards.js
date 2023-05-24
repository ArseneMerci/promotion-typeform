import styles from '../../styles/dashCards.module.css';
import Card from './card';

export default function DahboardCards({ Cards }) {
  return (
    <div className={styles.projectCards} >
      <Card data={Cards[0].completed || '-'} title="Completed Orders"/>
      <Card data={Cards[0].inComplete || '-'} title="Incomplete Orders"/>
      <Card data={Cards[0].completed?Cards[0].completed+ Cards[0].inComplete:'-'} title="All Orders"/>
    </div>
  );
}
