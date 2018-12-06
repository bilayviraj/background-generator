var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

const array = [
	{
	  username: "john",
	  team: "red",
	  score: 5,
	  items: ["ball", "book", "pen"]
	},
	{
	  username: "becky",
	  team: "blue",
	  score: 10,
	  items: ["tape", "backpack", "pen"]
	},
	{
	  username: "susy",
	  team: "red",
	  score: 55,
	  items: ["ball", "eraser", "pen"]
	},
	{
	  username: "tyson",
	  team: "green",
	  score: 1,
	  items: ["book", "pen"]
	},
  
  ];

  const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);
