while (age = prompt('How old are you?', 1)) {
    if (age <= 0)
        alert("enter a valid age")
    else if (age >= 1 && age <= 10)
        alert("Child");
    else if (age >= 11 && age <= 18)
        alert("Teenager");
    else if (age >= 19 && age <= 50)
        alert("Grown");
    else if (age > 50)
        alert("Old");
}

