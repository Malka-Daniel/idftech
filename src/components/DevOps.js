import styles from '@/styles/Intro.module.css';

export default function SoftDevCourse() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="https://techidf.co.il/wp-content/uploads/2022/10/%D7%9C%D7%95%D7%92%D7%95-%D7%90%D7%95%D7%A8%D7%98-%D7%A1%D7%99%D7%A0%D7%92%D7%90%D7%9C%D7%95%D7%91%D7%A1%D7%A7%D7%99.webp"
          alt="Experies Academy"
          loading="lazy"
        />
                  <h1 className={styles.h1}>קורס Full Stack</h1>


      </div>
      <div className={styles.text}>
        <p>
        ספיד טק, מסלול הכשרה המתמקד במיומנויות המבוקשות ביותר בתחום פיתוח התוכנה במסלול DevOps. הסטודנטים עוברים הכשרה מעשית "hands-on" כבר בתוך התוכנית ויוצאים עם יכולות וכישורים רלוונטים לשוק העבודה.

          <br/>
          <strong>איפה לומדים?</strong>הלימודים מתקיימים במכללת אורט סינגלובסקי (תל אביב, בצמוד לתחנת רכבת ההגנה) קורס היברידי, לימודים מרחוק משולבים בשיעורים פרונטליים<br />
          <strong>כמה זמן?</strong> 10 חודשים<br />
          <strong>עלות הקורס ללוחם/ת אחרי מימון לוחמים להייטק:</strong> ₪1,000<br />
          <span><strong>סילבוס הקורס:</strong> <a href="https://drive.google.com/file/d/1vAoQuD3WVaYCP9H5iALhOS3CDm8G4WrM/view?usp=share_link" target="_blank" rel="noopener">לחצו כאן</a></span>
        </p>
      </div>
    </div>
  );
}

