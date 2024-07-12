const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initiateMainDatabase } = require('./src/config/db');
const UserRouter = require('./src/routes/userRoutes');
const UploadRouter = require('./src/routes/uploadRoutes');
const DeleteRouter = require('./src/routes/deleteRoutes');
const genderRoutes = require('./src/routes/genderRoutes');
const tshirtSizeDataRoutes = require('./src/routes/tshirtSizeDataRoutes'); // Import tshirtSizeDataRoutes
const tshirtRoutes = require('./src/routes/tshirtRoutes');
const datesRoutes = require('./src/routes/datesRoutes');
// const MetricsRoutes = require('./src/routes/MetricsRoutes')
// const metricsRoutes = require('./src/routes/metricsRoutes');
// const tshirtMetricsRoutes = require('./src/routes/tshirtMetricsRoutes');
const metricsRoutes = require('./src/routes/metricsRoutes')

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGOURI = process.env.MONGODB_URI;

initiateMainDatabase(MONGOURI);

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is Working' });
});

app.use('/', UserRouter);
app.use('/api', UploadRouter);
app.use('/api', DeleteRouter);
app.use('/api', genderRoutes);
app.use('/api', tshirtSizeDataRoutes); // Mount tshirtSizeDataRoutes under /api
app.use('/api', tshirtRoutes);
app.use('/api',datesRoutes);
// app.use('/api',MetricsRoutes)
// app.use('/api', metricsRoutes);
// app.use('/api', tshirtMetricsRoutes);
app.use('api',metricsRoutes)



// app.use('/api', sizeRoutes); // Mount sizeRoutes under /api






app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});
