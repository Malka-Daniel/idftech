import styles from '@/styles/Intro.module.css';

export default function QaCourse() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="https://techidf.co.il/wp-content/uploads/2022/10/Academy-trans.webp"
          alt="Experies Academy"
          loading="lazy"
        />
                  <h1 className={styles.h1}>קורס QA & Automation</h1>


      </div>
      <div className={styles.text}>
        <p>
        מסלול Bootcamp ייחודי לתחומי ה- QA, בדיקות התכונה והאוטומציה, המכין את הבוגרים לתת מענה לצרכי השוק העדכניים בתחומי בדיקות התוכנה (הידניות ואוטומטיות) בדיקות Web ובדיקות מובייל. כולל המסכה בינלאומית בבדיקות תוכנה-ISTQB, התקפה ביותר מ- 40 מדינות ברחבי העולם. עשרות בוגרי ובוגרות המסלול כבר השתלבו במקומות עבודה בחברות מובילות בתעשייה! במהלך הקורס יינתן ליווי של מנטורים מיחידת 8200
          <br/>
          <strong>איפה לומדים?</strong> מכללת Academy Experis היברדי<br />
          <strong>כמה זמן?</strong> 3 חודשים<br />
          <strong>עלות הקורס ללוחם/ת אחרי מימון לוחמים להייטק:</strong> 3,000 ₪ (ניתן לשלם מהפיקדון).<br />
          <span><strong>סילבוס הקורס:</strong> <a href="https://drive.google.com/file/d/1gANgP_IXb3cDigGgaOjk0BCcq-cLUSDd/view?usp=share_link" target="_blank" rel="noopener">לחצו כאן</a></span>
        </p>
      </div>
    </div>
  );
}

