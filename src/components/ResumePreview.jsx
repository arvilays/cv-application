function ResumePreview({ personal, education }) {
  return (
    <>
      <h1>Resume Preview</h1>

      <h1>Personal Info</h1>
      <h2>{personal.name}</h2>
      <h2>{personal.email}</h2>
      <h2>{personal.phone}</h2>
      <h2>{personal.address}</h2>

      <h1>Education</h1>
      {education.map(item =>
        <>
          <h2>{item.id}</h2>
          <h2>{item.school}</h2>
          <h2>{item.degree}</h2>
          <h2>{item.startDate}</h2>
          <h2>{item.endDate}</h2>
        </>
      )}
    </>
  );
}

export default ResumePreview;