// // fetch(`https://isro.vercel.app/api/spacecrafts`)


fetch("https://isro.vercel.app/api/spacecrafts")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data)
    displaySpace(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));


  function displaySpace(data){
    const space = data.spacecrafts[4]
    const spaceDiv = document.getElementById("space");
    const spaceName = space.name
    const heading = document.createElement("ul");
    heading.innerHTML = spaceName;
    spaceDiv.appendChild(heading);
  }
