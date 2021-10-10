import React from 'react'
const data = {"work": [
    {
      "company": "Flint Hills Resources - Koch Industries",
      "title": "Software Engineer",
      "years": "December 2020 - Present",
      "description": "At Instant Domain Search we help you find the perfect domain name faster than anywhere else. I was brought on as an early hire here to help take an application that had seen enormous and steady organic growth and give it the boost it deserved. \n\nAs a member of a very small but talented team, I work across the gamut of our stack. This currently consists of a React/Typescript frontend (recently migrated to Next.js), a new combination of Golang and Rust Servers, and an iOS app (soon to be React Native)."
    },
    {
      "company": "Oklahoma State University - Bert Cooper Civil Engineering Lab",
      "title": "Mobile Application Developer",
      "years": "January 2020 - December 2020",
      "description": "For most of my time at Shop Your Own Mortgage, I have worked as a Full Stack Software Engineer. Here I have had the chance to dig in and get my hands dirty with all parts of our software. I have worked with our legacy PHP backend, as well as built new node-based servers for new products. As well, I led the development of V2 of our mobile application written in React Native. I have worked extensively with React/Redux as well as with react hooks. \n\nMore recently, I have been given the opportunity to lead our cybersecurity initiative. As part of our partnership with a number of 3rd parties and our planned expansion into Europe, the need to tighten security and bring our technology up to certain compliance standards has become evident. It is my job to bring us into alignment with these, as well as hardening our security stance as a whole."
    }
  ]};

export function Work() {

    const work = data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p className="newline">{work.description}</p>
        </div>
      })
    return (
        <section id="resume">
        <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>
    </section>
    )
}
