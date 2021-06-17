// Sec3L3 dogPeople

// question, is the following array our API? 
// create variable containing JSON object literal 
const dogPeopleJSON = `[
    {
      "name": "Paolo Maldini",
      "jobTitle": "Front End Developer",
      "company": "Web Weavers",
      "experience": "3 years",
      "school": "University of Washington",
      "major": "Marketing",
      "email": "paolo@example.com",
      "linkedInUrl": "paolo.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Node", "Express"
      ]
    },
    {
      "name": "Barbara Bonansea",
      "jobTitle": "Software Engineer",
      "company": "Excellence in the Cloud",
      "experience": "12 years",
      "school": "University of Southern California",
      "major": "Computer Science",
      "email": "barbara@example.com",
      "linkedInUrl": "barbara.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "JavaScript", "C", "Go"
      ]
    },
    {
      "name": "Javier Hernandez",
      "jobTitle": "User Experience Engineer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "Seattle University",
      "major": "Performing Arts",
      "email": "javier@example.com",
      "linkedInUrl": "javier.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS"
      ]
    },
    {
      "name": "Maribel Dominguez",
      "jobTitle": "Front End Engineer",
      "company": "Bits and Bytes",
      "experience": "6 years",
      "school": "University of Washington",
      "major": "Mechanical Engineering",
      "email": "maribel@example.com",
      "linkedInUrl": "maribel.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
      ]
    }
   ]`

   // parce JSON object literal array into a js object array and log it to console
   const dogPeople = JSON.parse(dogPeopleJSON);
   // this is the first test, successful
  //  console.log(dogPeople);

// func w template literal of html w embedded variables loading values from js array
function DogPeopleTemplate(dogPerson) {
  return `
  <main class="wrapper">
  <div class="profile-card-container">
      <div class="top-or-left">
          <section class="profile-card-container__card-img-area">
              <img src="./img/headshot.jpg" alt="itzadog">
          </section>
          <section class="profile-card-container__card-name-area">
              <h3>${dogPerson.name}</h3>
          </section>
          <section class="profile-card-container__card-title-area">
              ${dogPerson.jobTitle}
          </section>    
      </div>
      <section class="card-details-area">
          <div class="employer-details">
              <h4>company:</h4>
              <p>${dogPerson.company}</p>
          </div>
          <div class="employment-details">
              <h4>experience:</h4>
              <p>${dogPerson.experience}</p>
          </div>
          <div class="institution-details">
              <h4>school:</h4>
              <p>${dogPerson.school}</p>
          </div>
          <div class="education-details">
              <h4>major:</h4>
              <p>${dogPerson.major}</p>
          </div>
          <div class="email-details">
              <h4>email:</h4>
              <a href="#"><i>  dogo@example.com</i></a>
          </div>
          <div class="social-details">
              <a href="#"><i class="fab fa-linkedin" style="color: blue">  dogo.linkedinprofile.com</i></a>
          </div>
      </section>
  </div>    
</main>
  `
}

// find insetion point
// build html and insert array data 
document.getElementById("template-hook").innerHTML = `
<h1>JSON array of (${dogPeople.length}) items, branch sec3l03</h1>
   ${dogPeople.map(DogPeopleTemplate).join('')}
`
// document.body.innerHTML = `
//   ${dogPeople.map(DogPeopleTemplate).join('')};
// `

