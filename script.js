let expenses = [];
let total = 0;

function addExpense() {
  let title = document.getElementById("title").value;
  let amount = Number(document.getElementById("amount").value);
  let category = document.getElementById("category").value;

  if (title === "" || amount <= 0) {
    alert("Please enter valid details");
    return;
  }

  expenses.push({ title, amount, category });
  renderExpenses();

  // Show popup modal
  let modal = new bootstrap.Modal(document.getElementById('successModal'));
  modal.show();

  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
}

function renderExpenses() {
  let list = document.getElementById("expenseList");
  list.innerHTML = "";
  total = 0;

  expenses.forEach((e, index) => {
    total += e.amount;

    let div = document.createElement("div");
    div.className = "expense-item";

    div.innerHTML = `
      <div>
        <strong>${e.title}</strong><br>
        <small class="text-info">${e.category}</small>
      </div>
      <div>
        ₹${e.amount}
        <button class="btn btn-sm btn-danger ms-2" onclick="deleteExpense(${index})">✕</button>
      </div>
    `;

    list.appendChild(div);
  });

  document.getElementById("total").innerText = total;
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}
