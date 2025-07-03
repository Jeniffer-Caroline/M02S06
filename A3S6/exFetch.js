function teste(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) =>{
        console.log(response);
    })
    .then((json) => {
       return console.log(json);

});
}
teste();