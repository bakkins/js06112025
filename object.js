let book =  [
    title = "title123",
    author = "Lauris",
    pages = 150,
]

console.log(book[0]);

book[2] = 100;

console.log(book[2]);

if (book[2] > 300){
    console.log("book is longer than 300 pages");
}
else{
    console.log("book is not longer than 300 pages");
}