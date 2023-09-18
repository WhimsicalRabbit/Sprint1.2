function create() {
    let varName = prompt("What's the name of your rabbit?", "Boo-boo keys")
    let varBreed = prompt("What's the breed of your rabbit?", "Blanc de Hotot")
    let varEars = prompt("What type of ears have your rabbit?", "Straight ears")
    let varSize = prompt("What's the size of your rabbit?", "Dwarf")
    let showRabbit = [];

    let rabbit = new RabbitBuilder().setName(varName).
    setBreed(varBreed).
    setEars(varEars).
    setSize(varSize).
    build()

    document.getElementById("info").innerHTML = JSON.stringify(rabbit);
}

function petName() {
    let varName = prompt("What's the name of your rabbit?", "Liberal")

    let rabbit = new RabbitBuilder().setName(varName)

    document.getElementById("info").innerHTML = JSON.stringify(rabbit);
}

function breed() {
    let varBreed = prompt("What's the breed of your rabbit?", "Butterfly")

    let rabbit = new RabbitBuilder().setBreed(varBreed)

    document.getElementById("info").innerHTML = JSON.stringify(rabbit);
}

function ears() {
    let varEars = prompt("What's the ears of your rabbit?", "full lop")

    let rabbit = new RabbitBuilder().setEars(varEars)

    document.getElementById("info").innerHTML = JSON.stringify(rabbit);
}

function size() {
    let varSize = prompt("What's the size of your rabbit?", "medium")

    let rabbit = new RabbitBuilder().setSize(varSize)

    document.getElementById("info").innerHTML = JSON.stringify(rabbit);
}