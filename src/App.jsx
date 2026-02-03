import { useState } from "react";
import Personal from './components/Personal.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import ResumePreview from './components/ResumePreview.jsx';

function App() {
  const [personal, setPersonal] = useState({
    name: "Peter Parker",
    email: "peter.parker@email.test",
    phone: "(555) 013-1962",
    location: "Queens, New York",
  });

  const [education, setEducation] = useState([
    {
      id: 1,
      school: "Empire State University",
      degree: "Bachelor of Science in Biochemistry",
      location: "New York City, US",
      date: "2019-2023",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: 1,
      company: "The Daily Bugle",
      title: "Freelance Photographer",
      description: "Captured high-quality action and urban photography for print and digital publication.",
      location: "New York, NY",
      date: "2020 - Present",
    },
    {
      id: 2,
      company: "Empire State University - Department of Science",
      title: "Laboratory Assistant (Part-Time)",
      description: "Assisted with undergraduate and faculty research projects.",
      location: "New York, NY",
      date: "2021-2023",
    },
    {
      id: 3,
      company: "Local Electronics Store",
      title: "Retail Associate (Part-Time)",
      description: "Provided technical assistance to customers on consumer electronics.",
      location: "New York, NY",
      date: "2019-2021",
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