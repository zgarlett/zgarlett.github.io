import React from 'react'
const data = {"education": [
    {
      "school": "Oklahoma State University",
      "degree": "Bachelors in Computer Science",
      "graduated": "December 2020",
      "description": "I transferred to OSU to start my degree in Computer Science. "
    },
    {
      "school": "University of Oklahoma",
      "degree": "Bachelors in Geology",
      "graduated": "December 2015",
      "description": "I attended GPRC for my first 2 years of post-secondary on a scholarship for the college soccer team. While here, I studied Computer Systems Technology, a 2 year lead-in to a Bachelors of Computer Science. This was a very hands-on experience focused more on building projects than general theory. Here I built database structures for fictional companies, created small video games, hand-coded Space Invaders from scratch in Assembly Language, built and coded an Arduino Robot to navigate obstacle courses, a lot of Java and C++ programming for data structures, and much more."
    }
  ]};
export function Resume() {
    let education = data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
    return (
        <section id="resume">
            <div className="row">
                <div className="three columns">
            <h1><span>Education</span></h1>
            </div>
               <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
               </div>
      
        </section>
    )
}

