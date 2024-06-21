const mongoose = require("mongoose");

const dbschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    actors: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

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
    "about-me": {
      type: String,
      required: true,
    },
    "about-us": {
      type: String,
      required: true,
    },
    skills: {
      "programing-languages": [String],
      "web technologies": [String],
      database: [String],
      tools: [String],
      "operating system": [String],
    },
    projects: [
      {
        "project-name": String,
        "description": String,
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
        Degree: String,
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
        "certificate name": String,
        "issued by": String,
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

const mvdata = mongoose.model("mvdb", dbschema);
const profile = mongoose.model("profile", profileschema);

module.exports = {
  mvdata,
  profile
};
