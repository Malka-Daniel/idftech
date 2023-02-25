import styles from '@/styles/Intro.module.css'
import CyberSecurityCourse from '../components/CyberSecurityCourse'
import SoftwareDevelopmentCourse from '../components/SoftwareDevelopmentCourse'
import QaCourse from '../components/qaCourse'
import SoftwareDevCourse from '../components/SoftDevCourse'
import FullstackCourse from '../components/FullstackCourse'
import CloudArchitect from '../components/CloudArchitect'
import DevOps from '../components/DevOps'

export default function FourPoints() {
    return(<>
    <div className={styles.coursewrapper}>
        <QaCourse/>
        <div className={styles.wrapper}><a href="https://zohrim.microsoftcrmportals.com/HighTechCandidateInformationCenter/HighTechWarriorRegistrationForm/" target="_blank" rel="noopener"><div className={styles.button1}>הרשמה</div></a></div>

        <SoftwareDevelopmentCourse/>
        <div className={styles.wrapper}><a href="https://zohrim.microsoftcrmportals.com/HighTechCandidateInformationCenter/HighTechWarriorRegistrationForm/" target="_blank" rel="noopener"><div className={styles.button1}>הרשמה</div></a></div>

        <CyberSecurityCourse/>
        <div className={styles.wrapper}><a href="https://zohrim.microsoftcrmportals.com/HighTechCandidateInformationCenter/HighTechWarriorRegistrationForm/" target="_blank" rel="noopener"><div className={styles.button1}>הרשמה</div></a></div>

        <FullstackCourse/>
        <div className={styles.wrapper}><a href="https://zohrim.microsoftcrmportals.com/HighTechCandidateInformationCenter/HighTechWarriorRegistrationForm/" target="_blank" rel="noopener"><div className={styles.button1}>הרשמה</div></a></div>

        <CloudArchitect/>
        <div className={styles.wrapper}><a href="https://zohrim.microsoftcrmportals.com/HighTechCandidateInformationCenter/HighTechWarriorRegistrationForm/" target="_blank" rel="noopener"><div className={styles.button1}>הרשמה</div></a></div>

        <DevOps/>
        <div className={styles.wrapper}><a href="https://zohrim.microsoftcrmportals.com/HighTechCandidateInformationCenter/HighTechWarriorRegistrationForm/" target="_blank" rel="noopener"><div className={styles.button1}>הרשמה</div></a></div>

    </div>

    
    </>)
    
};