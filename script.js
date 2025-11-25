const updateNameButton = document.querySelector("#updateNameBtn")
let name = document.querySelector(".profileName")
const updateRoleButton = document.querySelector("#updateRoleBtn")
let role = document.querySelector("#profileRole")
const toggleStatusButton = document.querySelector("#toggleStatusBtn")
const  updateSection = document.querySelector("#updateSection")
const updateInput = document.querySelector("#updateSection input")
const clearTheExisting = document.querySelector(".clear")
const updateInputValueButton = document.querySelector(".replace")

// updateNameButton.addEventListener("click", () =>{
//     // alert('update name button ready to work')
// })

updateNameButton.onclick = () => {
    console.log(updateInput);
    updateSection.style.display = "block"
    const existingName = name.textContent
    console.log(existingName);
    
    updateInput.value= existingName
    console.log(clearTheExisting);

    clearTheExisting.onclick = () => {
        updateInput.value = ""
    }


    updateInputValueButton.onclick = () => {
       const newInputValue =  updateInput.oninput = () => {
            return updateInput.value
        }
        console.log(newInputValue());
        name.textContent = newInputValue()
        updateSection.style.display = "none"
    }   
}

updateRoleButton.onclick = () => {
    updateSection.style.display = "block"
    const existingRole = role.textContent
    console.log(existingRole);
    updateInput.value = existingRole
    clearTheExisting.onclick = () => {
        updateInput.value = ""
    }

    updateInputValueButton.onclick = () => {
        const newInputValue =  updateInput.oninput = () => {
            return updateInput.value
        }
        console.log(newInputValue());
        role.textContent = newInputValue()
        updateSection.style.display = "none"
    }
}