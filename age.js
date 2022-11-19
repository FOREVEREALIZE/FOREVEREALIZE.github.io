const birth = new Date(2009, 10, 8, 19, 15)
const millisToYears = 1000 * 60 * 60 * 24 * 365.25

function updateAge() {
    const currentDate = new Date()

    const diff = currentDate - birth
    const years = diff / millisToYears

    $("#age").text(years.toFixed(9))

    setTimeout(updateAge, 10)
}

window.addEventListener("DOMContentLoaded", updateAge)