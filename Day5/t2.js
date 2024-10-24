class Book{
    constructor(title,author,yearPublished){
        this.title=title
        this.author=author
        this.yearPublished=yearPublished
    }
    print()
    {
        console.log(this.title)
        console.log(this.author)
        console.log(this.yearPublished)
    }
}
const b1=new Book("java","narayana",2013)
b1.print()