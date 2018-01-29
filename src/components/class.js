import React from 'react'
import classPic from '../images/class.jpg'
import '../styles/class.css'

const Class = () => (
  <div className="teachingContainer">
    <h1>Teaching Projects</h1>
    <div className="teachingProjects">
      <p className="classParagraph">
        As a teacher at a high school for special needs, I led a cooking course for autistic and learning-challenged students in which they ran a functioning, profitable school restaurant. As the instructor, manager, and head chef of the restaurant, I provided more than 10 students the opportunity to develop vocational, occupational, and teamwork skills that would help them for a lifetime. On the other hand, I will never forget the life-lessons these students taught me in humility, patience, and perseverance.
      </p>
      <img id="classPic" src={classPic} alt="My Class at IELC"/>
      <p className="classParagraph">I lived in Central Java, Indonesia for 6 years, where I studied Javanese music and culture and taught English as a second language. I taught hundreds of poor and underprivileged children in Indonesia. I have passed the first Certified Financial Analyst exam and done post-graduate work in international development and sustainability. I speak Javanese and Bahasa Indonesia and lead the New York-based Javanese Gamelan music ensemble Kusuma Laras in my free time.
      </p>
    </div>
  </div>
)

export default Class
