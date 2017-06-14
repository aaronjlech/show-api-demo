//we create a new card each time we execute this function
function createShowCard(showData){
   var showContainer = document.querySelector('.show-container');
   var imageElement = document.createElement('img');
   var titleElement = document.createElement('h3');
   imageElement.src = showData.image.medium;
   titleElement.textContent = showData.name;
   showContainer.appendChild(titleElement);
   showContainer.appendChild(imageElement);
   //showData.summary gives up html as a string log it to see the results
   showContainer.innerHTML += showData.summary;

}

function getShowInfo(show){
   //axios hits the specific route we pass to it to do a get request on that route
   //show is a string value that we can use to search for a specific show
   //$ jQuery and we're executing the get method from jQuery
   $.get('http://api.tvmaze.com/singlesearch/shows?q=' + show).then(function(response){
      //once we get a response we execute the call back function we pass to .then() method
      console.log(response);
      lg
      //we pass the data from maze.api to our create card function
      createShowCard(response)
   })
}
var searchForm = document.querySelector('.search-box');
//adding our event listener to
searchForm.addEventListener('submit', function(event){
   //prevent default stops the form from re routing us
   event.preventDefault();
   var inputVal = searchForm.children[0].value;
   //executing getShowInfo upon submit
   getShowInfo(inputVal)
   searchForm.children[0].value = '';
})


getShowInfo('cops');
