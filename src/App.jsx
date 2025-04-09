import { useState } from "react";
import Personal from './components/Personal.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import ResumePreview from './components/ResumePreview.jsx';

function App() {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [education, setEducation] = useState([
    {
      id: Date.now(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  ]);

  function handlePersonalChange(e) {
    const { name, value } = e.target;
    setPersonal((prevPersonal) => ({ ...prevPersonal, [name]: value }));
  }

  function handleEducationChange(id, e) {
    const { name, value } = e.target;

    setEducation(prevEducation => 
      prevEducation.map(item =>
        item.id === id ? { ...item, [name]: value } : item
      )
    )
  }

  function handleAddEducation () {
    setEducation([
      ...education,
      {
        id: Date.now(),
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      }
    ]);
  }

  function handleDeleteEducation(id) {
    setEducation(prevEducation => 
      prevEducation.filter(item => item.id !== id)
    );
  }

  return (
    <div className='container'>
      <div className='sidebar'>
        <Personal 
          personal={personal}
          onChange={handlePersonalChange}
        />
        <Education 
          education={education}
          onChange={handleEducationChange}
          addChange={handleAddEducation}
          deleteChange={handleDeleteEducation}
        />
      </div>
      
      <div className="resume">
        <ResumePreview 
          personal={personal}
          education={education}
        />
      </div>
    </div>
  );
}

export default App;

// const [education, setEducation] = useState([
//   {
//     school: "",
//     degree: "",
//     startDate: "",
//     endDate: "",
//   },
// ]);

// const [experience, setExperience] = useState([
//   {
//     company: "",
//     title: "",
//     description: "",
//     startDate: "",
//     endDate: "",
//   },
// ]);

/* <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="name"
          name="name"
          value={personal.name}
          onChange={handlePersonalChange}
        />
        <input
          placeholder="email"
          name="email"
          value={personal.email}
          onChange={handlePersonalChange}
        />
        <input
          placeholder="phone"
          name="phone"
          value={personal.phone}
          onChange={handlePersonalChange}
        />
      </form>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="school"
          name="school"
          value={education.school}
          onChange={handleEducationChange}
        />
        <input
          placeholder="degree"
          name="degree"
          value={education.degree}
          onChange={handleEducationChange}
        />
        <input
          placeholder="year"
          name="year"
          value={education.year}
          onChange={handleEducationChange}
        />
      </form>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="company"
          name="company"
          value={experience.company}
          onChange={handleExperienceChange}
        />
        <input
          placeholder="title"
          name="title"
          value={experience.title}
          onChange={handleExperienceChange}
        />
        <input
          placeholder="startDate"
          name="startDate"
          value={experience.startDate}
          onChange={handleExperienceChange}
        />
        <input
          placeholder="endDate"
          name="endDate"
          value={experience.endDate}
          onChange={handleExperienceChange}
        />
        <input
          placeholder="description"
          name="description"
          value={experience.description}
          onChange={handleExperienceChange}
        />
      </form>

      <h1>
        Name: {personal.name} Email: {personal.email} Phone:{" "}
        {personal.phone}
      </h1>

      <h1>
        School: {education.school} Degree: {education.degree} Year:{" "}
        {education.year}
      </h1>

      <h1>
        Company: {experience.company} Title: {experience.title} Start Date:{" "}
        {experience.startDate} End Date: {experience.endDate} Description:{" "}
        {experience.description}
      </h1> */