console.log ("page loaded")


//https://www.google.com/search?q=hello

const handleButtonClicked = () => {
    console.log ("button clicked");
    const textBoxEl = document.getElementById("search-text");
   
    
    const baseUrl = "https://www.google.com/search?q="
    const searchText = textBoxEl.value.replaceAll(" ", "+")
    window.location.assign(baseUrl+searchText);
}


