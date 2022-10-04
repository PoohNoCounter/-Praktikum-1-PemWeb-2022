const grade = (nilai) => {
    if (nilai >= 80) {
        return "A"
    } else if (nilai < 80 && nilai >= 70){
        return "AB"
    } else if (nilai < 70 && nilai >= 60){
        return "B"
    } else if (nilai < 60 && nilai >= 50){
        return "BC"
    } else if (nilai < 50 && nilai >= 40){
        return "C"
    } else if (nilai < 40 && nilai >= 10){
        return "D"
    } else{
        return "E"
    }
}


let table = document.getElementById("table")
let data = table.rows

for (let i = 1; i < data.length; i++) {
    const element = data[i].cells;

    element[4].innerHTML = grade(element[3].innerHTML)
}