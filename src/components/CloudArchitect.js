import styles from '@/styles/Intro.module.css';

export default function CloudArchitect() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="https://techidf.co.il/wp-content/uploads/2022/10/Kernelios-Final-Logo-Black.webp"
          alt="Kernelios Logo"
          loading="lazy"
        />
                  <h1 className={styles.h1}>קורס ארכיטקט ענן היברידי</h1>


      </div>
      <div className={styles.text}>
        <p>
        קורס פרקטי ברמת בסיס המיועד למי שמבקש להכנס לעולם סיסטם ותמיכה במשתמשים או למי שמעוניין לבצע שינוי קריירה לשם כך. הסטודנטים בקורס ייחשפו למגוון רחב של נושאים טכניים, שיטות עבודה, התקנה ותמיכה בשרתים ועבודה ברשת ארגונית. <br/>

הסטודנטים יתרגלו החומר במעבדות ייחודיות עם כלים המדמים את מה שמתרחש בעולם האמיתי, כלים הדרושים לעבודה השוטפת של איש סיסטם. הקורס מאפשר לגשת לבחינת הסמכה בינלאומית של מייקרוסופט בניהול תשתיות ענן בסביבת Azure (AZ-104) קורס הכשרה ייחודי זה פותח על ידי מומחים המובילים בישראל והוא מורכב ממגוון נושאים הנדרשים בתעשייה, עם דגש רב על הקניית ידע מעשי. <br/> 
        <strong>איפה לומדים?</strong> מכללת Kernelios בראשל&quot;צ.<br />
          <strong>עלות הקורס ללוחם/ת אחרי מימון לוחמים להייטק:</strong> 3,000 ₪ (ניתן לשלם מהפיקדון).<br />
          <span><strong>סילבוס הקורס:</strong> <a href="https://drive.google.com/file/d/14eGlB_xwPF5H0koGHa5oql-aM6pxP5bS/view?usp=share_link" target="_blank" rel="noopener">לחצו כאן</a></span>
        </p>
      </div>
    </div>
  );
}
