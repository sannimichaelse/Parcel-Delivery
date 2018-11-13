<p>
   <a href="https://codeclimate.com/github/sannimichaelse/Parcel-Delivery/maintainability"><img src="https://api.codeclimate.com/v1/badges/9362c0aa748e9823507d/maintainability" /></a>
<a href='https://coveralls.io/github/sannimichaelse/Parcel-Delivery?branch=ch-161789196-host-app-heroku'><img src='https://coveralls.io/repos/github/sannimichaelse/Parcel-Delivery/badge.svg?branch=ch-161789196-host-app-heroku' alt='Coverage Status' />
</a>
     <a style="padding:5px" href="https://travis-ci.org/sannimichaelse/Parcel-Delivery">
        <img src="https://api.travis-ci.org/sannimichaelse/Parcel-Delivery.svg?branch=develop"
            alt="build status">
    </a>
   <a href="https://codeclimate.com/github/sannimichaelse/Parcel-Delivery/test_coverage"><img src="https://api.codeclimate.com/v1/badges/9362c0aa748e9823507d/test_coverage" /></a>
</p>

## SendIT

SendIT is a courier service that helps users deliver parcels to different destinations. SendIT provides courier quotes based on weight categories.

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

</table>
<br/>

# Technologies

- [Eslint](https://eslint.org/)
- [TravisCI](https://travis-ci.org/)
- [Nodejs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Code-Climate](https://codeclimate.com/)
- [Coveralls](https://coveralls.io/)
- [Babel](https://babeljs.io/)

## Application stories on pivotal Tracker

---

[Pivotal Tracker](https://www.pivotaltracker.com/n/projects/2213242)

## Find Api on heroku

[send-it](https://senditt.herokuapp.com/) 

<!-- ## View app here

[ui](https://tomiwatech.github.io/Maintenance-Tracker/UI/)

-->
