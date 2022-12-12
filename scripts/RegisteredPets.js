import { getPets } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("pet")) {

            const [,petPrimaryKey] = itemClicked.id.split("--")

            for (const pet of pets) {
                if (pet.id === parseInt(petPrimaryKey)) {
                    window.alert(`${pet.name} barks at you`)
                }
            }
        }
    }
)





const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

