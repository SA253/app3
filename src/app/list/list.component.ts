import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 books:Book[]=[];
  constructor(public svc:DataService) { }

  ngOnInit() {
    this.books = this.svc.books;
    console.log(this.books);
  }

}
