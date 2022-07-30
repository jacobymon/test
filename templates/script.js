
//     //code to allow my text box to use tab
//     document.getElementById('text').addEventListener('keydown', function(c) {
// if (c.key == 'Tab') {
// c.preventDefault();
// var start = this.selectionStart;
// var end = this.selectionEnd;
// console.log('start: ', start)
// console.log('end: ', end)

// // set textarea value to: text before caret + tab + text after caret
// this.value = this.value.substring(0, start) +
// "\t" +  this.value.substring(end);

// console.log(this.value)
// this.value = this.value
// console.log(this.value)

// // put caret at right position again
// this.selectionStart =
//   this.selectionEnd = start + 1;
// }
// });


var editor = ace.edit('text')
// editor.renderer.setShowGutter(false)
// editor.setTheme('ace/theme/chrome')
// editor.getSession().setMode('ace/mode/python')
// editor.getSession().setTabsize(2)
// editor.getSession().setUseSoftTabs(true)
// document.ace_editor = editor
// editor.$blockScrolling = Infinity
// setupKey(editor)
// startCursor(editor, 'python')
var textarea = $('textarea[name="text"]').hide();
editor.getSession().setValue(textarea.val());
editor.getSession().on('change', function(){
  textarea.val(editor.getSession().getValue());
});






