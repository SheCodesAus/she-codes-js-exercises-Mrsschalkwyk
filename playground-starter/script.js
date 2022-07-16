console.log("Hello, world!");
function showName() {
    let inputField = document.getElementById("name-text")
    console.log("The inputField is this: woof", inputField)
    // alert("Hello Jenna")
    alert(" Hello " + inputField.value)
}
    // console.dir(#Name#) this is to view your javascript in 
    // your console in the DOM it will show you everyting that you need to know
// CTRL + D select multipul words
    // pets.length = get the length of the Array
    for (let index = 0; index < pets.length; index++) {
        console.log("Found Pet:" , pets[index]);
        // }

    let pets = ["Chilli", "Rex", "Roary", "Fleur","Bella"];
    // pets.push('Bella')
    // pets.pop()
    // pets.slice()
    // console.log("Found Pet:" , index);
    // pets.push("Ivy");
    // console.log(pets);
    // console.log(pets[0]);
    // console.log(pets[3]);


    // || mean this or that
    pets.forEach((pets) => {
        if (pet== "Bella") {
            console.log("OMG so cute.");}

        else if (pet== "Chilli") { 
                console.log("OMG so cute.");
        }
        else{
            console.log("OMG so cute.");
        }
    
    })

