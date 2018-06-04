//alert("This is working!");
//var ageAsString = prompt("What is your age?", "Write age here!");
//var age = Number(ageAsString);
$(document).ready(function() {
    function toggleSidebar() {
        $(".button").toggleClass("active");
        $("main").toggleClass("move-to-left");
        $(".sidebar-item").toggleClass("active");
    }

    $(".button").on("click tap", function() {
        toggleSidebar();
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
        toggleSidebar();
        }
    });  
});

/*
//SWITCH STATEMENT
switch (animal) {
    case "cat":
        alert("meow");
        break;
    case "dog":
        alert("woof");
        break;
    case "hose":
        alert("ney bitch");
        break;
    default:
        alert("idk this animal");
        break;
}
*/

//FOR STATEMENT
/*
for (var counter = 1; counter < age; counter++){
    string += "Happy Birthday \n";
    if (counter % 7 == 0) {
        break;
    }
}
alert(string);
*/

//WHILE STATEMENTS
/*
while (age > 0) {
    string += "Happy Birthday \n";
    // or string = string + "hpd \n"
    age = age - 1;
    //or age -= 1;
}
alert(string);
*/
// or var age = Number(prompt("What is your age? ",""));
//FOR STATEMENTS
/*
if (age < 40) {
    alert("Your young af");
} else if (age == 40) {
    alert("congrats your 40!")
    
} else {
    alert("Dam your old");
}
*/
//alert("Thank You!");