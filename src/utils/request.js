

const APIURL='https://pokeapi.co/api/v2' 

export default  async function (url){

    const response = await fetch(APIURL+url);
    const data = await response.json();
    return data;
    
}