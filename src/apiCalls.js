const MY_KEY = process.env.REACT_APP_API_KEY

export const getArticlesByGenre = (genre) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${genre}.json?api-key=${MY_KEY}`)
    .then(response => response.json())
}