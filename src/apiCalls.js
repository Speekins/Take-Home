const MY_KEY = 'OVAGeCoI4G285YyTXNDwGpYOsV0H55eA'

export const getArticlesByGenre = (genre) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${genre}.json?api-key=${MY_KEY}`)
    .then(response => response.json())
}