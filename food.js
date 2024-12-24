const handleSearch = async () => {
  const searchField = document.getElementById("search-field").value;
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchField}`
  );
  const foods = await res.json();
  if (searchField.length == 0) {
      const error = document.getElementById("error")
      error.classList.remove("hidden");
      return;
  } else {
      displayFood(foods.meals);
      error.innerText = "";
  }
  document.getElementById("search-title").classList.remove("hidden");
  document.getElementById(
    "search-text"
    ).innerText = `${foodsLength} foods found`;
      const searchText = document.getElementById("search-field").value;
    if (!searchField.length == 0) {
        const capitalizedText =
          searchText.charAt(0).toUpperCase() + searchText.slice(1);
        document.getElementById("heading-text").innerText = capitalizedText;
    }
};

let foodsLength = "";
console.log(foodsLength);
const displayFood = (foods) => {
  foodsLength = foods.length;
  console.log(foods);
  const foodContainer = document.getElementById("food-container");
  foodContainer.innerHTML = "";
  foods.forEach((food) => {
    console.log(food);
    const { strMeal: name, strMealThumb: image, strCategory, strArea } = food;
    const foodCard = document.createElement("div");
    foodCard.classList =
      "border border-purple-400 p-4 rounded-lg hover:shadow-xl";
    foodCard.innerHTML = `
            <div class="">
                <img src=${image} class="rounded-lg" alt=${name + "image"} />
                <h2 class="text-xl font-bold text-center">${name}</h2>
                <p class="text-center"><span class="font-medium">${strArea}</span> dish</p>
                <p class="text-center">Belong to <span class="font-medium">${strCategory}</span> category</p>
                <button class="bg-purple-600 text-white font-bold px-4 py-1 w-full rounded hover:rounded-full hover:bg-purple-400">View Full Recipe</button>
            </div>
        `;
    foodContainer.appendChild(foodCard);
  });
};

const loadFood = async (meals) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`
  );
  const foods = await res.json();
  displayFood(foods.meals);
};
loadFood("");
