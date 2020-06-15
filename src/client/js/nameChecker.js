export function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou",
        "Ewa"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}
