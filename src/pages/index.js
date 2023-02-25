import Image from 'next/image';
import styles from '@/styles/Intro.module.css'
import Link from 'next/link'
export default function Home() {
  return(<>
          <Image src={'/green.svg'} className={styles.bgGreen} width={229}
            height={59} />
            <Image src={'/brown.svg'} className={styles.bgBrown} width={229}
            height={59} />
  
            <div className={styles.indexcont}>
              <h1 className={styles.h1}>תודה רבה</h1>
              <div className={styles.subindex}>לוחמות ולוחמים, נתתם מעצמכם מספיק עכשיו תורנו לתת לכם</div>
              <Image src={'/captcha.svg'} className={styles.captcha} width={329}
            height={100} />
            <div className={styles.subindex}>העתיד שלכם ממתין לכם</div>
            <Link href="/home"><div className={styles.button1}>כניסה</div></Link>
            <Image src={'/IMAGE.svg'} className={styles.indexlogo} width={229}
            height={59} />
            

            </div>
            

  </>)
}
