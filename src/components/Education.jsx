function Education({ education, onChange, addChange, deleteChange }) {
  return (
    <div className="education">
      <h1>Education</h1>
        {education.map((item) =>
          <div key={item.id}>
            <div className="form">
              <input
                type="text"
                name="school"
                placeholder="School"
                value={item.school}
                onChange={(e) => onChange(item.id, e)}
              />
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={item.degree}
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

export default Education;