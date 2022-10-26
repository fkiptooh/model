const hospitals = [
  {
    "id": 1,
    "name": "Kenyatta Hospital",
    "slug": "description",
    "levelId": 5,
    "category": "Public"
  },
  {
    "id": 2,
    "name": "Nairobi Hospital",
    "slug": "nairobi hospital",
    "levelId": 5,
    "category": "Public"
  },
  {
    "id": 3,
    "name": "Thika",
    "slug": "Level 3",
    "levelId": 4,
    "category": "Public"
  },
  {
    "id": 4,
    "name": "Kericho",
    "slug": "Kericho",
    "levelId": 5,
    "category": "Public"
  },
  {
    "id": 5,
    "name": "Agha Khan",
    "slug": "Level 5",
    "levelId": 5,
    "category": "Private"
  }
];

const levels = [
  { id: 1, name: "Level 6" },
  { id: 2, name: "Level 5" },
  { id: 3, name: "Level 4" }
];

const newHospital = {
  id: null,
  name: "",
  levelId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newHospital,
  hospitals,
  levels
};
