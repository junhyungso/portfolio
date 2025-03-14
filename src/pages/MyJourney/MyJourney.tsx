import styles from './MyJourney.module.css';

type Milestone = {
  year: string;
  title: string;
  description: string;
  icon: string;
};

const MyJourney = () => {
  const milestones: Milestone[] = [
    {
      year: 'December 2021 - October 2023',
      title: 'Acorns - Software Engineer',
      description:
        'Worked as a Frontend Web Developer for the Investment Product Team and Bank Linking Team to build and release multiple user-facing projects, specifically the Custom Portfolio feature and Bank Linking Verification feature. Other responsibilities included: Improving UI/UX of existing features for Acorns Early - investment accounts for kids, Identifying and resolving critical customer-facing bugs impacting investment experience, Improving site performance and reliability through code refactoring and unit testing.',
      icon: '👨‍💻',
    },
    {
      year: 'December 2021 - November 2021',
      title: 'MEK Review - Data Management Specialist',
      description:
        'Executed administrative duties and added new functionalities and configured malfunctioning interfaces to the company’s proprietary software (LMS) to assist in an improved workflow among the administrators.',
      icon: '🛠️',
    },
    {
      year: 'June 2020 - June 2021',
      title: 'WW International - Software Engineering Intern',
      description:
        'Worked as a Frontend Web Developer for the Login & Signup Team. Implemented cleaner UI of password-related errors and sign-in attempt warnings for the login pages. Also increased code coverage rate from 54% to 70% for the login page components by creating unit tests to ensure stronger code quality and reliability.',
      icon: '🚀',
    },
  ];

  return (
    <div className={styles.journeyPage}>
      <h1>My Journey So Far</h1>

      {milestones.map((milestone, index) => (
        <div key={index} className={styles.timelineContainer}>
          <div
            className={
              index % 2 !== 0
                ? styles.timelineContent
                : styles.timelineContentOdd
            }
          >
            <h2>
              {milestone.year} {milestone.icon}
            </h2>
            <h3>{milestone.title}</h3>
            <p>{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyJourney;
