var listbox;
let numcard = 0;
var findnum = "/d+";
var count = 0;
function RandomNumber(min, max) {
    // return Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(Math.random() * (max - min + 1));
}
function action(item){
    // console.log(item);
    item.classList.remove("box");
    item.classList.add("box-deleted");
    textnum = item.id;
    console.log(textnum + " " + typeof(textnum));
    textnum = textnum.match(/\d+/g);
    console.log(textnum);
    //Lose
    if(parseInt(textnum) == numcard){
        alert("Haz Perdido :c");
        reset();
        console.log("Número Impostor: "+numcard);
    }
    //Winner
    else{
        count++;
        console.log("Cont click: "+count);
        if(count == 8){
            alert("Felicidades, ganaste!");
            reset();
            console.log("Número Impostor: "+numcard);
        }
    }
}
function main(){
    numcard = RandomNumber(1,8);
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
    numcard = RandomNumber(1,8);
    count = 0;
    console.clear();
}
main();
