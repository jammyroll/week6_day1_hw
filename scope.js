const name = "Jill"



const secretsFunction = function(){
    const pinCode = [0,0,0,0];
    console.log("Inside secrets function", name)
}

const filterdNames = function(names,letter){
    const filterNames = [];
    for (const name of names){
        if (name[0] == letter){
            filterNames.push(name)
        }
    }
    return filterNames
}

const students = ["Alice", "Bob", 'Helios',"Kratos","Athena"];
const filteredStudents = filterdNames(students,'A')
console.log(filteredStudents);