const getTshirtDataBySizes = (req, res) => {
    const tshirtSizesData = [
        { size: "XXL", ordered: 100, distributed: 80 },
        { size: "XL", ordered: 150, distributed: 120 },
        { size: "L", ordered: 200, distributed: 180 },
        { size: "M", ordered: 250, distributed: 230 },
        { size: "S", ordered: 300, distributed: 280 },
        { size: "XS", ordered: 350, distributed: 320 }
    ];
    res.json(tshirtSizesData);
};

module.exports = { getTshirtDataBySizes };
