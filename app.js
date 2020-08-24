//Adding token for generic client dominant colors Ximilar
//const generic_client_token = "Token:1b6a7d6d2a0595c6e621b1ac31e87961368f499f";

const setColors = function(colorArr) {
    //TODO
    //Go over colors array
    //Set each color to the coordinating divs background
};


//Helper Function to make a Fetch request to the Dominant Colors API to send client image and receive back dominant colors
let getPallete = function() {
    const colors = fetch("https://api.ximilar.com/dom_colors/generic/v2/dominantcolor", {
        method: "POST",
        headers: {
          Authorization: "Token 1b6a7d6d2a0595c6e621b1ac31e87961368f499f",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(colors => console.log(colors.records[0]._dominant_colors))
      .catch((err) => {
        console.log(err, );
      });
    console.log(colors.body);
}

//Handler for when user uploads an image
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');  // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            img.onload = imageIsLoaded;
            getPallete(img.src)
        }
    });
});
  
//Alert handler to check source of uploaded image
//---->TODO: Take away once service is working properly--------------//<
function imageIsLoaded() { 
  alert(this.src);  // blob url
  // update width and height ...
}

const data = {
  'color_names': true,
  'records': [{
      '_url': 'https://i.imgur.com/kg7nc73.jpg'
  }]  
};



 