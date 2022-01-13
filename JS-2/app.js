// check first and last name
do {
    firstName = prompt('What is your firs name?');
    lastName = prompt('What is your last name?');
    correctFullName = confirm("Your Full Name is  " + firstName + " " + lastName + " ?")
}
while (correctFullName == false);

// check age and alert the result

do {
    bdYear = prompt('Write your birthday year please', 1998);
    age = 2022 - bdYear
    if (age < 18) {
        alert('You are less than 18')
    } else {
        alert("Hi " + firstName + " " + lastName + ", your age is " + age);
    }
}
while (age < 18);