///////////////
//    class create
//    class DogPeopleClass {
//      constructor(name, jobTitle, company, experience, school, major, email, linkedInUrl) {
//        this.name = name;
//        this.jobTitle = jobTitle;
//        this.company = company;
//        this.experience = experience;
//        this.school = school;
//        this.major = major;
//        this.email = email;
//        this.linkedInUrl = linkedInUrl;
//      }
//    }


  // dogMarkup = `
  //   <main class="wrapper">
  //   <div class="profile-card-container">
  //       <div class="top-or-left">
  //           <section class="profile-card-container__card-img-area">
  //               <img src="./img/headshot.jpg" alt="itzadog">
  //           </section>
  //           <section class="profile-card-container__card-name-area">
  //               <h3>${dogPerson.name}</h3>
  //           </section>
  //           <section class="profile-card-container__card-title-area">
  //               ${dogPerson.jobTitle}
  //           </section>    
  //       </div>
  //       <section class="card-details-area">
  //           <div class="employer-details">
  //               <h4>company:</h4>
  //               <p>${dogPerson.company}</p>
  //           </div>
  //           <div class="employment-details">
  //               <h4>experience:</h4>
  //               <p>${dogPerson.experience}</p>
  //           </div>
  //           <div class="institution-details">
  //               <h4>school:</h4>
  //               <p>${dogPerson.school}</p>
  //           </div>
  //           <div class="education-details">
  //               <h4>major:</h4>
  //               <p>${dogPerson.major}</p>
  //           </div>
  //           <div class="email-details">
  //               <h4>email:</h4>
  //               <a href="#"><i>  dogo@example.com</i></a>
  //           </div>
  //           <div class="social-details">
  //               <a href="#"><i class="fab fa-linkedin" style="color: blue">  dogo.linkedinprofile.com</i></a>
  //           </div>
  //       </section>
  //   </div>    
  // </main>
  // `;

  // document.body.innerHTML = dogMarkup;

////////////////////////    
///////////////
  //  save this as bkup, making mods above 
//   class DogPeopleClass {
//     constructor(name, jobTitle, company, experience, school, major, email, linkedInUrl) {
//       this.name = name;
//       this.jobTitle = jobTitle;
//       this.company = company;
//       this.experience = experience;
//       this.school = school;
//       this.major = major;
//       this.email = email;
//       this.linkedInUrl = linkedInUrl;
//     }
//   }

//   // create single dog element passing in array to the DogPeopleClass
//  const dogPerson = new DogPeopleClass(dogPeople);
 

//  dogMarkup = `
//    <main class="wrapper">
//    <div class="profile-card-container">
//        <div class="top-or-left">
//            <section class="profile-card-container__card-img-area">
//                <img src="./img/headshot.jpg" alt="itzadog">
//            </section>
//            <section class="profile-card-container__card-name-area">
//                <h3>${dogPerson.name}</h3>
//            </section>
//            <section class="profile-card-container__card-title-area">
//                ${dogPerson.jobTitle}
//            </section>    
//        </div>
//        <section class="card-details-area">
//            <div class="employer-details">
//                <h4>company:</h4>
//                <p>${dogPerson.company}</p>
//            </div>
//            <div class="employment-details">
//                <h4>experience:</h4>
//                <p>${dogPerson.experience}</p>
//            </div>
//            <div class="institution-details">
//                <h4>school:</h4>
//                <p>${dogPerson.school}</p>
//            </div>
//            <div class="education-details">
//                <h4>major:</h4>
//                <p>${dogPerson.major}</p>
//            </div>
//            <div class="email-details">
//                <h4>email:</h4>
//                <a href="#"><i>  dogo@example.com</i></a>
//            </div>
//            <div class="social-details">
//                <a href="#"><i class="fab fa-linkedin" style="color: blue">  dogo.linkedinprofile.com</i></a>
//            </div>
//        </section>
//    </div>    
//  </main>
//  `;

//  document.body.innerHTML = dogMarkup;

// getting this to render in browser w dogMarkup variable to html, not neeeded 
  // since able to pass dogPeople array into DogPeopleClass but only getting array[0]
  //  const dogPerson = {
  //    name: 'joe',
  //    jobTitle: 'boss',
  //    company: 'woohoo',
  //    experience: '3 years',
  //    school: 'hard knocks',
  //    major: 'joke',
  //    email: 'j@example.com',
  //    linkedInUrl: 'joe.linkedinprofile.com'
  //  }  


  ///////////////
   // see sitepoint.com/loop-through-json...
   // use Object.entries to iterate over js object
  //  Object.entries(dogPeople).forEach((dogPerson) => {
  //   const [key, value] = dogPerson;
  //   console.log(`${key}: ${value}`);
  // });

