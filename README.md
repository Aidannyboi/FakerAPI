# FakerAPI
A project I worked on in our MERN course on routing APIs using Express.js and Faker to create random companies and name.

ARROW FUNCTIONS:

-createUser: An arrow function that creates a user once called by either "/api/user/new" and "/api/company/user".

-createCompany: An arrow function that creates a company once called by either "/api/company/new" and "/api/company/user".

APP ROUTES:

-"/api/user/new": Routes user to a randomly generated list of information by assigning newUser to run createUser and then responding to the user with newUsers information.

-"/api/company/new": Routes user to a randomly generated list of information by assigning newCompany to run createCompany and then responding to the user with newCompany information.

-"/api/company/user": Routes user to a randomly generated list of information by assigning newUser AND newCompany to their assignned arrow function (createUser and createCompany) and then responding to the user with both variables information.
