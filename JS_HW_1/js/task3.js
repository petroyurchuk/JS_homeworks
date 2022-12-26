const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let enteredPassword = prompt("Enter password");

if (enteredPassword === null) {
  message = "Скасовано користувачем!";
} else if (enteredPassword === ADMIN_PASSWORD) {
  message = "Ласкаво просимо!";
} else {
  message = "Доступ заборонений, невірний пароль!";
}
alert(message);
