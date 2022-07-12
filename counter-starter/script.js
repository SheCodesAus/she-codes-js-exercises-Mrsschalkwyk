function add(value) {
    let counter = document.getElementById('number')
    let newValue = parseInt(counter.innerHTML) + value

    counter.innerHTML = newValue
    console.log("its working", newValue);
    
}

