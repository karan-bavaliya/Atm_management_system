let userpin = Number(localStorage.getItem("userpin"));  // Declare userpin globally

const users = [
  { name: "karan", pin: 1234, balance: 10000000 },
  { name: "jayraj", pin: 2345, balance: 20000000 },
  { name: "kashyap", pin: 3456, balance: 30000000 },
];

function deposit() {
  let add_amout = Number(document.getElementById("deposit").value); // Get deposit amount
  if (!userpin) {
    alert("Please log in first.");
    return;
  }
  let user = users.find((i) => i.pin === userpin);
    user.balance += add_amout;
    alert(`Deposit successful! New balance: ₹${user.balance}`);
}
function withdraw(){
  let withdraw_amout =Number(document.getElementById("withdraw").value);
  let user = users.find((i) => i.pin === userpin);
  if(user.balance >= withdraw_amout){
    user.balance -= withdraw_amout;
    alert(`withdrow successful! new Balance:₹${user.balance}` )
  }
  else{
    alert("insuffiest amount")
  }
}
function checkBalance(){
  let user = users.find((i) => i.pin === userpin);
  alert(`your current balance is ${user.balance}`)
}

function validPin() {
  let messageElement = document.getElementById("message");
  let inputpin = Number(document.getElementById("pin").value);

  // Find the user by PIN
  let user = users.find((user) => user.pin === inputpin);

  if (user) {
    // Successfully found the user, store the userpin in localStorage and in the global variable
    userpin = user.pin;
     localStorage.setItem("userpin", userpin);

    messageElement.textContent = `Welcome, ${user.name}!`;
    messageElement.style.color = "green";

    // Show deposit section after successful login (here I assume you show the deposit section right away)
    setTimeout(() => {
      window.location.href = "dashborard.html";
    });
  } else {
    messageElement.textContent = "Invalid PIN. Please try again.";
    messageElement.style.color = "red";
  }
}



