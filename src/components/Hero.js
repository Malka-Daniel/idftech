import styles from '@/styles/Test.module.css'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link'

export default function Hero() {

    return(<><div className={styles.hero}>
        <div className={styles.txt}>
             <Image
            className={styles.text}
            src="/Header.svg"
            alt="Header text"
            width={621}
            height={107}
            priority
          />
          <div className={styles.sentence}><b><span> 3 </span>שנים לוחמים ולוחמות בצה"ל</b></div>
          <div className={styles.rtlcontainer}>
            <div>אתם חזקים יותר, בוגרים יותר, ואין יעד שלא תכבשו</div>
            <div>אתם מנסים להבין איך כל זה יתרום לכם? ומה צריך להיות הצעד הראשון באזרחות?</div>
            <div>זה בדיוק הזמן שבו אנחנו רוצים להעניק לכם בחזרה</div>



          </div>
          <Link href="/introduction">
          <div className={styles.button}>לחצו כאן !</div>
          </Link>
          
          </div>
        <div className={styles.cardwrapper}>
        <div className={styles.card}>
            <div className={styles.line}><span className={styles.number}>1</span><span className={styles.pink}>import </span> <span className={styles.blue}>Critical Thinking</span> <span className={styles.pink}>from</span> <span className={styles.orange}>'IDF'</span> </div>
            <div className={styles.line}><span className={styles.number}>2</span><span className={styles.pink}>import </span> <span className={styles.blue}>Grit</span> <span className={styles.pink}>from</span> <span className={styles.orange}>'IDF'</span> </div>
            <div className={styles.line}><span className={styles.number}>3</span><span className={styles.pink}>import </span> <span className={styles.blue}>Discipline</span> <span className={styles.pink}>from</span> <span className={styles.orange}>'IDF'</span> </div>
            <div className={styles.line}><span className={styles.number}>4</span><span className={styles.blue2}>const</span><span className={styles.yellow1}> Me</span> =<span className={styles.yellow2}> ()</span> <span className={styles.blue2}> ={'>'} </span><span className={styles.yellow2}>{'('} </span></div>
            <div className={styles.line}><span className={styles.number}>5</span>{'<>'}</div>
            <div className={styles.line}><span className={styles.number}>6</span><span className={styles.green}>{'<Head>'}</span><div className={styles.wrapperanim}><Typewriter  options={{ strings: ['מספרי ברזל להתפקד', 'Hello World!'], autoStart: true, loop: true, skipAddStyles: true}}/></div><span className={styles.green}>{'</Head>'}</span></div>
            <div className={styles.line}><span className={styles.number}>7</span>{'</>'}</div>
            <div className={styles.line}><span className={styles.number}>8</span><span className={styles.yellow2}>{')'}</span>;</div>
            <div className={styles.line}><span className={styles.number}>9</span><span className={styles.pink}>export default</span><span className={styles.yellow1}> Me</span></div>





        </div>
        </div>
        
    </div>
    <div className={styles.workingwith}>
        <Image
            className={styles.img1}
            src="/IMAGE1.svg"
            alt="Next.js Logo"
            width={229}
            height={59}
            
          />
          <Image
            className={styles.img}
            src="/IMAGE2.svg"
            alt="Next.js Logo"
            width={118}
            height={61}
            
          />
          <Image
            className={styles.img}
            src="/IMAGE3.svg"
            alt="Next.js Logo"
            width={79}
            height={74}
            
          />
           <Image
            className={styles.img}
            src="/IMAGE4.svg"
            alt="Next.js Logo"
            width={181}
            height={91}
            
          />
          </div>
    
    </>)
    
};
