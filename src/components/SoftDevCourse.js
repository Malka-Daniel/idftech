import styles from '@/styles/Intro.module.css';

export default function SoftDevCourse() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="https://techidf.co.il/wp-content/uploads/2022/10/logo-1.webp"
          alt="Experies Academy"
          loading="lazy"
        />
                  <h1 className={styles.h1}>קורס Software Development</h1>


      </div>
      <div className={styles.text}>
        <p>
        מסלול ההכשרה לפיתוח תוכנה בו תקבלו הכשרה מעשית אינטנסיבית ומעמיקה, הכוללת למידה של ארכיטקטורת התוכנה.
          <br/>
          <strong>איפה לומדים?</strong> במעבדות של Infinity Labs R&D (ז'בוטינסקי 1 רמת גן).<br />
          <strong>כמה זמן?</strong> 7 חודשים<br />
          <strong>עלות הקורס ללוחם/ת אחרי מימון לוחמים להייטק:</strong> ללא עלות עם התחייבות לשנתיים עבודה מתום ההכשרה.<br />
          <span><strong>סילבוס הקורס:</strong> <a href="https://drive.google.com/file/d/1kNWMDYe2r_gRkbWFf0R-_z_fv0AQbmcB/view?usp=share_link" target="_blank" rel="noopener">לחצו כאן</a></span>
        </p>
      </div>
    </div>
  );
}

