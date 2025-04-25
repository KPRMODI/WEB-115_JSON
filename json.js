let submit = document.getElementById("submit")
let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let course = document.getElementById("course")
let sectionname = document.getElementById("sectionname")
let role = document.getElementById("role")

let person = {}

submit.addEventListener("click", () =>  {
    person.firstname = firstname.value
    person.lastname = lastname.value
    person.course = course.value
    person.sectionname = sectionname.value
    person.role = role.value

    console.log("Person Object: ")

    console.log(person)

    console.log("")

    console.log("JSON format: ")

    let x = JSON.stringify(person)
    console.log(x) })