[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/speekins/take-home">
    <img src="https://user-images.githubusercontent.com/74210902/220989683-4970e76e-11d6-4522-aa07-aed5497170cd.jpg" alt="Logo">
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
        <li><a href="#learning-goals">Learning Goals</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
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


<!-- Deployment Information -->
### Deployment Information

Nooz is a FrontEnd application utilizing a React, maintained integration with Circle CI, and tested with Cypress.io. The frontend handles client-side tasks and displays data from the backend, NYTimes Top Stories [API](https://developer.nytimes.com/docs/top-stories-product/1/overview).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Built With -->
### Built With
* React.js
* HTML
* CSS
* Circle CI
* Cypress

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

<!-- Frontend Repository Installation -->
### Frontend Repository Installation

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
## Available Endpoints
The application accesses a single endpoint with a variety of queries:<br>
*Example* https://api.nytimes.com/svc/topstories/v2/{SECTION}.json?api-key={INSERT_API_KEY_HERE}

Queries By Section:
The possible section value are: `arts`, `automobiles`, `books`, `business`, `fashion`, `food`, `health`, `home`, `insider`, `magazine`, `movies`, `nyregion`, `obituaries`, `opinion`, `politics`, `realestate`, `science`, `sports`, `sundayreview`, `technology`, `theater`, `t-magazine`, `travel`, `upshot`, `us`, and `world`.

Expected Response:

 ```json
{
  "status": "OK",
    "copyright": "Copyright (c) 2023 The New York Times Company. All Rights Reserved.",
      "section": "home",
        "last_updated": "2023-02-23T12:59:16-05:00",
          "num_results": 31,
            "results": [
              {
                "section": "world",
                "subsection": "",
                "title": "The West Tried to Isolate Russia. It Didn’t Work.",
                "abstract": "The West never won over as much of the world as it initially seemed. Here’s how Russia is taking advantage of a fragmented world.",
                "url": "https://www.nytimes.com/interactive/2023/02/23/world/russia-ukraine-geopolitics.html",
                "uri": "nyt://interactive/883c467a-375c-5af0-8dee-e6d9cbbfe4b3",
                "byline": "By Josh Holder, Lauren Leatherby, Anton Troianovski and Weiyi Cai",
                "item_type": "Interactive",
                "updated_date": "2023-02-23T11:52:42-05:00",
                "created_date": "2023-02-23T09:46:18-05:00",
                "published_date": "2023-02-23T09:46:18-05:00",
                "material_type_facet": "",
                "kicker": "",
                "des_facet": [
                  "Russian Invasion of Ukraine (2022)",
                  "Diplomatic Service, Embassies and Consulates",
                  "internal-sub-only"
                ],
                "org_facet": [
                  "North Atlantic Treaty Organization"
                ],
                "per_facet": [],
                "geo_facet": [
                  "Ukraine"
                ],
                "multimedia": [
                  {
                    "url": "https://static01.nyt.com/images/2023/02/23/world/russia-ukraine-geopolitics-promo/russia-ukraine-geopolitics-promo-superJumbo-v5.png",
                    "format": "Super Jumbo",
                    "height": 1333,
                    "width": 2000,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "",
                    "copyright": ""
                  },
                  {
                    "url": "https://static01.nyt.com/images/2023/02/23/world/russia-ukraine-geopolitics-promo/russia-ukraine-geopolitics-promo-threeByTwoSmallAt2X-v9.png",
                    "format": "threeByTwoSmallAt2X",
                    "height": 400,
                    "width": 600,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "",
                    "copyright": ""
                  },
                  {
                    "url": "https://static01.nyt.com/images/2023/02/23/world/russia-ukraine-geopolitics-promo/russia-ukraine-geopolitics-promo-thumbLarge-v5.png",
                    "format": "Large Thumbnail",
                    "height": 150,
                    "width": 150,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "",
                    "copyright": ""
                  }
                ],
                "short_url": "https://nyti.ms/41ni9vG"
              }
            ]
}
```
</details><br>
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

MVP

* Fetch data from third-party NYTimes Top Stories [API](https://developer.nytimes.com/docs/top-stories-product/1/overview).
* Display a list of article data
* A “detailed” view for each article (as opposed to summary/list view)
* Listed articles will link to the detailed article view
* Implement search, filter, OR sort functionality

Stretch Goals

* Save articles the user is interested in.
* Build backend for storage of user's favorite articles
* Implement TypeScript.
* User creation, editing, deleting
* User authentication

See the [open issues](https://github.com/speekins/take-home/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

<table>
  <tr>
    <td><img src="https://avatars.githubusercontent.com/u/74210902?s=150&v=4"></td>
  </tr>
  <tr>
    <td>Spencer Haka</td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/Speekins">GitHub</a><br>
      <a href="https://www.linkedin.com/in/spencer-haka/">LinkedIn</a>
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
