import Layout from '../components/Layout2'
import Video from '../components/Video.js'
import styles from '@/styles/Intro.module.css'
import Link from 'next/link'


export default function introduction() {
    return(   <Layout>
                <div className={styles.introduce}>צה"ל מזמין אותך לתוכנית לוחמים להייטק מבית עמותת עתידים, האגף והקרן לחיילים משוחררים, מינהלת שער לחיים וארגון Start-Up Nation Central, אשר תהפוך את הכשירות הקרבית שלך לכשירות טכנולוגית.</div>
        <Video/>
        <h1 className={styles.h1}>נו השתחררתם כבר?</h1>
        <div className={styles.containerbtn}>
        <Link href="/notinthearmy"><div className={styles.button1}>משוחררים וחופשיים ✌🏻</div></Link>
        <Link href="/inthearmy"><div className={styles.button2}>לא, אנחנו עדיין חיילים 🫡</div></Link>
        </div>

        
          </Layout>)
    
};
