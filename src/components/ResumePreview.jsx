function ResumePreview({ personal, education, experience }) {
  return (
    <>
      <div className="personal-preview">
        <h1>{personal.name}</h1>
        <div className="personal-details">
          <h2>{personal.email}</h2>
          <h2>{personal.phone}</h2>
          <h2>{personal.location}</h2>
        </div>
      </div>

      <div className="education-preview">
        <h1>Education</h1>
        {education.map(item =>
          <div className="resume-item">
            <div>
              <h2>{item.date}</h2>
              <h2>{item.location}</h2>
            </div>
            <div>
              <h2>{item.school}</h2>
              <h2>{item.degree}</h2>
            </div>
          </div>
        )}
      </div>
      
      <div className="experience-preview">
        <h1>Experience</h1>
        {experience.map(item =>
          <div className="resume-item">
            <div>
              <h2>{item.date}</h2>
              <h2>{item.location}</h2>
            </div>
            <div>
              <h2>{item.company}</h2>
              <h2>{item.title}</h2>
              <h2>{item.description}</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ResumePreview;