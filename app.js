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
  return Object.values(characters).map(getCharacters);
};

const getCharacters = (id) => {
  const url = buildUrl('https://rickandmortyapi.com/api/', 'character/', id);
  fetch(url)
    .then(response => response.json())
    .then(addToDom);
};

const addToDom = (character) =>{
  const element = document.createElement('div');
  const imageElement = document.createElement('img');
  element.innerHTML = character.name;
  imageElement.setAttribute('src', character.image);
  document.body.appendChild(element);
  document.body.appendChild(imageElement);
};


// const concat = (...item) =>{
//   console.log(item);
//   return item.reduce((finalString, string) => finalString + string, '');
// };



(() => {
  createCharacters();
})();

