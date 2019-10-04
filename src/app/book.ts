export class Book {

    id: number;
    author: string;
    title:string;
    price:number;
    comments_string:string[]=[];

    constructor(id:number, author:string, title:string, price:number){
        this.id=id;
        this.author=author;
        this.title=title;
        this.price=price;
        
    }
}
