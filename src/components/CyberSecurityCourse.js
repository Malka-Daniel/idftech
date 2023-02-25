import styles from '@/styles/Intro.module.css';

export default function CyberSecurityCourse() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="https://techidf.co.il/wp-content/uploads/2022/10/Kernelios-Final-Logo-Black.webp"
          alt="Kernelios Logo"
          loading="lazy"
        />
                  <h1 className={styles.h1}>קורס מיישם הגנת סייבר</h1>


      </div>
      <div className={styles.text}>
        <p>
          קורס הגנת סייבר למתחילים, המיועד לאלה המבקשים להיכנס לעולם הסייבר ואבטחת המידע<br />
          <strong>איפה לומדים?</strong> מכללת Kernelios בראשל&quot;צ.<br />
          <strong>כמה זמן?</strong> 3 חודשי הכשרה<br />
          <strong>מה זה ייתן לי?</strong> תעודה יוקרתית, הסמכות LINUX+ CHCSS, תעודה ממשלתית, ניסיון מקצועי אמיתי ועבודה בסיום המסלול.<br />
          <strong>עלות הקורס ללוחם/ת אחרי מימון לוחמים להייטק:</strong> 3,000 ₪ (ניתן לשלם מהפיקדון).<br />
          <span><strong>סילבוס הקורס:</strong> <a href="https://drive.google.com/file/d/1FAgEZw0VV5ZovTeD05mJgdWtuKBai8c5/view?usp=share_link" target="_blank" rel="noopener">לחצו כאן</a></span>
        </p>
      </div>
    </div>
  );
}
