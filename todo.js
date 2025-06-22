
var row = null


function Submit(event){
    event.preventDefault()
    var msg = document.getElementById("msg")
    let newData = retrieveData()
    let readData = readDataFromLocalStorage(newData)
    if(newData == false){
        msg.innerText = "fill all data";
    }
    else{
        if(row == null){
            insert(readData)
            msg.innerHTML = "data Inserted";
        }else{
            update()
            msg.innerText = "data Updated";
        }
    }
    document.getElementById("form").reset();
}

function retrieveData(){

    let title = document.getElementById("title").value.trim();
    let content = document.getElementById("ta").value.trim();

    let arr = [title, content];
    if(arr.includes("")){
        return false;
    }else{
        return arr;
    }
}

//read

function readDataFromLocalStorage(data){
    let t1 = localStorage.setItem("Title",data[0])
    let t2 = localStorage.setItem("Content",data[1])

    let v1 = localStorage.getItem("Title",t1)
    let v2 = localStorage.getItem("Content",t2)

    return [v1,v2];
}

//create

function insert(data){
    let table = document.getElementById("table")
    let row = table.insertRow()
    row.insertCell().innerHTML = data[0];
    row.insertCell().innerHTML = data[1];
    row.insertCell().innerHTML = `<button onclick=edit(this)>Edit</button><button onclick=remove(this)>Delete</button>`;
}


//edit
function edit(td){
    row = td.parentElement.parentElement;
    document.getElementById("title").value = row.cells[0].innerHTML;
    document.getElementById("ta").value = row.cells[1].innerHTML;
}

//update
function update(){
    row.cells[0].innerHTML = document.getElementById("title").value;
    row.cells[1].innerHTML = document.getElementById("ta").value;
    row = null;
}

//delete
function remove(td){
    let ans = confirm("Are you wanna delete this row?")
    if(ans == true){
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex)
        msg.innerHTML = "data deleted";
    }
}





