import { useState } from "react";
import Personal from './components/Personal.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import ResumePreview from './components/ResumePreview.jsx';

function App() {
  const [personal, setPersonal] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123-456-7890",
    location: "Doe Lane",
  });

  const [education, setEducation] = useState([
    {
      id: Date.now(),
      school: "University of Doe",
      degree: "Computer Science",
      location: "New York City, US",
      date: "September 2021 - June 2025",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: Date.now(),
      company: "Google",
      title: "Software Engineer",
      description: "Stack Overflow expert.",
      location: "New York City, US",
      date: "June 2025 - Present",
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

  function handleExperienceChange(id, e) {
    const { name, value } = e.target;

    setExperience(prevExperience =>
      prevExperience.map(item =>
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

  function handleAddExperience() {
    setExperience([
      ...experience,
      {
        id: Date.now(),
        company: "",
        title: "",
        description: "",
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

  function handleDeleteExperience(id) {
    setExperience(prevExperience =>
      prevExperience.filter(item => item.id !== id)
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
        <Experience
          experience={experience}
          onChange={handleExperienceChange}
          addChange={handleAddExperience}
          deleteChange={handleDeleteExperience}
        />
      </div>
      
      <div className="resume">
        <ResumePreview 
          personal={personal}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
}

export default App;