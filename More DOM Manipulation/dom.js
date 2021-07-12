// About me

document.getElementsByTagName('body')[0].style.fontFamily = "Arial, sans-serif";

document.getElementById("nickname").textContent="mariamalrashidi";

document.getElementById("favorite").textContent="Cats";

document.getElementById("hometown").textContent="Saudi Arabia";

var listOfLis = document.getElementsByTagName('li');

for(var li =0; li < listOfLis.length; li++){

    listOfLis[li].className = 'listitem';

    listOfLis[li].style.color = 'rebeccapurple';

}

var img = document.createElement('img');

img.src = 'https://i.pinimg.com/474x/be/b3/84/beb3849abd4bf01dcd1f779ff464abb9.jpg';

document.getElementsByClassName('profilePicture')[0].appendChild(img);


// Books

var books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "In Search of Lost Time",
    author: "Marcel Proust",
    alreadyRead: true,
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    alreadyRead: true,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    alreadyRead: true,
  },
];

var h1 = document.createElement('h1');

h1.textContent = 'My Book List';

document.getElementsByClassName('favoriteBooks')[0].appendChild(h1);

for (var book = 0; book < books.length; book++) {

    var paragraph = document.createElement("P");

    paragraph.innerText = book + "- " + books[book].title + ", by " + books[book].author;

    document.getElementsByClassName('favoriteBooks')[0].appendChild(paragraph);

} 
