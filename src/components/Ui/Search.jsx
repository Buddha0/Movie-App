import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';


function SearchComponent() {
  
    const [searchValue , setSearchValue] = useState("")
    const [loading, setLoading] = useState("") 
    const navigate = useNavigate();

  
      function handleSubmit(e) {
        setLoading(true)
        e.preventDefault();
        
        navigate(`/search/${searchValue}`);
        setSearchValue("")
        setLoading(false)
       
      }
    
      function handleInputChange(e) {
        setSearchValue(e.target.value);
      }
    if(loading){
      return<h1>....</h1>
    }
      return (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search movies.."
              value={searchValue}
              onChange={handleInputChange}
            />
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </form>
        </>
      );
    }
    
    export default SearchComponent;

    
    
    
    
    
    

