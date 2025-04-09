function Education({ education, onChange, addChange, deleteChange }) {
  return (
    <>
      <h1>Education</h1>
      <div className="form">
        {education.map((item) =>
          <div key={item.id}>
            <h2>{item.id}</h2>
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
              name="startDate"
              placeholder="Start Date"
              value={item.startDate}
              onChange={(e) => onChange(item.id, e)}
            />
            <input
              type="text"
              name="endDate"
              placeholder="End Date"
              value={item.endDate}
              onChange={(e) => onChange(item.id, e)}
            />
            <div className="delete" onClick={() => deleteChange(item.id)}>Delete</div>
          </div>
        )}
      </div>
      <div className="add" onClick={addChange}>+</div>
    </>
  );
}

export default Education;