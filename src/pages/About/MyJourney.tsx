const MyJourney = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Started My Coding Journey',
      description:
        'Learned HTML, CSS, and JavaScript. Built my first static website.',
      icon: '👨‍💻',
    },
    {
      year: '2020',
      title: 'First Internship',
      description:
        'Worked as a frontend intern, building responsive web pages.',
      icon: '💼',
    },
    {
      year: '2021',
      title: 'Graduated with a CS Degree',
      description:
        "Completed my Bachelor's in Computer Science with a 3.7 GPA.",
      icon: '🎓',
    },
    {
      year: '2022',
      title: 'Joined Acorns as a Software Engineer',
      description: 'Contributed to major projects using React and TypeScript.',
      icon: '🚀',
    },
    {
      year: '2023',
      title: 'Refined My Skills',
      description:
        'Dived deeper into performance optimization and accessibility.',
      icon: '🛠️',
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

      {/* Reflection Section */}
      <section className="reflection">
        <h2>Looking Ahead</h2>
        <p>
          The journey so far has been incredible, filled with learning and
          growth. I’m excited about the future, where I aim to tackle even more
          challenging projects, expand my skill set, and make meaningful
          contributions to the tech world.
        </p>
      </section>
    </div>
  );
};

export default MyJourney;
