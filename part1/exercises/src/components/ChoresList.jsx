import styles from './ChoresList.module.css';

export default function ChoresList () {
   let chores = ["menu planning", "grocery shopping", "laundry"];

   return (
   <div className={styles.chores}>
      <h1 className={styles.choresHeading}>Things to Do</h1>
      <p className={styles.choresText}><input type="checkbox"></input>{chores[0]}</p>
      <p className={styles.choresText}><input type="checkbox"></input>{chores[1]}</p>
      <p className={styles.choresText}><input type="checkbox"></input>{chores[2]}</p>
   </div>
   );
}