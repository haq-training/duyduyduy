
  const charactersList = document.getElementById("charactersList");
  const searchBar = document.getElementById("searchBar");

  //console.log(hp);

   function displayCharacters(arr) { 
    const htmlString = arr.map((idx) => {
        const house = idx.house ? idx.house.name : "Unknown";
        return `<li class="character">
      <h2>${idx.name}</h2>
      <p>House:${house} </p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUASweZ8kx0wE6v-3F_nNXzcvvmhbpubkbg&usqp=CAU"></img>
      </li>`;
      })
      .join("");
    charactersList.innerHTML = htmlString;
  };


 fetch("./hp-data.json")
  .then((res) => {
    return res.json();
  })
  .then((ress) => {
    var hp = ress.result.data.chars.nodes;
    displayCharacters(hp);
    searchBar.addEventListener("keyup", (e) => {
      const searching = e.target.value.toLowerCase();
      const select = searching != "" ? (filterCharacter = hp.filter((e) => {
              return e.name.toLowerCase().includes(searching);
            })) : hp;
      displayCharacters(select);
    });
  })
  .catch((err) => {
    console.error(err);
  });
  