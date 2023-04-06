fetch('https://isro.vercel.app/api/spacecrafts')
.then((data) => {
    return data.json();  
}).then((objectData) => {
    console.log(objectData);
    let space = "";
    objectData.map((ele) => {
        space = `<h1>${ele.spacecrafts[0]}</h1>`;
    });
    document.getElementById('isro').innerHTML = space
})
