const { faker} = require('@faker-js/faker')
const express = require('express');
const app = express();
const PORT = 8000;

const createUser = () => ({
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid()
});

app.get("/api/user/new", (req, res) =>{
    let newUser = createUser();
    res.json(newUser);
})

app.listen(PORT, () => console.log("Server initiated on port" + PORT));