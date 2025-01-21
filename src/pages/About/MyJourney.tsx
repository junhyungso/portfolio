import './MyJourney.css';

const MyJourney = () => {
  const milestones = [
    {
      year: 'December 2021 - October 2023',
      title: 'Acorns - Software Engineer',
      description: 'Built Custom Portfolios.',
      icon: '👨‍💻',
    },
    {
      year: 'December 2021 - November 2021',
      title: 'MEK Review - Data Management Specialist',
      description: 'Built Custom Portfolios.',
      icon: '🛠️',
    },
    {
      year: 'June 2020 - June 2021',
      title: 'WW International - Software Engineering Intern',
      description: 'Built Custom Portfolios.',
      icon: '🚀',
    },
  ];

  return (
    <div className="journey-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>My Journey So Far</h1>
        <p>
          From my first line of code to becoming a skilled frontend engineer,
          here's how I got here.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">{milestone.icon}</div>
            <div className="timeline-content">
              <h2>{milestone.year}</h2>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MyJourney;
