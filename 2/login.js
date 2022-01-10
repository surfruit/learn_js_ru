let login = prompt('Enter your login', '');
if (login === "admin") {
    let password = prompt('Enter your password', '');
    if (password === "main") {
        alert(`Hello ${login}`);
    } else if (password === "cancel") {
        alert('Cancelled');
    } else {
        alert('Wrong password');
    }
} else if (login === "cancel") {
    alert('Cancelled');
} else {
    alert('I dont know who are you');
}