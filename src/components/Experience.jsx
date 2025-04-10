function Experience({ experience, onChange, addChange, deleteChange }) {
  return (
    <div className="experience">
      <h1>Experience</h1>
      {experience.map((item) =>
        <div key={item.id}>
          <div className="form">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={item.company}
              onChange={(e) => onChange(item.id, e)}
            />
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={item.title}
              onChange={(e) => onChange(item.id, e)}
            />
            <input
              type="text"
              name="description"
              placeholder="Job Description"
              value={item.description}
              onChange={(e) => onChange(item.id, e)}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={item.location}
              onChange={(e) => onChange(item.id, e)}
            />
            <input
              type="text"
              name="date"
              placeholder="Date"
              value={item.date}
              onChange={(e) => onChange(item.id, e)}
            />
            <div className="button delete" onClick={() => deleteChange(item.id)}>Delete</div>
          </div>
        </div>
      )}
      <div className="button add" onClick={addChange}>+</div>
    </div>
  );
}

export default Experience;