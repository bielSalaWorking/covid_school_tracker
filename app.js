const express = require('express');
const DB_connection = require('./config/database')
const PORT = 3005 || process.env.PORT;
const app = express();

DB_connection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/student', require('./src/routes/students/students'));
app.use('/api/classroom', require('./src/routes/classroom/classroom'));
app.use('/api/covidTest', require('./src/routes/covid_test/covid_test'));

app.listen(PORT, () => {
    console.log('running');
})