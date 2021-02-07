//Variable Declaration and Get HTML Document:
const searchButton = document.getElementById(`search-button`);
const foodContainer = document.getElementById(`food`);
const warningMsg = document.getElementById(`Error-Msg`);

//Event Listener:
searchButton.addEventListener("click", () => {
  const foodInput = document.getElementById(`food-input`).value;
  foodContainer.innerHTML = "";
  if (foodInput === "") {
    warningMsg.style.display = 'block';
  } else {
    warningMsg.style.display = 'none';
  }
});
