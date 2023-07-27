import axios from "axios";
const baseURL = `https://api.themoviedb.org/3`
const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTE0YTFkZjczNWQ2YzUwMDZkMmIxMWJmYjM4NjU3YyIsInN1YiI6IjY0ODgxNjBlOTkyNTljMDExYzQxYmJhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1n88x9JoBFrZS6epR_O1HlAj5jauWLKU7yOKVOkGnig'
    }
  };
  
export async function fetchApiData(url){
try{
  const {data} = await axios.get(`${baseURL}${url}`,options) 
  return data
}
catch(error){
  console.log(error)
}

}
