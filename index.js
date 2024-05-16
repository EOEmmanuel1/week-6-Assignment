const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')
const {getEmployeeInventory, postEmployeeInventory, updateEmployeeInventory, deleteEmployeeInventory} = require('./src/controllers')

const PORT = process.env.PORT || 5500
const myUrl = process.env.myUrl

const app = express();

app.use(express.json());

mongoose.connect(myUrl)
.then(() => console.log('Connected to mongodb...'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get('/getRecord', getEmployeeRecord )
app.post('/postrecord', postEmployeeRecord)
app.put('/putRecord/:id', updateEmployeeRecord)
app.patch('/patchRecord/:id', updateEmployeeRecord)
app.delete('/deleteRecord/:id', deleteEmployeeRecord)