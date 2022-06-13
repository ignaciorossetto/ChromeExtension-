
let myLeads = []

const inputBtn = document.getElementById("input-btn")
const delBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("items-el")
const tabBtn = document.getElementById("tab-btn")

// const exerciseEl = document.getElementById("exercise")
// const exerciseEl2 = document.getElementById("exercise2")
// const btnEl = document.getElementById("hola")


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    printUl(myLeads)
}


delBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    printUl(myLeads)
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url)
        inputEl.value = tabs[0].url
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        printUl()
    })
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    printUl(myLeads)
})





function printUl(leads) {

    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // esto se llama TEMPLATE STRING/LITERALS, SE ESCRIBE COMO HTML
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
                </a>
            </li>
        `
        
        }
        // this is a method to do the same as above, larger, but the same...
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // listEl.append(li)  
    listEl.innerHTML = listItems
}



// function congrats() {
//     exerciseEl.innerHTML += "<p>" + "Thanks for buying" + "</p>"
// }


// exerciseEl.innerHTML = '<button id="hola" onclick="congrats()">' + "Buy" + "</button>"

// const recipient = "James"
// const sender = "Nacho"

// exerciseEl2.innerHTML = `
//     <p>Hey ${recipient}! <br><br> How is it going? <br><br> Cheers Per ${sender} </p>
// `

// let stringStorage = JSON.stringify(myLeads)
// console.log(stringStorage)

// let aa = localStorage.setItem("Array", myLeads)
// let bb = localStorage.getItem("Array")
// console.log(bb)

// let arrayStorage = JSON.parse(stringStorage)
// console.log(arrayStorage)

// console.log(typeof arrayStorage)

// localStorage.clear()

