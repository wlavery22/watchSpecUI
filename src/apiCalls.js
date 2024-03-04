
export default function getAllWatches() {
  return fetch('https://cryptic-thicket-07538-399494341bbd.herokuapp.com/api/v1/watches')
  .then(response => {
    if (!response.ok) {
      if (response.status === 500) {
        throw new Error('Server Error: Please try again later.');
      } else {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
    } else {
      return response.json();
    }
  });
}
 
// http://localhost:20223