fetch('http://127.0.0.1:5000/banana8', { //fetches from a page that has the muddBat2.json data on it
    method: "POST",
    // body: formData //updates the url that we fetching so that we can get the data we want!
})
.then(function (response) {
    return response.text();
})
.then(function (data){
    dataj = JSON.parse(data)

    

    const problemName = document.getElementById('testName') //gets the name of the problem from the value of the submit button
    console.log(problemName)
    
    const problemNameText = "dataj." +  problemName.innerText //concatenates the string in which to eval for our json directory
    console.log(problemNameText)
    console.log("start ", eval(problemNameText).name, "end")
    const problemFinder = eval(problemNameText)

    //give the input value the name of the problem
    document.getElementById('problemName').value = document.getElementById('testName').innerText

    //display of the instructions
    document.getElementById('instructions').innerHTML = problemFinder.instructions

    //display of the function definition
    //uncomment everything until the next uncomment mark
//     document.getElementById('text').innerHTML = problemFinder.funcDef

//     console.log(document.getElementById('hint1').innerText == '')
//     //display of the hints
//     const hints = document.getElementById('hints')
//     hints.addEventListener('click', (event) => {
//         for(var l = 0; l < problemFinder.hints.length; l++){
//         hintId = "hint" + String(l + 1)
//         document.getElementById(hintId).innerHTML = problemFinder.hints[l]
        
        
//     }
//     if (document.getElementById('hint1').innerText == '') {
//         document.getElementById('hint1').innerHTML = "No hints provided."
//     }
//     })

    
   

//     console.log("this is the json object ", dataj.TwoInput)
//     // document.getElementById("problemName").innerHTML = problemFinder.name //we don't need this anymore DELETE ME
//     console.log(problemFinder.originalIn.length)
//     var table = document.getElementById("myTable")
    
//     for(var i = 0; i < problemFinder.originalIn.length; i++){ //right now there are only 5 input boxes displayed, but in the future create an add input button some how.
//         id = "value" + String(i + 1)
//         console.log(id)
//         names = "name" + String(i + 1)
//         values = problemFinder.in[i]
//         StarterValues = problemFinder.originalIn[i]



//         console.log(values)


//         var inputCols = `<tr>
//                         <td>
//                             <input type=text name=${names} id= ${id} value="${StarterValues}">
//                         </td>
//                         </tr>
//                         `

//         table.innerHTML+=inputCols

//     }
// const mydata = document.getElementById('form');
// mydata.addEventListener('submit', function(updateJSON){


// var value1 = document.getElementById("value1").value //this block can be turned into a for loop
// var value2 = document.getElementById("value2").value
// var value3 = document.getElementById("value3").value
// var value4 = document.getElementById("value4").value
// var value5 = document.getElementById("value5").value
// console.log("This is value1: " + value1)

// if (value1 != "" && value2 != "" && value3 !="" && value4!="" && value5!="") {//can be turned into a for loop
//     while (problemFinder.in != ""){ //remove all the data originally in dataj.in
//         problemFinder.in.pop()
//     }
// // dataj.in.pop().pop().pop().pop().pop()
// problemFinder.in.push(value1, value2, value3, value4, value5) //add the new values! this can be turned into a for loop later
//     console.log("The value for correctFunc is: " + problemFinder.correctFunc)
//     datas = JSON.stringify(dataj)
//     console.log(datas)
//     document.getElementById("json").value = datas
// }
// })
// })
// .catch(function(error) {
//     console.error(error);
// })


// // figure out why this block is necessary
// const mydata = document.getElementById('form');
// mydata.addEventListener('submit', function(e) {
// e.preventDefault(); //prevents the Submit button from submitting a form
// const formData= new FormData(mydata); //used to send the form data
// // fetch('http://127.0.0.1:5000/banana9', {
// //     method: "POST",
// //     body: formData //updates the url that we fetching so that we can get the data we want!
// // })
// // .then(function (response) {
// //     return response.text();
// // })
// // .then(function (data){

// //     // console.log(data)

// // })
// // .catch(function(error) {
// //     console.error(error);
// // })
// })

// // function that handles adding the column of userOutputs to the table.
//     const addYourOutputsCol = () => {
//         mydata.addEventListener('submit', function(e) {
// e.preventDefault(); //prevents the Submit button from submitting a form
// const formData= new FormData(mydata); //used to send the form data
// fetch('http://127.0.0.1:5000/banana9', { //fetch the JSON data from the page with the added in and out values
//     method: "POST",
//     body: formData //updates the url that we fetching so that we can get the data we want!
// })
// .then(function (response) {
//     return response.text();
// })
// .then(function (data){
//     console.log(data)
//     newJ = JSON.parse(data)


//     const problemName = document.getElementById('testName') //gets the name of the problem from the value of the submit button
//     console.log("the name of the problem is: ", problemName.innerText)

//     const problemNameText = "newJ." +  problemName.innerText //concatenates the string in which to eval for our json directory
//     console.log("start ", eval(problemNameText).out, "end")
//     const problemFinder = eval(problemNameText)
//     console.log("the problemFinder is: ", problemFinder)

//     err = problemFinder.error[0]
//     console.log("the err is: ", err == undefined)
//     if (err != undefined){
//         document.getElementById('error').innerHTML = err

//     }else{
//         document.getElementById('error').innerHTML = ""
//     }


//     var table = document.getElementById("myTable")


//     //for loop to add the userOutputs column
//     for (const [i, row] of [...document.querySelectorAll('#myTable tr')].entries()) { //iterates through each row and adds a column
//         console.log(i)
        
//         console.log(problemFinder.out[i])
//         userOutput = problemFinder.out[i] // stores the ith userOutput value in a variable using JSON 

        
//         const test = document.createElement("div") //create a div element to add as the column
//         const newContent = document.createTextNode(userOutput) //sets a constant to store the userOutput value during each iteration
//         test.appendChild(newContent) //puts the corresponding userOutput as the content inside the div
//         const cell = document.createElement(i ? "td" : "td") //creates a new cell in the table
//         cell.appendChild(test) //appends the data from test into the newly created cell
//         console.log("test is: ", test)
//         console.log("the cell is: ", cell)
//         var colCount = document.getElementById('myTable').rows[i].cells.length
//         console.log("the number of cells in this row is", colCount)
//         row.appendChild(cell)// appends the cell with it's data into the row creating a column
        
//         //deals with adjusting the table when the button is clicked multiple times
//         console.log("the Row is: ", row)
//         if(colCount>2){
//             cell.remove()
//             cell.remove()
//             cell.remove()
//             cell.remove()
//             console.log("The cell before is: ", cell)
//             cell.appendChild(test)
//             // console.log("the deleted cell will be", row.deleteCell())
//             row.deleteCell(1)
//             row.deleteCell(1)
//             row.deleteCell(1)
//             console.log("the Row is: ", row)
//             row.appendChild(cell)

//             console.log("The cell after is: ", cell)
//             console.log(myTable)
//         }

        
        

//     };

//     //add the expected outputs column
//     for (const [i, row] of [...document.querySelectorAll('#myTable tr')].entries()) { //iterates through each row and adds a column
//         console.log(i)
        
//         expected = problemFinder.expected[i]
//         console.log("expected values: ", expected)

        
//         const test = document.createElement("div") //create a div element to add as the column
//         const newContent = document.createTextNode(expected) //sets a constant to store the userOutput value during each iteration
//         test.appendChild(newContent) //puts the corresponding userOutput as the content inside the div
//         const cell = document.createElement(i ? "td" : "td") //creates a new cell in the table
//         cell.appendChild(test) //appends the data from test into the newly created cell
//         console.log("test is: ", test)
//         console.log("the cell is: ", cell)
//         var colCount = document.getElementById('myTable').rows[i].cells.length
//         console.log("the number of cells in this row is", colCount)
//         row.appendChild(cell)// appends the cell with it's data into the row creating a column

//     };

//     //add the checking column
//     for (const [i, row] of [...document.querySelectorAll('#myTable tr')].entries()) { //iterates through each row and adds a column

        
//         const test = document.createElement("div") //create a div element to add as the column
//         test.id = "check" + String(i + 1)
//         console.log("the Check id is: ", test.id)
//         const cell = document.createElement(i ? "td" : "td") //creates a new cell in the table
//         cell.appendChild(test) //appends the data from test into the newly created cell
//         row.appendChild(cell)// appends the cell with it's data into the row creating a column

//     };

//     for (var j = 0, newRow; newRow = myTable.rows[j]; j++) {
//         console.log("test1: ", newRow.cells[2] )
//         currentCheckId= "check" + String(j + 1)
//         console.log("One is : ", newRow.cells[1].innerText)
//         console.log("two is: ", newRow.cells[2].innerText)
//         console.log(newRow.cells[1].innerText == newRow.cells[2].innerText)
//         if(newRow.cells[1].innerText == newRow.cells[2].innerText) {
//             document.getElementById(currentCheckId).innerHTML = "Correct"
//         }else{
//             document.getElementById(currentCheckId).innerHTML = "Incorrect"
//         }

//             for (var k = 0, col; col = newRow.cells[k]; k++){
//                 console.log("test: ", newRow.cells[k])
//             }
//         }
// })
// .catch(function(error) {
//     console.error(error);
// })
// }
// , {once : true})
    
//     }
    
// // mydata.addEventListener('submit', addColumn)
// var submitButton = document.getElementById('submit')
// // if ()
// submitButton.onclick = addYourOutputsCol //perform addColumn one the submit button is clicked
})
// .catch(function(error) {
//     console.error(error);
// })
//delete the code uncommented code above
//end of uncomment
