// src/controllers/genderController.js
const getGenderData = (req, res) => {
    const genderData = {
        maleCount: 150,
        femaleCount: 100
    };
    res.json(genderData);
};

module.exports = {
    getGenderData
};
