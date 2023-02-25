import Layout from '../components/Layout2'
import styles from '@/styles/Intro.module.css'
import { useState } from 'react';
import Image from 'next/image'
import ThreePoints from '../components/ThreePoints'
import FourPoints from '../components/FourPoints'
import FivePoints from '../components/FivePoints'




export default function notinthearmy() {
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      }

    return(<Layout>
        <h1 className={styles.h1}>בשעה טובה 🎉</h1>
        <div className={styles.wrapper}>
            <p>תנו בראש, שימו לב שלא עברו חמישה שנים מאז השחרור שלכם 😁</p>
        <div className={styles.textwrap}>
        <h2 className={styles.h2}>מה השם שלכם?</h2>
        <input></input>
        </div>
        <div className={styles.textwrap}>
        <h2 className={styles.h2}>מספר טלפון?</h2>
        <input></input>
        </div>
        <div className={styles.textwrap}>
        <h2 className={styles.h2}>שם היחידה שלכם?</h2>
        <input></input>
        </div>
        <div className={styles.textwrap}>
        <h2 className={styles.h2}>כמה יחידות עשיתם בתיכון?</h2>
        </div>
        </div>
        <div>


      <form className={styles.form}>
       <label className={styles.radioButton}>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
          3 יחידות אנגלית
          <span className={styles.span}></span>
        </label>
        
        <label className={styles.radioButton}>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
          5 יחידות אנגלית
          <span></span>
        </label>
        <label className={styles.radioButton}>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
          4 יחידות אנגלית          
                    <span></span>
        </label>
      </form>

      {selectedOption === "option1" && <ThreePoints/>}
      {selectedOption === "option2" && <FivePoints/>}
          {selectedOption === "option3" && <FourPoints/>}
    </div>
    
        
        


    </Layout>)
};
