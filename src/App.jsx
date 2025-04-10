import { useState } from "react";
import Personal from './components/Personal.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import ResumePreview from './components/ResumePreview.jsx';

function App() {
  const [personal, setPersonal] = useState({
    name: "Josephine Meyers",
    email: "josephine.meyers@mail.co.uk",
    phone: "+44 3245-5521-5521",
    location: "London, UK",
  });

  const [education, setEducation] = useState([
    {
      id: 1,
      school: "London City University",
      degree: "Bachelors in Economics",
      location: "New York City, US",
      date: "08/2020 – present",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: 1,
      company: "Umbrella Inc.",
      title: "UX & UI Designer",
      description: "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
      location: "New York City, US",
      date: "08/2020 – present",
    },
    {
      id: 2,
      company: "Black Mesa Labs",
      title: "UX Research Assistant",
      description: "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
      location: "Berlin, Germany",
      date: "04/2018 – 02/2019",
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