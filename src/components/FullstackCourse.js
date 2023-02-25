import styles from '@/styles/Intro.module.css';

export default function SoftDevCourse() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="https://techidf.co.il/wp-content/uploads/2022/10/CYBERPRO-Israel-logo.webp"
          alt="Experies Academy"
          loading="lazy"
        />
                  <h1 className={styles.h1}>קורס Full Stack</h1>


      </div>
      <div className={styles.text}>
        <p>
        התפתחות הטכנולוגיה הפך את תחום ה- web לתחום נחשק ובצורך בלתי פוסק של מעסיקים, במתכנתים, שיתנו מענה לצורך שגובר בתעשייה. למפתח Full Stack יש ידע מקיף, המאפשר לו לפתח תוכנות מקצה לקצה ובעל ידע רחב בשפות תכנות מגוונות, אשר קיימת היום בשוק הישראלי והבינלאומי. <br/>

סייברפרו הינה חברת הכשרות גלובלית העומדת בחזית הפיתוח של תוכניות לימוד טכנולוגיה ומוצרי הכשרה מתקדמים, אשר פותחו על-ידי מומחי תוכן מהטובים בעולם ומתעדכנים כל העת, בהתאם לצרכי התעשייה המתחדשים. תפיסת ההכשרה ממוקדת בחניך, בדגש על למידה מעשית ומציידות אותו בידע ובמגוון כלים רלוונטיים לתעשייה.
          <br/>
          <strong>איפה לומדים?</strong> מכללת סייברפרו ישראל בר"ג.<br />
          <strong>כמה זמן?</strong> 5 חודשים<br />
          <strong>עלות הקורס ללוחם/ת אחרי מימון לוחמים להייטק:</strong> ₪5,000<br />
          <span><strong>סילבוס הקורס:</strong> <a href="https://drive.google.com/file/d/1EDzvLxKwSw8tz8cixQsOeILEP46ndJjs/view?usp=share_link" target="_blank" rel="noopener">לחצו כאן</a></span>
        </p>
      </div>
    </div>
  );
}

