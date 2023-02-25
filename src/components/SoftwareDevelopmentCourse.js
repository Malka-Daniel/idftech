import styles from '@/styles/Intro.module.css';

export default function SoftwareDevelopmentCourse() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="https://techidf.co.il/wp-content/uploads/2022/10/logo_sela_clean_shad20CM.webp"
          alt="Sela College"
          loading="lazy"
        />
                  <h1 className={styles.h1}>קורס מומחה פיתוח תוכנה</h1>


      </div>
      <div className={styles.text}>
        <p>
        מומחה לפיתוח תוכנה הוא מקצוע דינמי ומאתגר בשכר מעולה. העבודה היא יצירתית, בחזית הטכנולוגית במגוון חברות. <br />הקורסים במכללת סלע מאפשרים לרכוש מקצוע טכנולוגי מעניין, דינמי וחדשני ברמה הגבוה ביותר, בסלע הלימודים מותאמים לחידושים הטכנולוגיים ומושם דגש על מקצועיות בהתאם לדרישות שוק העבודה.<br />
          <strong>איפה לומדים?</strong> מכללת סלע - היברידי<br />
          <strong>כמה זמן?</strong> 10 חודשים - 2 חודשי מכינה + 8 חודשי הכשרה<br />
          <strong>עלות הקורס ללוחם/ת אחרי מימון לוחמים להייטק:</strong> 2,000 ₪ (ניתן לשלם מהפיקדון).<br />
          <span><strong>סילבוס הקורס:</strong> <a href="https://drive.google.com/file/d/1BoftGmmpUTWN7L67ELZi8O4dux_q5yuZ/view?usp=share_link" target="_blank" rel="noopener">לחצו כאן</a></span>
        </p>
      </div>
    </div>
  );
}

