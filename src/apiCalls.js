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