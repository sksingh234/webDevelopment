let req = prompt("Enter your request(quit, add, delete & list).")
let list = [];

while(true){
    if(req == "quit"){
        console.log("quitting app.");
        break;
    }

    if(req == "list"){
        console.log("----------------");
        for(let i = 0; i < list.length; i++){
            console.log(i, list[i]);
        }
        console.log("----------------");
        req = prompt("Enter your request(quit, add, delete & list).");
    }

    else if(req == "add"){
        let addingTask = prompt("enter the task you want to add.");
        list.push(addingTask);
        console.log("task added.");
        req = prompt("Enter your request(quit, add, delete & list).");
    }
    else if(req == "delete"){
        let deletingIdx = prompt("enter the index number you want to delete.");
        list.splice(deletingIdx,1);
        console.log("task deleted");
        req = prompt("Enter your request(quit, add, delete & list).");
    }
    else{
        req = prompt("Wrong command.Enter your request again(quit, add, delete & list).");
    }
}