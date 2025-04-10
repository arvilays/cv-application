import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import locationIcon from "../assets/map-marker.svg";

function ResumePreview({ personal, education, experience }) {
  return (
    <>
      <div className="personal-preview">
        <div className="name-title">{personal.name}</div>
        <div className="personal-details">
          <div>
            <img class="icon" src={emailIcon} alt="email" />
            <div>{personal.email}</div>
          </div>
          <div>
            <img class="icon" src={phoneIcon} alt="phone" />
            <div>{personal.phone}</div>
          </div>
          <div>
            <img class="icon" src={locationIcon} alt="location" />
            <div>{personal.location}</div>
          </div>
        </div>
      </div>

      <div className="education-preview category-preview">
        <div className="category-title">Education</div>
        {education.map(item =>
          <div className="resume-item">
            <div>
              <div>{item.date}</div>
              <div>{item.location}</div>
            </div>
            <div>
              <div className="item-bold">{item.school}</div>
              <div>{item.degree}</div>
            </div>
          </div>
        )}
      </div>
      
      <div className="experience-preview category-preview">
        <div className="category-title">Experience</div>
        {experience.map(item =>
          <div className="resume-item">
            <div>
              <div>{item.date}</div>
              <div>{item.location}</div>
            </div>
            <div>
              <div className="item-bold">{item.company}</div>
              <div>{item.title}</div>
              <div>{item.description}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ResumePreview;