
const deleteBtn = document.getElementById("deleteButton");
deleteBtn.addEventListener("click", deleteFunction);

const userText = document.getElementById("inputText");

function deleteFunction()
{
  userText.value="";
}