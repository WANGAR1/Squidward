// Your code here
// Step 1: Fetch the character data and create a span for each character
function fetchCharacters() {
    fetch('http://localhost:3000/characters')
      .then(response => response.json())
      .then(characters => {
        const characterBar = document.querySelector('#character-bar');
        characters.forEach(characters => {
          const characterSpan = document.createElement('span');
          characterSpan.textContent = characters.name;
          characterBar.appendChild(characterSpan);
          // Add event listener to character span for Step 2
          characterSpan.addEventListener('click', () => {
            fetchCharacterDetails(characters.id);
          });
        });
      });
  }
  
  // Step 2: Fetch the character details and update the detailed info div
  function fetchCharacterDetails(id) {
    fetch(`http://localhost:3000/characters ${id}`)
      .then(response => response.json())
      .then(character => {
        const detailedInfo = document.querySelector('#detailed-info');
        detailedInfo.innerHTML = `
          <img src="${characters.image}">
          <h2>${characters.name}</h2>
          <p>Votes: <span id="vote-count">${characters.votes}</span></p>
        `;
        // Add event listener to votes form for Step 3
        const votesForm = document.querySelector('#votes-form');
        votesForm.addEventListener('submit', event => {
          event.preventDefault();
          const voteInput = document.querySelector('#vote-input');
          const voteCount = document.querySelector('#vote-count');
          const newVoteCount = Number(voteCount.textContent) + Number(voteInput.value);
          voteCount.textContent = newVoteCount;
          voteInput.value = '';
        });
      });
  }
  
  // Call fetchCharacters to start the app
  fetchCharacters();