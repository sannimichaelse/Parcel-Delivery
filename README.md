<p>
   <a href="https://codeclimate.com/github/sannimichaelse/Parcel-Delivery/maintainability"><img src="https://api.codeclimate.com/v1/badges/9362c0aa748e9823507d/maintainability" /></a>
<a href='https://coveralls.io/github/sannimichaelse/Parcel-Delivery?branch=ch-161789196-host-app-heroku'><img src='https://coveralls.io/repos/github/sannimichaelse/Parcel-Delivery/badge.svg?branch=ch-161789196-host-app-heroku' alt='Coverage Status' />
</a>
     <a style="padding:5px" href="https://travis-ci.org/sannimichaelse/Parcel-Delivery">
        <img src="https://api.travis-ci.org/sannimichaelse/Parcel-Delivery.svg?branch=develop"
            alt="build status">
    </a>
   <a href="https://img.shields.io/github/license/mashape/apistatus.svg"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" /></a>
</p>

# SendIT

SendIT is a courier service that helps users deliver parcels to different destinations. SendIT provides courier quotes based on weight categories.

## Acces running application
[Heroku](https://senditt.herokuapp.com/)<br>
[Docs](https://senditt.herokuapp.com/docs)<br>
[UI](https://sannimichaelse.github.io/Parcel-Delivery/UI/index.html)<br>
[Pivotal Tracker Board](https://www.pivotaltracker.com/n/projects/2213242)

### Required Features
* Users can create an account and log in
* Users can create a parcel delivery order.
* Users can change the destination of a parcel delivery order.
* Users can cancel a parcel delivery order.
* Users can see the details of a delivery order.
* The user can view all parcel delivery orders he/she has created.
* Admin can change the status of a parcel delivery order.
* Admin can change the status and present location of a parcel delivery order.
* Admin can view all parcel delivery orders in the application.
* Admin can change the present location of a parcel delivery order

### Optional Features(Extra Credit)
* The user gets real-time email notification when Admin changes the status of their parcel.
* The user gets real-time email notification when Admin changes the present location of
their parcel.

## Getting Started
Instructions to get the project running successfully on your website

## Prerequisites
You need to have these installed before cloning the project
* NodeJS (atleast v8.11.2) - https://nodejs.org/en/download/
* Postgres - https://www.postgresql.org/download/


## Technologies Used
- [Eslint](https://eslint.org/)
- [TravisCI](https://travis-ci.org/)
- [Nodejs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Code-Climate](https://codeclimate.com/)
- [Coveralls](https://coveralls.io/)
- [Babel](https://babeljs.io/)

## Coding Style
[Airbnb JavaScript style guide](https://github.com/airbnb/javascript)


## Installation

```bash
git clone https://github.com/sannimichaelse/Parcel-Delivery.git
```

```bash
cd Parcel-Delivery
```

```bash
npm install
```

```bash
npm start
```

## Test

Testing is used at key checkpoints in the overall process to determine whether objectives are being met. It also speed up software development process

##### Server side tests

```bash
npm run test
```

## Linting

Linting is the process of running a program that will analyse code for potential errors.

```bash
npm run lint:dev
```

<h3>ENDPOINTS</h3>
<hr>
<table>
  <tr>
      <th>Request</th>
      <th>End Point</th>
      <th>Action</th>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/parcels</td>
      <td>Create a new parcel</td>
  </tr>
 <tr>
      <td>PUT</td>
      <td>/api/v1/parcels/:parcelid/cancel</td>
      <td>Cancel a parcel by parcelid</td>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/parcels</td>
      <td>Get all parcels</td>
  </tr>
  <tr>
        <td>GET</td>
        <td>/api/v1/parcels/:parcelid</td>
        <td>Get a parcel by parcelid</td>
  </tr>
  <tr>
        <td>GET</td>
        <td>/api/v1/users/parcels/:id</td>
        <td>Get all parcels belonging to a user</td>
  </tr>
   <tr>
        <td>POST</td>
        <td>/api/v1/auth/signup</td>
        <td>Signup a new user using database </td>
  </tr>
   <tr>
        <td>POST</td>
        <td>/api/v1/auth/login</td>
        <td>Login user with email and password </td>
  </tr>
  <tr>
        <td>PUT</td>
        <td>/api/v1//parcels/:id/destination</td>
        <td>Change Parcel Id destination by user </td>
  </tr>
  <tr>
        <td>PUT</td>
        <td>/api/v1/parcels/:id/status</td>
        <td>Change Parcel status by user admin</td>
  </tr>
   <tr>
        <td>PUT</td>
        <td>/api/v1/parcels/:id/location</td>
        <td>Change Parcel location by user admin</td>
  </tr>
  

</table>
<br>

## License
This project is licensed under the MIT License 

## Author
[Sanni Michael Tomiwa](https://sannimichaelse.github.io)

## Acknowledgements
[Andela](https://andela.com)<br>
[Scotch.io](https://scotch.io)<br>
[FreeCodeCamp](https://medium.freecodecamp.com)<br>
[Google](https://google.com)<br>
[Postgrestutorial.com](http://www.postgresqltutorial.com/)
