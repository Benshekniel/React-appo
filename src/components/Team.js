import React from "react";
import "./Team.css"; // Import the CSS for styling
import picOne from "./Images/team1.jpeg";
import picTwo from "./Images/Pic03.jpeg";
import picThree from "./Images/Pic02.jpg";
import picFour from "./Images/team4.jpeg";

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    image: picOne, // Replace with actual image path
  },
  {
    name: "Jane Smith",
    position: "CTO",
    image: picTwo, // Replace with actual image path
  },
  {
    name: "Sam Wilson",
    position: "CFO",
    image: picThree, // Replace with actual image path
  },
  {
    name: "Emily Davis",
    position: "COO",
    image: picFour, // Replace with actual image path
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member p-0" key={index}>
            <div>
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-member-info">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
