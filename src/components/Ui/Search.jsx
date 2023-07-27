import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';


function SearchComponent() {
  
    const [searchValue , setSearchValue] = useState("")
 
    const navigate = useNavigate();

  
      function handleSubmit(e) {
        e.preventDefault();
        navigate(`/search/${searchValue}`);
        setSearchValue("")
       
      }
    
      function handleInputChange(e) {
        setSearchValue(e.target.value);
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

    
    
    
    
    
    

