export function getData() {
  return fetch('/solution-finder.json')
    .then((res) => res.json())
    .then((data) => {
      if(!data) {
        throw new Error('Error fetching data')
      }

      return data
    })
}