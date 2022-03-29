var movieObj = {
    '001': {
       Album title:'Peter Pan',
       Album artist:'Fantasy',
        Year:['Jason Isaacs','Jeremy Sumpter','Rachel Hurd-Wood',
        'Richard Briers','Olivia Williams','Lynn Redgrave','Ludivine Sagnier','Geoffrey Palmer','Donald McAlpine'],
        label:'P. J Hogan',
        year: 2003
    },    

    '002': {
        title:'Spirit: Stallion of the Cimarron',
        genre:'Action',
        cast:['Matt Damon','James Cromwell','Daniel Studi','Chopper Bernet', 'Jeff LeBeau','Richard McGonagle', 'Matt Levin','Robert Cait','Charles Napier', 'Zahn McClarnon','Michael','Donald Fullilove', 'Frank Welker', 'Mickie McGowan', 'Sherry Lynn', 'Jennifer Darling', 'Lorna Cook'],
        director:['Kelly Asbury', 'Lorna Cook'],
        year: 2002
    },

    '003': {
        title:'Prince of Eygpt',
        genre:'Drama',
        cast:['Val Kilmer','Ralph Fiennes','Michelle Pfeiffer','Sandra Bullock','Jeff Goldblum','Danny Glover','Patrick Stewart','Helen Mirren','Steve Martin','Martin Short'],
        director:['Brenda Chapman','Steve Hickner','Simon Wells'],
        year: 1998
    },

    '004': {
        title:'Shrek',
        gerne:'Fantasy, Comedy',
        cast:['Mike Myers','Eddie Murphy','Cameron Diaz','John Lithgow'],
        director:['Andrew Adamson','Vicky Jenson'],
        year: 2001,
    },

    '005': {
        title:'The Incredibles',
        genre:'Action',
        cast:['Craig T. Nelson','Holly Hunter','Sarah Vowell','Spencer Fox','Jason Lex','Samuel L. Jackson','Elizabeth Peña'],
        director:'Brad Bird',
        year:2004,
    },

    '006': {
        title:'Troy',
        genre:'Historical',
        cast: ['Brad Pitt','Eric Bana','Orlando Bloom','Diane Kruger','Brian Cox','Sean Bean','Brendan Gleeson','Peter OToole'],
        director:'Wolfgang Peterson',
        year:2004
    },

}


var header = document.querySelector('.header');
header.innerText = "Lawrenciya's Favorite Movies"

var movieCard = document.querySelectorAll('.movie-card');

movieCard.forEach(item =>) {
    for(key in movieObj) {
        item.children[0].innerText = movieObj[key].title;
        item.children[1].innerText = movieObj[key].genre;
        item.children[2].innerText = movieObj[key].cast;
        item.children[3].innerText = movieObj[key].director;
        item.children[4].innerText = movieObj[key].year;
        delete movieObj[key]
        break;
    }
;}

var movieTitle = document.querySelectorAll('movie-title');
var genre = document.querySelectorAll('.genre');
var cast = document.querySelectorAll('cast');
var cast = document.querySelectorAll('director');
var cast = document.querySelectorAll('year');


//console.log(movieTitle);
// place nobelist in an arr
 var dataList = [
     movieTitle,
     genre,
     cast,
     director,
     year
 ];

 for (const key in movieObj) {
    const title = movieObj[key].title;
    const gerne = movieObj[key].genre;
    const castData = movieObj[key].cast;
    const directorData = moiveObj[key].director;
    const yearData = moiveObj[key].year;

 for (const key in movieObj) {
    for (const prop in movieObj[key]) {
        //console.log(movieObj[key][prop]);
        switch (dataList[idx]) {
        
            for (const prop in movieObj[key]) {

                dataList[0].forEach(element =>) {

                }


                    if (element.innerText == 'Title') {
                        element.innerText = movieObj[key][prop];
                        break;
                    }
        }
    }

    for (let element of movieTitle) {
        if (element.innerText == 'Title') {
            element.innerText = title;
            break;
        }
    }

    for (let element of genre) {
        if (element.innerText == 'Genre') {
            element.innerText = genreData;
            break;
        }
    } 

    for (let element of cast) {
        if (element.innerText == 'Cast') {
            element.innerText = castData;
            break;
        }
    }

    for (let element of director) {
        if (element.innerText == 'Director') {
            element.innerText = directortData;
            break;
        }
    }

    for (let element of year) {
        if (element.innerText == 'Year') {
            element.innerText = yearData;
            break;
        }
    }
}