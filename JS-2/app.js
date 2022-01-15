
do {
    do {
        firstName = prompt('What is your firs name?');
        lastName = prompt('What is your last name?');
        if (firstName == null || firstName == "" || lastName == null || lastName == "") {
            alert("You must enter your name into the prompt box!");
        } else if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
            alert("Please only enter letters");
        } else {
            console.log(firstName + " " + lastName)
        }
    }
    while (firstName == null || firstName == "" || lastName == null || lastName == "" || !/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName));
    correctFullName = confirm("Your Full Name is  " + firstName + " " + lastName + " ?");
}
while (correctFullName == false);

do {
    bdYear = +prompt('Write your birthday year please', 1998);
    currentYear = new Date().getFullYear()
    age = currentYear - bdYear
    if (age < 18) {
        alert('You are less than 18');
    } else if (bdYear == null || bdYear == "") {
        alert("You must enter your birthday year into the prompt box!");
    } else if (!bdYear) {
        alert("You must enter a valid birthday year into the prompt box!");
    } else {
        alert("Hi " + firstName + " " + lastName + ", your age is " + age);
    }

}
while (age < 18 || bdYear == "" || bdYear == null || !bdYear);
