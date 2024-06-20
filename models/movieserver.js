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
    Name: {
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
    "About Me": {
      type: String,
      required: true,
    },
    "About Us": {
      type: String,
      required: true,
    },
    skills: {
      "Programming Languages": [String],
      "Web Technologies": [String],
      Database: [String],
      Tools: [String],
      "Operating System": [String],
    },
    Projects: [
      {
        "Project Name": String,
        Description: String,
        Technologies: [
          {
            type: Map,
            of: Number,
          },
        ],
      },
    ],
    Education: [
      {
        Degree: String,
        Branch: String,
        College: String,
        University: String,
        Board: String,
        Year: String,
      },
    ],
    Experience: [
      {
        Company: String,
        Role: String,
        Duration: String,
        Description: String,
      },
    ],
    Contact: {
      Phone: String,
      Email: String,
      Address: String,
      Linkedin: String,
      Github: String,
    },
    Resume: String,
    Certificates: [
      {
        "Certificate Name": String,
        "Issued By": String,
        Year: String,
      },
    ],
    Hobbies: [String],
    Languages: [String],
  },
  {
    timestamps: true,
  }
);

const mvdata = mongoose.model("mvdb", dbschema);
const profile = mongoose.model("profile", profileschema);

module.exports = {
  mvdata,
  profile,
};
