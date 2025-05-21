import { useContext } from "react";
import ResumeContext from "./ResumeContext";

function ResumePreview() {
  const { education, experience, user } = useContext(ResumeContext);

  return (
    <div>
      <h2>Resume Preview</h2>

      <h3>Personal Information</h3>
      <ul>
        <li>
          <strong>{user.FirstName} {user.LastName}</strong><br />
          📞 {user.PhoneNumber} <br />
          📧 {user.EmailID}
        </li>
      </ul>

      <h3>Education</h3>
      <ul>
        {education.map((edu, i) => (
          <li key={i}>
            {edu.degree} at {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>

      <h3>Experience</h3>
      <ul>
        {experience.map((exp, i) => (
          <li key={i}>
            {exp.role} at {exp.company} ({exp.duration})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResumePreview;
