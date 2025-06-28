import React from 'react'
import { useEffect } from 'react';

const PokeCard = (props) => {
  const {selectedPokemon} = props;
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    // if loading, exit logic
      if(loading || !localStorage) return;
    //check if the selected pokemon is available in the cache
    // 1.Define a cache
      let cache = {};
      if(localStorage.getItem("pokedex")){
        cache = JSON.parse(localStorage.getitem("pokedex"))
      }

    // 2.Check if the selected pokemon is in the cache,otherwise fetch from a API
       if(selectedPokemon in cache){
          //read from cache
          setData(cache[selectedPokemon])
          return;
       }
       // We passed all the cache stuff to no avail & now we need to fetch the information from API
         async function fetchPokemonData(){
          try{

          }catch(error){

          }finally{
            
          }
         }
    // 3.If we fetch from the API, make sure to save the information to the cache for next time
  },[selectedPokemon])
  return (
    <div></div>
  )
}

export default PokeCard