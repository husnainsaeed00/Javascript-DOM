function BookInfo(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.info=function(){
         console.log(`${this.title} by ${this.author}, ${this.pages} pages, read? ${this.read}`);
    }
}
const newBook= new BookInfo('Ibne Adam','Husnain Saeed','200pages','Not Read')
newBook.info()