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

const createCompany = () => ({
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.zipCode(),
        country: faker.location.country()
    }
});

app.get("/api/user/new", (req, res) =>{
    let newUser = createUser();
    res.json(newUser);
})

app.get("/api/company/new", (req, res) =>{
    let newCompany = createCompany();
    res.json(newCompany);
})

app.get("/api/company/user", (req, res) =>{
    let newCompany = createCompany();

    let newUser = createUser();

    const response = {
        user: newUser,
        company: newCompany
    }
    res.json(response);
})

app.listen(PORT, () => console.log("Server initiated on port" + PORT));
