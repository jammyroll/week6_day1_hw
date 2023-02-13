const movie = {
title: "It's a wonderful life", year : 1946, language : 'Spanish'
};

movie.cast = ["James Stewart", "Donna Reid"];
// console.log(movie);
// movie.subtitle-language = "German"
movie['subtitle-language'] = "German";
// console.log(movie['subtitle-language']);

// delete movie.year

movie.ratings = {critic : 94, audience: 96};
console.log(movie.ratings.audience); 

for (const key in movie){
    console.log(movie[key])
}

