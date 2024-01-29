function dark()
{
    document.body.classList.toggle('dark')
}

const mainBDiv = document.getElementById('book_library')
const books =[
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "images/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    },
    {
      "author": "Unknown",
      "country": "India/Iran/Iraq/Egypt/Tajikistan",
      "imageLink": "images/one-thousand-and-one-nights.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
      "pages": 288,
      "title": "One Thousand and One Nights",
      "year": 1200
    },
    {
      "author": "Unknown",
      "country": "Iceland",
      "imageLink": "images/njals-saga.jpg",
      "language": "Old Norse",
      "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
      "pages": 384,
      "title": "Nj\u00e1l's Saga",
      "year": 1350
    },
    {
      "author": "Jane Austen",
      "country": "United Kingdom",
      "imageLink": "images/pride-and-prejudice.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
      "pages": 226,
      "title": "Pride and Prejudice",
      "year": 1813
    },
    {
      "author": "Honor\u00e9 de Balzac",
      "country": "France",
      "imageLink": "images/le-pere-goriot.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
      "pages": 443,
      "title": "Le P\u00e8re Goriot",
      "year": 1835
    },
    {
      "author": "Samuel Beckett",
      "country": "Republic of Ireland",
      "imageLink": "images/molloy-malone-dies-the-unnamable.jpg",
      "language": "French, English",
      "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
      "pages": 256,
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "year": 1952
    },
    {
      "author": "Giovanni Boccaccio",
      "country": "Italy",
      "imageLink": "images/the-decameron.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
      "pages": 1024,
      "title": "The Decameron",
      "year": 1351
    },
    {
      "author": "Jorge Luis Borges",
      "country": "Argentina",
      "imageLink": "images/ficciones.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Ficciones\n",
      "pages": 224,
      "title": "Ficciones",
      "year": 1965
    },
    {
      "author": "Emily Bront\u00eb",
      "country": "United Kingdom",
      "imageLink": "images/wuthering-heights.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
      "pages": 342,
      "title": "Wuthering Heights",
      "year": 1847
    },
    {
      "author": "Albert Camus",
      "country": "Algeria, French Empire",
      "imageLink": "images/l-etranger.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
      "pages": 185,
      "title": "The Stranger",
      "year": 1942
    },
    {
      "author": "Paul Celan",
      "country": "Romania, France",
      "imageLink": "images/poems-paul-celan.jpg",
      "language": "German",
      "link": "\n",
      "pages": 320,
      "title": "Poems",
      "year": 1952
    },
    {
      "author": "Louis-Ferdinand C\u00e9line",
      "country": "France",
      "imageLink": "images/voyage-au-bout-de-la-nuit.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
      "pages": 505,
      "title": "Journey to the End of the Night",
      "year": 1932
    },
    {
      "author": "Miguel de Cervantes",
      "country": "Spain",
      "imageLink": "images/don-quijote-de-la-mancha.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
      "pages": 1056,
      "title": "Don Quijote De La Mancha",
      "year": 1610
    },
    {
      "author": "Geoffrey Chaucer",
      "country": "England",
      "imageLink": "images/the-canterbury-tales.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
      "pages": 544,
      "title": "The Canterbury Tales",
      "year": 1450
    },
    {
      "author": "Anton Chekhov",
      "country": "Russia",
      "imageLink": "images/stories-of-anton-chekhov.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
      "pages": 194,
      "title": "Stories",
      "year": 1886
    },
    {
      "author": "Joseph Conrad",
      "country": "United Kingdom",
      "imageLink": "images/nostromo.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Nostromo\n",
      "pages": 320,
      "title": "Nostromo",
      "year": 1904
    },
    {
      "author": "Charles Dickens",
      "country": "United Kingdom",
      "imageLink": "images/great-expectations.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Great_Expectations\n",
      "pages": 194,
      "title": "Great Expectations",
      "year": 1861
    },
    {
      "author": "Denis Diderot",
      "country": "France",
      "imageLink": "images/jacques-the-fatalist.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
      "pages": 596,
      "title": "Jacques the Fatalist",
      "year": 1796
    },
    {
      "author": "Alfred D\u00f6blin",
      "country": "Germany",
      "imageLink": "images/berlin-alexanderplatz.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
      "pages": 600,
      "title": "Berlin Alexanderplatz",
      "year": 1929
    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "images/crime-and-punishment.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
      "pages": 551,
      "title": "Crime and Punishment",
      "year": 1866
    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "images/the-idiot.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Idiot\n",
      "pages": 656,
      "title": "The Idiot",
      "year": 1869
    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "images/the-possessed.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
      "pages": 768,
      "title": "The Possessed",
      "year": 1872
    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "images/the-brothers-karamazov.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n",
      "pages": 824,
      "title": "The Brothers Karamazov",
      "year": 1880
    },
    {
      "author": "George Eliot",
      "country": "United Kingdom",
      "imageLink": "images/middlemarch.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Middlemarch\n",
      "pages": 800,
      "title": "Middlemarch",
      "year": 1871
    },
    {
      "author": "Ralph Ellison",
      "country": "United States",
      "imageLink": "images/invisible-man.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Invisible_Man\n",
      "pages": 581,
      "title": "Invisible Man",
      "year": 1952
    },
    {
      "author": "Euripides",
      "country": "Greece",
      "imageLink": "images/medea.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Medea_(play)\n",
      "pages": 104,
      "title": "Medea",
      "year": -431
    }
]
books.forEach(function(book)
{
    const bookDiv = document.createElement('div')
    const img = document.createElement('img')
    const title = document.createElement('h2')
    const btn = document.createElement('button')
    const anchor = document.createElement('a')
    img.src = book.imageLink
    img.alt = book.title
    title.textContent=book.title
    anchor.textContent= "For More"
    anchor.href=book.link
    anchor.target="_blank"
    btn.appendChild(anchor)
    bookDiv.appendChild(img)
    bookDiv.appendChild(title)
    bookDiv.appendChild(btn)
    mainBDiv.appendChild(bookDiv)
    bookDiv.classList.add("book")
    btn.classList.add("btn")
})
const mainMDiv = document.getElementById('movie_library')
const movies =
[
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "890,617",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
    ]
  },
  {
    "Title": "I Am Legend",
    "Year": "2007",
    "Rated": "PG-13",
    "Released": "14 Dec 2007",
    "Runtime": "101 min",
    "Genre": "Drama, Horror, Sci-Fi",
    "Director": "Francis Lawrence",
    "Writer": "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
    "Actors": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
    "Plot": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
    "Language": "English",
    "Country": "USA",
    "Awards": "9 wins & 21 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
    "Metascore": "65",
    "imdbRating": "7.2",
    "imdbVotes": "533,874",
    "imdbID": "tt0480249",
    "Type": "movie",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg"
    ]
  },
  {
    "Title": "300",
    "Year": "2006",
    "Rated": "R",
    "Released": "09 Mar 2007",
    "Runtime": "117 min",
    "Genre": "Action, Drama, Fantasy",
    "Director": "Zack Snyder",
    "Writer": "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
    "Actors": "Gerard Butler, Lena Headey, Dominic West, David Wenham",
    "Plot": "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
    "Language": "English",
    "Country": "USA",
    "Awards": "16 wins & 42 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
    "Metascore": "52",
    "imdbRating": "7.7",
    "imdbVotes": "611,046",
    "imdbID": "tt0416449",
    "Type": "movie",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg"
    ]
  },
  {
    "Title": "The Avengers",
    "Year": "2012",
    "Rated": "PG-13",
    "Released": "04 May 2012",
    "Runtime": "143 min",
    "Genre": "Action, Sci-Fi, Thriller",
    "Director": "Joss Whedon",
    "Writer": "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
    "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
    "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    "Language": "English, Russian",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
    "Metascore": "69",
    "imdbRating": "8.1",
    "imdbVotes": "1,003,301",
    "imdbID": "tt0848228",
    "Type": "movie",
    "Response": "True",
     "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
    ]
  },
  {
    "Title": "The Wolf of Wall Street",
    "Year": "2013",
    "Rated": "R",
    "Released": "25 Dec 2013",
    "Runtime": "180 min",
    "Genre": "Biography, Comedy, Crime",
    "Director": "Martin Scorsese",
    "Writer": "Terence Winter (screenplay), Jordan Belfort (book)",
    "Actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
    "Plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    "Language": "English, French",
    "Country": "USA",
    "Awards": "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
    "Metascore": "75",
    "imdbRating": "8.2",
    "imdbVotes": "786,985",
    "imdbID": "tt0993846",
    "Type": "movie",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg"
    ]
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 134 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "937,412",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
    ]
  },
  {
    "Title": "Game of Thrones",
    "Year": "2011–",
    "Rated": "TV-MA",
    "Released": "17 Apr 2011",
    "Runtime": "56 min",
    "Genre": "Adventure, Drama, Fantasy",
    "Director": "N/A",
    "Writer": "David Benioff, D.B. Weiss",
    "Actors": "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
    "Plot": "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Golden Globe. Another 185 wins & 334 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg",
    "Metascore": "N/A",
    "imdbRating": "9.5",
    "imdbVotes": "1,046,830",
    "imdbID": "tt0944947",
    "Type": "series",
    "totalSeasons": "7",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZjZkN2M5ODgtMjQ2OC00ZjAxLWE1MjMtZDE0OTNmNGM0NWEwXkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMDk4Y2Y1MDAtNGVmMC00ZTlhLTlmMmQtYjcyN2VkNzUzZjg2XkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNjZjNWIzMzQtZWZjYy00ZTkwLWJiMTYtOWRkZDBhNWJhY2JmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxMTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
    ]
  },
  {
    "Title": "Vikings",
    "Year": "2013–",
    "Rated": "TV-14",
    "Released": "03 Mar 2013",
    "Runtime": "44 min",
    "Genre": "Action, Drama, History",
    "Director": "N/A",
    "Writer": "Michael Hirst",
    "Actors": "Travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick",
    "Plot": "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
    "Language": "English, Old English, Norse, Old, Latin",
    "Country": "Ireland, Canada",
    "Awards": "Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg",
    "Metascore": "N/A",
    "imdbRating": "8.6",
    "imdbVotes": "198,041",
    "imdbID": "tt2306299",
    "Type": "series",
    "totalSeasons": "5",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzU2NDcxODMyOF5BMl5BanBnXkFtZTgwNDAzOTI2ODE@._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMzIzOTU2M15BMl5BanBnXkFtZTgwODMzMTkyODE@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NTQ2MDA3NF5BMl5BanBnXkFtZTgwODkxMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg"
    ]
  },
  {
    "Title": "Gotham",
    "Year": "2014–",
    "Rated": "TV-14",
    "Released": "01 Aug 2014",
    "Runtime": "42 min",
    "Genre": "Action, Crime, Drama",
    "Director": "N/A",
    "Writer": "Bruno Heller",
    "Actors": "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
    "Plot": "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg",
    "Metascore": "N/A",
    "imdbRating": "8.0",
    "imdbVotes": "133,375",
    "imdbID": "tt3749900",
    "Type": "series",
    "totalSeasons": "3",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5OTExMTIwNF5BMl5BanBnXkFtZTgwMjI5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDY2NjA3MzBeQTJeQWpwZ15BbWU4MDU0MDkzODgx._V1_SX1499_CR0,0,1499,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MzYzNDgzOV5BMl5BanBnXkFtZTgwMjQwOTM4ODE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODAyNjk0NF5BMl5BanBnXkFtZTgwODU4MzMyODE@._V1_SY1000_CR0,0,1500,1000_AL_.jpg"
    ]
  },
  {
    "Title": "Power",
    "Year": "2014–",
    "Rated": "TV-MA",
    "Released": "N/A",
    "Runtime": "50 min",
    "Genre": "Crime, Drama",
    "Director": "N/A",
    "Writer": "Courtney Kemp Agboh",
    "Actors": "Omari Hardwick, Joseph Sikora, Andy Bean, Lela Loren",
    "Plot": "James \"Ghost\" St. Patrick, a wealthy New York night club owner who has it all, catering for the city's elite and dreaming big, lives a double life as a drug kingpin.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 win & 6 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg",
    "Metascore": "N/A",
    "imdbRating": "8.0",
    "imdbVotes": "14,770",
    "imdbID": "tt3281796",
    "Type": "series",
    "totalSeasons": "3",
    "Response": "True",
     "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMjA0MzczNV5BMl5BanBnXkFtZTgwNTIyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MTI0NzQ2NV5BMl5BanBnXkFtZTgwMDkxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4Mzk1ODcxM15BMl5BanBnXkFtZTgwNDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNTE0NDI1M15BMl5BanBnXkFtZTgwMDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg"
    ]
  },
  {
    "Title": "Narcos",
    "Year": "2015–",
    "Rated": "TV-MA",
    "Released": "28 Aug 2015",
    "Runtime": "49 min",
    "Genre": "Biography, Crime, Drama",
    "Director": "N/A",
    "Writer": "Carlo Bernard, Chris Brancato, Doug Miro, Paul Eckstein",
    "Actors": "Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie",
    "Plot": "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "Nominated for 2 Golden Globes. Another 4 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg",
    "Metascore": "N/A",
    "imdbRating": "8.9",
    "imdbVotes": "118,680",
    "imdbID": "tt2707408",
    "Type": "series",
    "totalSeasons": "2",
    "Response": "True",
     "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMDkyOTEyNV5BMl5BanBnXkFtZTgwNjY3Mjc3OTE@._V1_SY1000_SX1500_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2NDUwMTU2NV5BMl5BanBnXkFtZTgwNTI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODA1NjAyMTQ3Ml5BMl5BanBnXkFtZTgwNjI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NzQ0OTAwNl5BMl5BanBnXkFtZTgwMDAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
    ]
  },
  {
    "Title": "Breaking Bad",
    "Year": "2008–2013",
    "Rated": "TV-14",
    "Released": "20 Jan 2008",
    "Runtime": "49 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "N/A",
    "Writer": "Vince Gilligan",
    "Actors": "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
    "Plot": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "Won 2 Golden Globes. Another 132 wins & 218 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
    "Metascore": "N/A",
    "imdbRating": "9.5",
    "imdbVotes": "889,883",
    "imdbID": "tt0903747",
    "Type": "series",
    "totalSeasons": "5",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NDkwNDk5NV5BMl5BanBnXkFtZTgwNDM0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4NDcyNDMzMF5BMl5BanBnXkFtZTgwOTI0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzMTczMjM3NjFeQTJeQWpwZ15BbWU4MDc1MTI1MzAx._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MTE3MTgwMF5BMl5BanBnXkFtZTgwOTQxMjUzMDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
    ]
  },
  {
    "ComingSoon": true,
    "Title": "Doctor Strange",
    "Year": "2016",
    "Rated": "N/A",
    "Released": "04 Nov 2016",
    "Runtime": "N/A",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Scott Derrickson",
    "Writer": "Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon Spaihts (story by), Scott Derrickson (story by), C. Robert Cargill (story by), Steve Ditko (comic book)",
    "Actors": "Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton",
    "Plot": "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
    "Metascore": "N/A",
    "imdbRating": "N/A",
    "imdbVotes": "N/A",
    "imdbID": "tt1211837",
    "Type": "movie",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNTAyNTU0NV5BMl5BanBnXkFtZTgwNzMzMDY3OTE@._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZTgwMDM3MDM2NzE@._V1_.jpg"
    ]
  },
  {
    "ComingSoon": true,
    "Title": "Rogue One: A Star Wars Story",
    "Year": "2016",
    "Rated": "N/A",
    "Released": "16 Dec 2016",
    "Runtime": "N/A",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Gareth Edwards",
    "Writer": "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta (story), George Lucas (characters)",
    "Actors": "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
    "Plot": "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 nomination.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    "Metascore": "N/A",
    "imdbRating": "N/A",
    "imdbVotes": "N/A",
    "imdbID": "tt3748528",
    "Type": "movie",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjkxOTk5NV5BMl5BanBnXkFtZTgwODAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNjM4MzExNDAyNl5BMl5BanBnXkFtZTgwOTAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTgxMDcyNV5BMl5BanBnXkFtZTgwMDExMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg"
    ]
  },
  {
    "ComingSoon": true,
    "Title": "Assassin's Creed",
    "Year": "2016",
    "Rated": "N/A",
    "Released": "21 Dec 2016",
    "Runtime": "N/A",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Justin Kurzel",
    "Writer": "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie (screenplay)",
    "Actors": "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons",
    "Plot": "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
    "Language": "English",
    "Country": "UK, France, USA, Hong Kong",
    "Awards": "N/A",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg",
    "Metascore": "N/A",
    "imdbRating": "N/A",
    "imdbVotes": "N/A",
    "imdbID": "tt2094766",
    "Type": "movie",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOWYzOTctOTc4My00ZmJkLTgzMTctMmUxNDI5ODQzYzNjXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZTY5ZGUxMTAtYTU0OC00NGQ2LTkzNzgtZGZmNjlmNjY3MGU0XkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MWYwZTEtYzc5Yi00NGM2LTg1YTctNjY2YzQ0NDJhZDAwXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg"
    ]
  }
]
movies.forEach(function(movie)
{
    const movieDiv = document.createElement('div')
    const img = document.createElement('img')
    const title = document.createElement('h2')
    const btn = document.createElement('button')
    const anchor = document.createElement('a')
    img.src = movie.Images
    img.alt = movie.Title
    title.textContent=movie.Title
    anchor.textContent= "About movie"
    anchor.href=movie.Images
    anchor.target="_blank"
    btn.appendChild(anchor)
    movieDiv.appendChild(img)
    movieDiv.appendChild(title)
    movieDiv.appendChild(btn)
    mainMDiv.appendChild(movieDiv)
    movieDiv.classList.add("movie")
    btn.classList.add("btn")
})
const mainCDiv = document.getElementById('cars_library')
const cars = [
    {
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "description": "Midsize sedan known for its reliability and fuel efficiency.",
    "image_url": "https://ackodrive-assets.s3.amazonaws.com/media/test_PlYc218.png",
    "related_link": "https://www.carwale.com/toyota-cars/"
  },
  {
    "brand": "Honda",
    "model": "Civic",
    "year": 2022,
    "description": "Compact car with a reputation for sporty performance and fuel efficiency.",
    "image_url": "https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80",
    "related_link": "https://www.carwale.com/honda-cars/"
  },
  {
    "brand": "Ford",
    "model": "F-150",
    "year": 2022,
    "description": "Full-size pickup truck known for its towing capacity and versatility.",
    "image_url": "https://imgd.aeplcdn.com/600x600/cw/specialVersions/6164.jpg?v=20190222124625&q=80",
    "related_link": "https://www.carwale.com/ford-cars/"
  },
  {
    "brand": "Tesla",
    "model": "Model 3",
    "year": 2022,
    "description": "Electric sedan with advanced technology and impressive performance.",
    "image_url": "https://staticimg.amarujala.com/assets/images/2021/02/03/750x506/tesla-model-x_1612348956.jpeg",
    "related_link": "https://www.tesla.com/"
  },
  {
    "brand": "Chevrolet",
    "model": "Camaro",
    "year": 2022,
    "description": "Muscle car with a powerful engine and iconic design.",
    "image_url": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Chevrolet/Chevrolet-Beat/84/1560334401858/front-left-side-47.jpg",
    "related_link": "https://www.cardekho.com/cars/Chevrolet"
  },
  {
    "brand": "Mercedes-Benz",
    "model": "E-Class",
    "year": 2022,
    "description": "Luxury sedan known for its sophisticated features and comfort.",
    "image_url": "https://s.aolcdn.com/images/dims?client=fh7w6q744eiognjk&signature=891ad51ad4bf4df0609776f2238c867784728d75&image_uri=https%3A%2F%2Fs.aolcdn.com%2Fos%2Fab%2F_cms%2F2020%2F01%2F07004620%2F19C1037_004.jpg&thumbnail=480%2C270&quality=80",
    "related_link": "https://www.mercedes-benz.co.in/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE"
  },
  {
    "brand": "Jeep",
    "model": "Wrangler",
    "year": 2022,
    "description": "Off-road SUV recognized for its rugged design and capabilities.",
    "image_url": "https://www.drivespark.com/car-image/450x350x100/car/2077645-jeep_wrangler.jpg",
    "related_link": "https://www.jeep-india.com/"
  },
  {
    "brand": "BMW",
    "model": "X5",
    "year": 2022,
    "description": "Luxury SUV offering a blend of performance and spacious interior.",
    "image_url": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/201502/bmw_660_021915014858.jpg?size=948:533",
    "related_link": "https://www.bmw.in/en/all-models.html"
  },
  {
    "brand": "Nissan",
    "model": "Altima",
    "year": 2022,
    "description": "Midsize sedan known for its comfortable ride and fuel efficiency.",
    "image_url": "https://spn-mda.spinny.com/img/xtwF2xSnShqJ56q1%2BpycmA/tab/file",
    "related_link": "https://www.nissan.in/vehicles/new/magnite.html?utm_source=Google&cid=PSM_FY23-FY24-DEC-JAN-NISSAN-MAGNITE-MUL-NA-RTL-NA-AMI-IND-NA-LG-NA-NA-NISSAN-NA-NA-NA-NA-MAGNITE-EST-0840_NMIPL_Consideration_Google_Brand-Low-Intent-UAG-RSA-EM2_PanIndia&gad_source=1&gclid=Cj0KCQiAkeSsBhDUARIsAK3tiefpf200Aq6t4BMjF0mw2OxUjK8UreIxXqRIO-4FbKnMxUbQ6i4pp1oaAnwQEALw_wcB&gclsrc=aw.ds"
  },
  {
    "brand": "Audi",
    "model": "A4",
    "year": 2022,
    "description": "Compact luxury sedan known for its elegant design and advanced technology.",
    "image_url": "https://imgd-ct.aeplcdn.com/640X480/cw/ucp/stockApiImg/KDENGNX_ef855e906b8f45ecbf1314282b83e667_1_32042085.jpeg?q=80",
    "related_link": "https://www.carwale.com/audi-cars/"
  },
  {
    "brand": "Subaru",
    "model": "Outback",
    "year": 2022,
    "description": "Crossover SUV with a rugged design and all-wheel-drive capability.",
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07i9gOsR9QlTpVPzyPMcH72bJD4q5S7e1u0ed7vrerzJvV0VjQ3wxrJrGiFg2LQib64Y&usqp=CAU",
    "related_link": "https://www.subaru.com/vehicles/all-vehicles.html"
  },
  {
    "brand": "Hyundai",
    "model": "Kona",
    "year": 2022,
    "description": "Compact SUV with a stylish exterior and a range of modern features.",
    "image_url": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Tucson/10134/1694668706095/front-left-side-47.jpg",
    "related_link": "https://www.carwale.com/hyundai-cars/"
  },
  {
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2022,
    "description": "High-performance sports car with a striking and aerodynamic design.",
    "image_url": "https://img.freepik.com/premium-photo/wallpaper-lamborghini-car-with-smoke-galaxy-vibe-generated-ai_843138-351.jpg",
    "related_link": "https://www.lamborghini.com/en-en"
  },
  {
    "brand": "Volkswagen",
    "model": "Golf",
    "year": 2022,
    "description": "Compact hatchback known for its practicality and driving dynamics.",
    "image_url": "https://assets.volkswagen.com/is/image/volkswagenag/virtus-gt-edge-mofa-2?Zml0PWNyb3AsMSZmbXQ9d2VicC1hbHBoYSZxbHQ9Nzkmd2lkPTgwMCZiZmM9b2ZmJjU0MDQ=",
    "related_link": "https://www.volkswagen.co.in/en/models.html"
  },
  {
    "brand": "Acura",
    "model": "MDX",
    "year": 2022,
    "description": "Luxury SUV offering a blend of performance and advanced safety features.",
    "image_url": "https://www.edmunds.com/assets/m/acura/tl/2004/oem/2004_acura_tl_sedan_base_fq_oem_1_500.jpg",
    "related_link": "https://www.acura.com/"
  },
  {
    "brand": "Jaguar",
    "model": "F-Type",
    "year": 2022,
    "description": "Luxurious sports car with a sleek design and high-performance features.",
    "image_url": "https://media.zigcdn.com/media/content/2022/Oct/649200454-zw-ft-ype-75-afjajf-3.png",
    "related_link": "https://www.jaguar.in/index.html"
  },
  {
    "brand": "Kia",
    "model": "Sorento",
    "year": 2022,
    "description": "Midsize SUV offering a spacious interior and advanced safety features.",
    "image_url": "https://www.automotivekia.in/uploads/gallery/1622539662_automotive-kia-seltos-banner-2.webp",
    "related_link": "https://www.kia.com/in/our-vehicles/Carens/showroom.html?utm_source=google&utm_medium=sem&utm_campaign=carens_brand&gad_source=1&gclid=Cj0KCQiAkeSsBhDUARIsAK3tiefCDIQUsEgmCCHvw_pyr8zhvaywCx2ugTAzKcxD9uifiFqrkmKqIssaAs3WEALw_wcB"
  },
  {
    "brand": "Mazda",
    "model": "CX-5",
    "year": 2022,
    "description": "Compact crossover with a stylish design and responsive handling.",
    "image_url": "https://imgd.aeplcdn.com/1200x900/cw/ec/31070/Mazda-RX8-Exterior-107776.jpg?wm=0",
    "related_link": "https://www.mazda.com/en/innovation/models/"
  }
]
cars.forEach(function(car)
{
    const carDiv = document.createElement('div')
    const img = document.createElement('img')
    const title = document.createElement('h2')
    const btn = document.createElement('button')
    const anchor = document.createElement('a')
    img.src = car.image_url
    img.alt = car.brand
    anchor.textContent= "More Info"
    anchor.href=car.related_link
    anchor.target="_blank"
    btn.appendChild(anchor)
    title.textContent=car.brand
    carDiv.appendChild(img)
    carDiv.appendChild(title)
    carDiv.appendChild(btn)
    mainCDiv.appendChild(carDiv)
    carDiv.classList.add("car")
    btn.classList.add("btn")
})
const mainChDiv = document.getElementById('chess')
const modalDiv = document.getElementById("md")
[
    {
      "piece": "pawn",
      "colour": "white",
      "position": "a2"
    },
    {
      "piece": "pawn",
      "colour": "white",
      "position": "b2"
    },
    {
      "piece": "pawn",
      "colour": "white",
      "position": "c2"
    },
    {
      "piece": "pawn",
      "colour": "white",
      "position": "d2"
    },
    {
      "piece": "pawn",
      "colour": "white",
      "position": "e2"
    },
    {
      "piece": "pawn",
      "colour": "white",
      "position": "f2"
    },
    {
      "piece": "pawn",
      "colour": "white",
      "position": "g2"
    },
    {
      "piece": "pawn",
      "colour": "white",
      "position": "h2"
    },
    {
      "piece": "pawn",
      "colour": "black",
      "position": "a7"
    },
    {
      "piece": "pawn",
      "colour": "black",
      "position": "b7"
    },
    {
      "piece": "pawn",
      "colour": "black",
      "position": "c7"
    },
    {
      "piece": "pawn",
      "colour": "black",
      "position": "d7"
    },
    {
      "piece": "pawn",
      "colour": "black",
      "position": "e7"
    },
    {
      "piece": "pawn",
      "colour": "black",
      "position": "f7"
    },
    {
      "piece": "pawn",
      "colour": "black",
      "position": "g7"
    },
    {
      "piece": "pawn",
      "colour": "black",
      "position": "h7"
    },
    {
      "piece": "rook",
      "colour": "black",
      "position": "a8"
    },
    {
      "piece": "rook",
      "colour": "white",
      "position": "a1"
    },
    {
      "piece": "rook",
      "colour": "black",
      "position": "h8"
    },
    {
      "piece": "rook",
      "colour": "white",
      "position": "h1"
    },
    {
      "piece": "knight",
      "colour": "white",
      "position": "b1"
    },
    {
      "piece": "knight",
      "colour": "white",
      "position": "g1"
    },
    {
      "piece": "knight",
      "colour": "black",
      "position": "b8"
    },
    {
      "piece": "knight",
      "colour": "black",
      "position": "g8"
    },
    {
      "piece": "bishop",
      "colour": "white",
      "position": "c1"
    },
    {
      "piece": "bishop",
      "colour": "white",
      "position": "f1"
    },
    {
      "piece": "bishop",
      "colour": "black",
      "position": "c8"
    },
    {
      "piece": "bishop",
      "colour": "black",
      "position": "f8"
    },
    {
      "piece": "queen",
      "colour": "white",
      "position": "d1"
    },
    {
      "piece": "queen",
      "colour": "black",
      "position": "d8"
    },
    {
      "piece": "king",
      "colour": "white",
      "position": "e1"
    },
    {
      "piece": "king",
      "colour": "black",
      "position": "e8"
    }
  ]
  const piece = document.createElement('p')
    const colour = document.createElement('p')
    const position = document.createElement('h2')
function openn() {
	modalDiv.style.display = "block"
}
function closee ()
{
    	modalDiv.style.display = "none"
}