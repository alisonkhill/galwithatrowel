// Validation of e-mail address entered to join e-mail list

const userEmail = prompt("If you'd like to join our mailing list, enter your email address");
const emailConfirm = `<h2>Thank you, ${userEmail} has been added to our mailing list</h2>`;

document.querySelector('main').innerHTML = emailConfirm;
