//https://www.youtube.com/watch?v=wxz5vJ1BWrc
const charactersList = document.getElementById("charactersList");
let hpCharacters = [];
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  const filteredCharacters = hpCharacters.filter((character) => {
    return (
      character.title.includes(searchString) ||
      character.desc.includes(searchString)
    );
  });
  displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
  try {
    hpCharacters = [
      {
        title: "New Zucchini Slice",
        desc:
          "The zucchini slice that first appeared in delicious. magazine in 2003 has always been a taste.com.au favourite. This is the updated 2015 version.",
        image: "images/new-zucchini-slice.jpeg",
        page: "recent/new-zucchini-slice.html"
      },
      {
        title: "Moroccan quail with rose-petal sauce and cucumber relish",
        desc:
          "Treat the one you love to a gourmet meal this Valentine's day. This spicy quail is accompanied by a refreshing cucumber relish",
        image: "images/moroccan-quail.jpeg",
        page: "recent/moroccan-quail.html"
      },
      {
        title: "Boned and rolled turkey breast",
        desc:
          "This rolled and stuffed turkey makes for a perfect centrepiece and an alternative to the huge Christmas turkey. Serve with a variety of colourful vegetable sides",
        image: "images/turkey.jpeg",
        page: "recent/turkey.html"
      }
    ];
    //displayCharacters(hpCharacters);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `
            <li class="character">
                <div class="card">
                  <div class="card-body">
                      <h2><a href="${character.page}">${character.title}</h2>                      
                  </div>
                </div>
                
                               
            </li>
        `;
    })
    .join("");
  charactersList.innerHTML = htmlString;
};

loadCharacters();
