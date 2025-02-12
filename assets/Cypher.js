function checkPass(code) {

    let x = document.getElementById("password-input")

    let store = ""

    for (let i = 0; i < x.value.length; i++) {
        store += x.value.charCodeAt(i).toString()

        while (store.length % 3 != 0) {
            store = "0" + store;
        }

    }


    if (code == store.toString()) {
        return true
    }
    else {
        false;
    }
}


function setPass(input) {
    

    store = ""

    for (i = 0; i < input.length; i++) {
        console.log(input.charCodeAt(i).toString())
        store += input.charCodeAt(i).toString()

        while (store.length % 3 != 0) {
            store = "0" + store;
            console.log(store)
        }

    }


    return store
}

console.log(setPass("Meep123"))