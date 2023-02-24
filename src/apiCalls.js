const MY_KEY = 'OVAGeCoI4G285YyTXNDwGpYOsV0H55eA'

export const getArticlesByGenre = (genre) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${genre}.json?api-key=${MY_KEY}`)
    .then(response => response.json())
}


// SINGLE ARTICLE RESULT
// {
//   "section": "world",
//   "subsection": "europe",
//   "title": "In Northern Ukraine, a Different Sort of War Game",
//   "abstract": "Russian forces are shelling border areas there to tie up thousands of Ukrainian troops that might otherwise defend against attacks farther south.",
//   "url": "https://www.nytimes.com/2023/02/21/world/europe/ukraine-russia-shelling-kharkiv.html",
//   "uri": "nyt://article/0495f8e5-2b33-5331-aa3d-0394d7778350",
//   "byline": "By Andrew E. Kramer and Maria Varenikova",
//   "item_type": "Article",
//   "updated_date": "2023-02-21T10:41:30-05:00",
//   "created_date": "2023-02-21T05:00:37-05:00",
//   "published_date": "2023-02-21T05:00:37-05:00",
//   "material_type_facet": "",
//   "kicker": "",
//   "des_facet": [
//   "Russian Invasion of Ukraine (2022)"
//   ],
//   "org_facet": [
//   "North Atlantic Treaty Organization"
//   ],
//   "per_facet": [],
//   "geo_facet": [
//   "Belgorod (Russia)",
//   "Kharkiv (Ukraine)",
//   "Ukraine",
//   "Zaporizhzhia (Ukraine)",
//   "Donbas (Ukraine)"
//   ],
//   "multimedia": [
//   {
//   "url": "https://static01.nyt.com/images/2023/02/20/multimedia/20ukraine-slavhorod-01-fzlj/20ukraine-slavhorod-01-fzlj-superJumbo.jpg",
//   "format": "Super Jumbo",
//   "height": 1463,
//   "width": 2048,
//   "type": "image",
//   "subtype": "photo",
//   "caption": "Ukrainian soldiers at a position near the border with Russia this month. Ukrainian officials say Russia is tying down their troops in the region to keep them from battlefields farther south.",
//   "copyright": "Emile Ducke for The New York Times"
//   },
//   {
//   "url": "https://static01.nyt.com/images/2023/02/20/multimedia/20ukraine-slavhorod-01-fzlj/20ukraine-slavhorod-01-fzlj-threeByTwoSmallAt2X.jpg",
//   "format": "threeByTwoSmallAt2X",
//   "height": 400,
//   "width": 600,
//   "type": "image",
//   "subtype": "photo",
//   "caption": "Ukrainian soldiers at a position near the border with Russia this month. Ukrainian officials say Russia is tying down their troops in the region to keep them from battlefields farther south.",
//   "copyright": "Emile Ducke for The New York Times"
//   },
//   {
//   "url": "https://static01.nyt.com/images/2023/02/20/multimedia/20ukraine-slavhorod-01-fzlj/20ukraine-slavhorod-01-fzlj-thumbLarge.jpg",
//   "format": "Large Thumbnail",
//   "height": 150,
//   "width": 150,
//   "type": "image",
//   "subtype": "photo",
//   "caption": "Ukrainian soldiers at a position near the border with Russia this month. Ukrainian officials say Russia is tying down their troops in the region to keep them from battlefields farther south.",
//   "copyright": "Emile Ducke for The New York Times"
//   }
//   ],
//   "short_url": "https://nyti.ms/41bEMD0"
//   }

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