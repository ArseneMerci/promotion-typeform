import React from 'react'
import styles from '../../styles/information.module.css'

const StepEight = () => {
    return (
      <div className={styles.mainContainer}>
          <div className={styles.container}>
              <h1 className={styles.title}>Personal Information</h1>
              <form action="" className={styles.form}>
                  <label htmlFor="" className={styles.label}>
                      Full names:
                  </label>
                  <input type="text" className={styles.text} placeholder="Enter full names" required/>
                  <label htmlFor="" className={styles.label}>
                      Email:
                  </label>
                  <input type="email" className={styles.text} placeholder="Enter email" required/>
                  <label htmlFor="" className={styles.label}>
                      Phone number
                  </label>
                  <input type="text" className={styles.text} placeholder="Enter phone number" required/>
                  <label htmlFor="" className={styles.label}>
                      City:
                  </label>
                  <input type="text" className={styles.text} placeholder="Enter city" required/>
                  <button type="submit" className={styles.btn}>Submit</button>
              </form>
          </div>
      </div>
    )
  }
  
  export default StepEight

