import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  bookId:number;
   book:Book;
  newComment:string;
  constructor(public svc:DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.books.forEach(element => {
      if(element.id == this.bookId){
        this.book = element;
      }
    });
  }
 Comment(){
   this.book.comments_string.push(this.newComment);
   console.log(this.book.title+this.book.comments_string);
   this.newComment="";


 }
   
    
  

}
