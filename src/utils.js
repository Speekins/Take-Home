export function timeConverter(date) {
  date = new Date("2023-02-21T05:00:37-05:00")
  let newDate = new Date(date)
  return newDate.toString().slice(0, 15)
}

export function cleanAuthorInfo(byline) {
  return byline.replace('By ', '')
}