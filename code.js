var listbox;
let numcard = 0;
var findnum = "/d+";
let count = 0;
function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function action(item){
    // console.log(item);
    item.classList.remove("box");
    item.classList.add("box-deleted");
    textnum = item.id;
    console.log(textnum + " " + typeof(textnum));
    textnum = textnum.match(/\d+/g);
    console.log(textnum);
    if(parseInt(textnum) == numcard){
        alert("Haz Perdido :c");
        reset();
        numcard = RandomNumber(1,10);
        console.log("Número Impostor: "+numcard);
    }
    else{
        count++;
        console.log("Cont click: "+count);
        if(count == 8){
            alert("Felicidades, ganaste!");
            reset();
            numcard = RandomNumber(1,10);
            console.log("Número Impostor: "+numcard);
        }
    }
}
function main(){
    numcard = RandomNumber(1,10);
    console.log("Número Impostor: "+numcard);
    listbox = document.querySelectorAll(".box");
    console.log(listbox);
    listbox.forEach(item => {
        item.setAttribute("onclick", "action(this)");
    })
    
}
function reset(){
    listbox = document.querySelectorAll(".container__boxes > div");
    listbox.forEach(item => {
        item.classList.remove("box-deleted");
        item.classList.add("box");
        
    })
    console.clear();
}
main();