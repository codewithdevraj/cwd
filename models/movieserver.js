const mongoose = require("mongoose");

const profileschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    access: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    startup: {
      type: String,
      required: true,
    },
    about_me: {
      type: String,
      required: true,
    },
    about_us: {
      type: String,
    },
    skills: {
      programing_languages: [String],
      web_technologies: [String],
      database: [String],
      tools: [String],
      os: [String],
    },
    projects: [
      {
        project_name: String,
        description: String,
        technologies: [
          {
            type: Map,
            of: Number,
          },
        ],
      },
    ],
    education: [
      {
        degree: String,
        Branch: String,
        College: String,
        University: String,
        Board: String,
        Year: String,
      },
    ],
    experience: [
      {
        Company: String,
        Role: String,
        Duration: String,
        Description: String,
      },
    ],
    contact: {
      Phone: String,
      Email: String,
      Address: String,
      Linkedin: String,
      Github: String,
    },
    resume: String,
    certificates: [
      {
        cert_name: String,
        issued_by: String,
        Year: String,
      },
    ],
    hobbies: [String],
    languages: [String],
  },
  {
    timestamps: true,
  }
);

const profile = mongoose.model("profile", profileschema);

module.exports = {
  profile
};
