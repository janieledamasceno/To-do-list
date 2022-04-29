class addTask {
    addproperty() {
        event.preventDefault()
        let addTaskonList = document.querySelector("input[name='task']").value
        let pElement = document.createElement("p")
        let propertyInfo = addTaskonList
        let buttonToRemove = this.createRemoveButton()
        pElement.innerHTML += propertyInfo
        pElement.appendChild(buttonToRemove)
        let check = this.createCheck()

        pElement.appendChild(check)
        document.querySelector(".todo").appendChild(pElement)
    }

    createRemoveButton() {
        let buttonToRemove = document.createElement("button")
        buttonToRemove.setAttribute("onclick", "app.remove()")
        buttonToRemove.innerText = "remover"

        return buttonToRemove
    }

    createCheck() {
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"

        return checkbox
    }

    remove() {
        let pToRemove = event.target.parentNode
        document.querySelector(".todo").removeChild(pToRemove)
    }
}
const app = new addTask