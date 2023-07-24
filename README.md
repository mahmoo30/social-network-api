# social-network-api ![badge](https://img.shields.io/badge/license-MIT-brightgreen)
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## 🔍 Table of Contents
- [Description](#description)
- [Installation](#install)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribute)
- [Tests](#test)
- [Questions](#questions)

## Description
The app uses Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages. It also uses the native JavaScript Date object to format timestamps.

## 💾 Installation
To install necessary dependencies, run the following command:
- npm install
- npm run seed

## Usage
* GIVEN a social network API
    - WHEN I enter the command to invoke the application
        - THEN my server is started and the Mongoose models are synced to the MongoDB database
    - WHEN I open API GET routes in Insomnia for users and thoughts
        - THEN the data for each of these routes is displayed in a formatted JSON
    - WHEN I test API POST, PUT, and DELETE routes in Insomnia
        - THEN I am able to successfully create, update, and delete users and thoughts in my database
    - WHEN I test API POST and DELETE routes in Insomnia
        - THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## License
![badge](https://img.shields.io/badge/license-MIT-brightgreen): This application is covered by the MIT license. 

## Contributing
Fork it, and make a pull request.

## Tests
To run tests, run the following command:
- npm start

## Sources
- [Starter/Helper Code](https://github.com/jpd61/social-network-api/tree/master)

## ✋ Questions
If you have any questions about the repo, open an issue or contact me directly at wasif.96@gmail.com. <br />
You can find more of my work on GitHub: [mahmoo30](https://github.com/mahmoo30)

#### This README was generated using a [README-generator](https://github.com/mahmoo30/readmegenerator) 🔥🔥🔥

[![Watch the video](https://drive.google.com/file/d/1Ax849fTuVepwHnA1GcxD_Kw5XpzXQ0OI/view)]
