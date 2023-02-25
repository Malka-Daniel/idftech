import styles from '@/styles/Test.module.css'
import Image from 'next/image'
import Link from 'next/link';

export default function Nav() {
    return(<div className={styles.nav}>
         <Link href="/home">
<Image
            className={styles.logo}
            src="/IMAGE.svg"
            alt="Next.js Logo"
            width={181}
            height={91}
            priority
          /></Link>
        <div className={styles.button}>פרטים למעסיקים</div>
        

    
    
    
    </div>)
    
};
