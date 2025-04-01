let userpin = Number(localStorage.getItem("userpin")); // Retrieve stored user PIN

const users = [
  { name: "karan", pin: 1234, balance: 10000000 },
  { name: "jayraj", pin: 2345, balance: 20000000 },
  { name: "kashyap", pin: 3456, balance: 30000000 },
];

function deposit() {
  let depositInput = document.getElementById("deposit");
  let add_amount = Number(depositInput.value);
  let user = users.find((i) => i.pin === userpin);

  if (!user) {
    alert("Please log in first.");
    return;
  }

  if (depositInput.value.trim() === "" || isNaN(add_amount) || add_amount <= 0) {
    alert("Please enter a valid deposit amount (greater than 0).");
    return;
  }

  user.balance += add_amount;
  alert(`Deposit successful! New balance: ₹${user.balance}`);
  depositInput.value = ""; 
}

function withdraw() {
  let withdrawInput = document.getElementById("withdraw");
  let withdraw_amount = Number(withdrawInput.value);
  let user = users.find((i) => i.pin === userpin);

  if (!user) {
    alert("Please log in first.");
    return;
  }

  if (withdrawInput.value.trim() === "" || isNaN(withdraw_amount) || withdraw_amount <= 0) {
    alert("Please enter a valid withdrawal amount (greater than 0).");
    return;
  }

  if (user.balance < withdraw_amount) {
    alert("Insufficient balance. Please enter a lower amount.");
    return;
  }

  user.balance -= withdraw_amount;
  alert(`Withdrawal successful! New balance: ₹${user.balance}`);
  withdrawInput.value = ""; 
}

function checkBalance() {
  let user = users.find((i) => i.pin === userpin);

  if (!user) {
    alert("Please log in first.");
    return;
  }

  alert(`Your current balance is ₹${user.balance}`);
}

function validPin() {
  let messageElement = document.getElementById("message");
  let pinInput = document.getElementById("pin");
  let inputpin = Number(pinInput.value);

  if (pinInput.value.trim() === "" || isNaN(inputpin)) {
    messageElement.textContent = "Please enter a valid PIN.";
    messageElement.style.color = "red";
    return;
  }

  let user = users.find((user) => user.pin === inputpin);

  if (user) {
    userpin = user.pin;
    localStorage.setItem("userpin", userpin);

    messageElement.textContent = `Welcome, ${user.name}!`;
    messageElement.style.color = "green";

    setTimeout(() => {
      window.location.href = "dashborard.html";
    }, 1000);
  } else {
    messageElement.textContent = "Invalid PIN. Please try again.";
    messageElement.style.color = "red";
  }
}
