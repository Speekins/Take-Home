//const MY_KEY = process.env.REACT_APP_API_KEY

export const getArticlesByGenre = (genre) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${genre}.json?api-key=OVAGeCoI4G285YyTXNDwGpYOsV0H55eA`)
    .then(response => response.json())
}