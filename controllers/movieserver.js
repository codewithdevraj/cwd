const {profile} = require("../models/movieserver");

async function getallusers(req, res) {
  const allUsers = await profile.find({})
  return res.json(allUsers);
}

async function createuser(req, res) {
  const {
    name,
    access,
    role,
    startup,
    about_me,
    about_us,
    programing_languages,
    web_technologies,
    database,
    tools,
    os,
    projects,
    education,
    experience,
    phone,
    email,
    address,
    linkedin,
    github,
    resume,
    certificates,
    hobbies,
    languages
  } = req.body;

  const skillsArray = {
    programing_languages: programing_languages.split(",").map((skill) => skill.trim()),
    web_technologies: web_technologies.split(",").map((skill) => skill.trim()),
    database: database.split(",").map((skill) => skill.trim()),
    tools: tools.split(",").map((skill) => skill.trim()),
    os: os.split(",").map((skill) => skill.trim())
  }
  const contactArray = {
    Phone: phone,
    Email: email,
    Address: address,
    Linkedin: linkedin,
    Github: github
  }
  const hobbbiesArray = {
    hobbies: hobbies.split(",").map((hobby) => hobby.trim()),
  }
  const languageArray={
    languages: languages.split(",").map((language) => language.trim())
  }
  const user =
  {
    name: name,
    access: access,
    role: role,
    startup: startup,
    about_me: about_me,
    about_us: about_us,
    skills: skillsArray,
    projects: projects,
    education: education,
    experience: experience,
    contact: contactArray,
    resume: resume,
    certificates: certificates,
    hobbies: hobbbiesArray,
    languages: languageArray
  }

  profile.create(user);
  return res.json({Status: "Created"});
}

module.exports = {
  getallusers,
  createuser
}