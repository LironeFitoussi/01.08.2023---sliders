// // 1
// let workerInfo;

// document.querySelector("#getDepartment").addEventListener("click", () => {
//     workerInfo = {
//         department: document.querySelector("#department").value,
//         numOfWorkers: document.querySelector("#numOfWorkers").value,
//         supervisor: document.querySelector("#supervisor").value
//     }

//     console.log(workerInfo);
// });

// 2
const departmentsArray = [];
let count = 0
let newDepartment = {}
document.querySelector("#addDepartment").addEventListener("click", (e) => {
    e.preventDefault();
    if (count <= 3) {
        count++
        newDepartment = {
            department: document.querySelector("#department").value,
            numOfWorkers: document.querySelector("#numOfWorkers").value,
            supervisor: document.querySelector("#supervisor").value
        }
        departmentsArray.push(newDepartment);
        document.querySelector("#department").value = ``
        document.querySelector("#numOfWorkers").value = ``
        document.querySelector("#supervisor").value = ``

        if (count == 3) {
            document.querySelector("#addDepartment").disabled = true;
            document.querySelector("#printEachDepartment").disabled = false;
            console.log(departmentsArray);
        }
    }    
});

document.querySelector("#printEachDepartment").addEventListener("click", (e) => {
    e.preventDefault();
    for (const department of departmentsArray) {
        console.log(department);
    }

});

document.querySelector("#printEachDepartment").addEventListener("click", () => {
    setTimeout(() => {location.reload()}, "4000")
});