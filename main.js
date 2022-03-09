setTimeout(() => {
    console.log("hello");
}, 3500);

let number = prompt("Enter a number");
alert(parseInt(number)+200);

if(confirm("hi")){
    console.log(window.location.href);
}