const getSizeData = (req, res) => {
    // Replace this with your actual database query to fetch size data
    const sizes = ['XXL', 'XL', 'L', 'M', 'S', 'XS', 'M', 'L', 'S', 'XXL', 'L'];

    res.json(sizes);
};

module.exports = {
    getSizeData
};

