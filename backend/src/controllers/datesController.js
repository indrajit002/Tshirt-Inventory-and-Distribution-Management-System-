// datesController.js

const getDatesData = (req, res) => {
    const datesData = [
        { date: "2024-07-01", ordering: "Ordered 100 T-shirts", purchasing: "Purchased 80 T-shirts", distribution: "Distributed 70 T-shirts" },
        { date: "2024-07-02", ordering: "Ordered 120 T-shirts", purchasing: "Purchased 100 T-shirts", distribution: "Distributed 90 T-shirts" },
        { date: "2024-07-03", ordering: "Ordered 150 T-shirts", purchasing: "Purchased 130 T-shirts", distribution: "Distributed 110 T-shirts" },
        { date: "2024-07-04", ordering: "Ordered 180 T-shirts", purchasing: "Purchased 150 T-shirts", distribution: "Distributed 130 T-shirts" },
        { date: "2024-07-05", ordering: "Ordered 200 T-shirts", purchasing: "Purchased 180 T-shirts", distribution: "Distributed 160 T-shirts" }
    ];
    res.json(datesData);
};

module.exports = { getDatesData };
