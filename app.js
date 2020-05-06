const buildUrl = (baseUrl, endPoint, optId) =>{
  let url = baseUrl + endPoint;
  if(optId){
    url += optId;
  }
  return url;
};

const createCharacters = () =>{
  const characters = {
    'Morty Smith': '2',
    'Rick Sanchez': '1',
  };
  Object.values(characters).map(character => getCharacters(character))
}

const getCharacters = (id) => {
  const url = buildUrl('https://rickandmortyapi.com/api/', 'character/', id);
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
};

(() => {
  createCharacters();
})();




