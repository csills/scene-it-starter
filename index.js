$(function(){

    function renderMovies(movieArray) {
		var finalHTML = "";
		movieArray.forEach(function(currentMovie){
			finalHTML += '<div class="card style="width: 18rem";>';
			finalHTML += '<img class="card-img-top" src="' + currentMovie.Poster + '" alt="Movie Poster">';
			finalHTML += '<div class="card-body">';
			finalHTML += '<h5 class="card-title">'+ currentMovie.Title +'</h5>';
			finalHTML += '<p class="card-text">'+ currentMovie.Year +'</p>';
			finalHTML += '<button data-id="'+ currentMovie.imdbID +'" class="btn btn-primary">Add</button>';
			finalHTML += '</div>';
			finalHTML += '</div>';
		});
		return finalHTML;
    }
    
    $("form").submit(function(e){
		e.preventDefault();

		var finalHTML = renderMovies(movieData);
        $('.movies-container').html(finalHTML);

	});

});