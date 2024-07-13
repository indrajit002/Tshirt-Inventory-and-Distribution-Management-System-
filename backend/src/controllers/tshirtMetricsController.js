// tshirtMetricsController.js
const fakeData = (count) => {
    return Array.from({ length: count }, () => ({
        quantity: Math.floor(Math.random() * 100) + 1
    }));
};

const getOrders = (req, res) => {
    res.json(fakeData(10));
};

const getNeeded = (req, res) => {
    res.json(fakeData(8));
};

const getDistributed = (req, res) => {
    res.json(fakeData(12));
};

const getReturned = (req, res) => {
    res.json(fakeData(5));
};

const getExchanged = (req, res) => {
    res.json(fakeData(4));
};

const getLeft = (req, res) => {
    res.json(fakeData(6));
};

module.exports = {
    getOrders,
    getNeeded,
    getDistributed,
    getReturned,
    getExchanged,
    getLeft
};
