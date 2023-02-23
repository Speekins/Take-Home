[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/speekins/take-home">
    <img src="https://github.com/board-together/BE-Board-Together/raw/main/public/board-together.png" alt="Logo">
  </a>

  <h1 align="center">NOOZ</h3>

  <h3 align="center">
    News Article Application
    <br />
  </h3>
</div>

<!-- TABLE OF CONTENTS -->
<h4>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#heroku-information">Heroku Information</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#database-schema">Database Schema</a></li>
        <li><a href="#learning-goals">Learning Goals</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
          <li><a href="#repositories">Repositories</a></li>
          <li><a href="#frontend-repository-installation">Frontend Repository Installation</a></li>
          <li><a href="#available-endpoints">Available Endpoints</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</li>
    <li><a href="#license">License</a></li></a>
  </ol>
</h4>

<!-- ABOUT THE PROJECT -->
## About The Project

Nooz is an information and news application for accessing trending NYT articles by catergory. It utilizes a React FrontEnd to create a seamless user experience and utilizes the fetch API to make calls to the New York Times Top Articles API to provide up-to-date information. With this platform, users can visit the site to see all current top headlines, click on the story to get more info, and be taken to the NYT website for access to the article itself.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Screenshots/GIFS -->
### Application Showcase
#### User Dashboard
![User Dashboard](https://user-images.githubusercontent.com/74210902/219470895-b111d25c-48f8-425b-b922-56b2b407c6d2.gif)
#### Game Search
![search_gif](https://user-images.githubusercontent.com/74210902/219473532-9c16a2d8-536d-4d1f-aeba-1a0a4009d650.gif)
#### Friend's Games
![borrow_gif](https://user-images.githubusercontent.com/74210902/219478546-e40d629d-2398-4c37-bc38-12dfb0b9dd5e.gif)

<!-- Deployment Information -->
### Deployment Information

Board Together is a full-stack application combining a React frontend deployed to Surge and Ruby on Rails backend deployed to Heroku. The frontend handles client-side tasks and displays data from the backend, which handles server-side logic and database operations. Deployment involves building the React frontend, integrating it with the Rails backend, and pushing the code to Heroku. The application can be accessed at the Heroku URL.

* <a href="https://board-together.herokuapp.com/" alt="Heroku Deployment">Heroku Deployment</a><br>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Built With -->
### Built With
<img width="2441" width="90%" height="90%" alt="Board Together-FE-Tech Stack" src="https://user-images.githubusercontent.com/74210902/219459283-08b81e57-bf46-4f10-8017-573d27039bc3.png"/>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Learning Goals -->
### Learning Goals/Benchmarks

* Clearly communicate thought and planning process
* Clearly communicate use of code and application structure
* A strong understanding of React JS and Front-End best practices
* Your ability to prioritize for MVP
* An understanding of basic usability practices and standards
* A clear hierarchy of information
* Clean, well thought out code

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Board Together utilizes a service oriented architecture with separate backend and frontend services. Installation instructions for the frontend repository below. Backend installation instructions can be found in the repository section. The Postman mock server below can be used to test the available endpoints. Expected request and response formats are listed for CRUD functionality.

<!-- Frontend Repository Installation -->
### Frontend Repository Installation

<b>UPDATE FOR FRONTEND</b>

1. Clone the repository.
1. cd into the target directory `take-home`.
1. Install all packages: `npm install`.
1. Open application: `npm start`.
1. You will be automatically navigated to your browser of choice.
1. Run Cypress test suite: `npm run cypress`.
1. Open Cypress runner in prefered browser (default Chrome).
1. Open each file to view passing tests.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Available Endpoints -->
## Endpoint(s)
The application accesses a single endpoint with a variety of queries:<br>
*Example* https://api.nytimes.com/svc/topstories/v2/home.json?api-key={INSERT_API_KEY_HERE}

Expected Response:

 ```json
{
    "data": {
        "searchGames": [
            {
                "boardGameAtlasId": "OIXt3DmJU0",
                "url": "https://www.boardgameatlas.com/game/OIXt3DmJU0/catan",
                "name": "Catan",
                "yearPublished": 1995,
                "minPlayers": 3,
                "maxPlayers": 4,
                "minPlaytime": 45,
                "maxPlaytime": 90,
                "minAge": 10,
                "description": "<p>The women and men of your expedition build the first two settlements. Fortunately, the land is rich in natural resources. You build roads and new settlements that eventually become cities. Will you succeed in gaining supremacy on Catan? Barter trade dominates the scene. Some resources you have in abundance, other resources are scarce. Ore for wool, brick for lumber - you trade according to what is needed for your current building projects. Proceed strategically! If you found your settlements in the right places and skillfully trade your resources, then the odds will be in your favor. But your opponents are smart too.</p>\r\n<p>To begin the game, we build the game board using hexagonal terrain tiles. Catan is born - a beautiful island with mountains, pastures, hills, fields, and forests, surrounded by the sea.</p>\r\n<p>Each of us places two small houses on spaces where three terrain hexes meet. They are our starting settlements.</p>\r\n<p>And so it begins. I roll two dice. An “11”! Each terrain hex is marked with a die roll number. Each player who owns a settlement adjacent to a terrain hex marked with the number rolled receives a resource produced by this hex. Hills produce brick, forests produce lumber, mountains produce ore, fields produce grain, and pastures produce wool.</p>\r\n<p>We use these resources to expand across Catan: we build roads and new settlements, or we upgrade our existing settlements to cities. For example, a road costs 1 brick and 1 lumber. If we do not have the necessary resources, we can acquire them by trading with our opponents.</p>\r\n<p>Each settlement is worth 1 victory point and each city is worth 2 victory points. If you expand cleverly, you may be the first player to reach 10 victory points and thus win the game!</p>",
                "thumbUrl": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324722072.jpg",
                "imageUrl": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324722072.jpg"
            },
            {
                "boardGameAtlasId": "E5TYKwLTf0",
                "name": "Catan: Cities & Knights",
                "yearPublished": 1998,
                "minPlayers": 3,
                "maxPlayers": 4,
                "minPlaytime": 60,
                "maxPlaytime": 90,
                "minAge": 10,
                "description": "Dark clouds gather over the once peaceful landscape. Wild barbarians, lured by Catan’s wealth and power, maneuver to attack. Their massive warships loom against the bright orange horizon. You must be strong! Barbarians attack the weakest targets, and the victim of their onslaught will be the player who contributes the least to the defense of Catan.<br /><br /> Don’t take any chances! Field your knights!<br /><br /> In <b>Catan: Cities &amp; Knights</b> you engage in the defense of Catan and compete to build the three great metropolises of Catan. Each of these magnificent urban centers is even more valuable than a city. They’re also immune to the dangerous barbarians. Invest in city improvements, which you acquire using three commodities of trade: coin, paper, and cloth. If you improve your culture, muster your knights, and enrich your fine cities, you will be the master of the great realm of Catan!<br /><br /><b> Components:</b><br /> 36 Commodity Cards<br /> 54 Progress Cards<br /> 6 Victory Point Cards<br /> 3 Wooden Metropolis Pieces<br /> 1 Wooden Merchant Figure<br /> 1 Custom Event Die<br /> 1 Wooden Barbarian Ship<br /> 24 Wooden Knights<br /> 12 City Walls<br /> 4 Development Flip-Charts<br /> 1 Sea Frame Piece<br /> 1 Rulebook<br />",
                "thumbUrl": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257359245-51DYsPZcYyL.jpg",
                "imageUrl": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257359245-51DYsPZcYyL.jpg",
            }
        ]
    }
}
```
</details><br>
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

MVP

* CRUD functionality for User and UserGames.
* Search for a board game utilizing [Board Game Atlas API](https://www.boardgameatlas.com/api/docs/search).
* Add board games to User collection.
* Track board games you have borrowed and board games you have lent out.

Stretch Goals

* Add friends feature, allowing a User to add friends and see that friend's games instead of all User's games.
* Implement User authentication using a OAuth provider.
* Create board game parties, where friends can arrange get togethers to play a certain game.
* Ability to add comments or reviews to games you have, or have borrowed.
* Email notifications for requests to borrow games.

See the [open issues](https://github.com/board-together/FE-Board-Together/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

<table>
  <tr>
    <td><img src="https://avatars.githubusercontent.com/u/110054994?s=150&v=4"></td>
    <td><img src="https://avatars.githubusercontent.com/u/74210902?s=150&v=4"></td>
    <td><img src="https://avatars.githubusercontent.com/u/105405396?s=150&v=4"></td>
  </tr>
  <tr>
    <td>Brett Kuhn</td>
    <td>Spencer Haka</td>
    <td>Thomas Peterson</td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/bkuhn2">GitHub</a><br>
      <a href="https://www.linkedin.com/in/brett-kuhn/">LinkedIn</a>
    </td>
    <td>
      <a href="https://github.com/Speekins">GitHub</a><br>
      <a href="https://www.linkedin.com/in/spencer-haka/">LinkedIn</a>
    </td>
    <td>
      <a href="https://github.com/thomedpete">GitHub</a><br>
      <a href="https://www.linkedin.com/in/thomas-peterson-web-dev/">LinkedIn</a>
    </td>
  </tr>
</table>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Turing School of Software Design: [https://turing.edu/](https://turing.edu/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/speekins/Take-Home.svg?style=for-the-badge
[contributors-url]: https://github.com/speekins/Take-Home/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/speekins/Take-Home.svg?style=for-the-badge
[forks-url]: https://github.com/speekins/Take-Home/network/members
[stars-shield]: https://img.shields.io/github/stars/speekins/take-home.svg?style=for-the-badge
[stars-url]: https://github.com/speekins/Take-Home/stargazers
[issues-shield]: https://img.shields.io/github/issues/speekins/take-home.svg?style=for-the-badge
[issues-url]: https://github.com/speekins/Take-Home/issues
[license-shield]: https://img.shields.io/github/license/speekins/take-home.svg?style=for-the-badge
[license-url]: https://github.com/speekins/take-home/blob/master/LICENSE.txt
