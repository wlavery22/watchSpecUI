

export default function getAllWatches() {
  return fetch('http://localhost:3000/api/v1/watches')
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
      } else {
      return response.json()
      }
  })
  // .then(data => setWatches(data.watches))
  // .catch(error => handleError(error.message))
}


