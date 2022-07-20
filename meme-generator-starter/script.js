function getImage() {

    //take url from text box
    let imageURL = document.getElementById('image-url').value;

    // create new image elemnt
    let imageBox = document.createElement('img');

    //sets id and url(src) for new image
    imageBox.id ='meme-image';
    imageBox.src = imageURL;

    //select img wrapper/list
    let wrapper = document.getElementById ('meme-image-wrapper');

    //delete all contents of
    document.getElementById('meme-image-wrapper').innerHTML = ""

    //add new img to existing img wrapper
    wrapper.appendChild(imageBox);

    //unhide meme builder
    document.getElementById("meme-builder").style.display = "block";



}

function addTopText(){
    let topText = document.getElementById("top-text-input").value;
    document.getElementById("top-text".innerText = topText);

}

