import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Hippo Homes",
      subtitle: "A Dalmia Bharat Enterprise",
      location: "Gurugram",
      role: "Full Stack Developer",
      period: "Jun 2025 – Present",
      current: true,
      achievements: [
        "Implemented the loyalty points system in the e-Commerce flow to enhance customer retention and repeat purchases.",
        "Contributed to POS cart modules focusing on margin optimization, enabling pricing recommendations for better revenue.",
        "Built custom reusable UI components in React to improve maintainability and development speed across modules.",
        "Designed and developed customer-facing landing pages for full home renovation and modular kitchen solutions, improving lead engagement, and worked on front- and back-end to handle SQL, MQL, SQL data conversion for CRM analytics and reporting."
      ]
    },
    {
      company: "Innodatatics",
      location: "Hyderabad",
      role: "Data Scientist Intern",
      period: "Mar 2025 – Jun 2025",
      current: false,
      achievements: [
        "Developed a predictive analytics dashboard for Telangana RTC (TGRTC) to improve bus route efficiency and passenger experience.",
        "Built data ingestion and forecasting pipelines for real-time route insights using ML models.",
        "Designed interactive data visualizations enabling operational teams to take data-driven decisions."
      ]
      },
    
  ];

  return (
    <section id="work-experience">
      <div className="work-experience__container">
        {/* Header */}
        <div className="work-experience__header">
          <h5>Where I Have Worked</h5>
          <h2>Experience</h2>
        </div>

        {/* Experience Cards Grid */}
        <div className="work-experience__grid">
          {experiences.map((exp, index) => (
            <div key={index} className="work-experience__card">
              {/* Current Badge */}
              {exp.current && (
                <div className="work-experience__badge">Current</div>
              )}

              {/* Company Info */}
              <div className="work-experience__company">
                <h3>{exp.company}</h3>
                {exp.subtitle && (
                  <p className="work-experience__subtitle">{exp.subtitle}</p>
                )}
                <p className="work-experience__location"> {exp.location}</p>
                
                {/* Role & Period */}
                <div className="work-experience__role-box">
                  <p className="work-experience__role">{exp.role}</p>
                  <p className="work-experience__period">{exp.period}</p>
                </div>
              </div>

              {/* Achievements */}
              <div className="work-experience__achievements">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="work-experience__achievement-item">
                    <div className="work-experience__bullet"></div>
                    <p>{achievement}</p>
                  </div>
                ))}
              </div>

              {/* Decorative Corner */}
              <div className="work-experience__corner-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;