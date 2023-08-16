const form = document.getElementsByTagName("form")[0];
const output = document.getElementsByTagName("ul")[0];

function addTask(e) {
  e.preventDefault();
  const taskValue = form[0].value;
  output.innerHTML = `<li>
    <p>${taskValue}</p>
    <div>
      <button class="done"></button>
      <button class="delete">Delete</button>
    </div>
  </li>`;
}
form.addEventListener("submit", addTask);
