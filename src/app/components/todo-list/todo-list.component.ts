import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public list:any[]=[];
  public searchText:string='';

  constructor(public storage:StorageService) {
    let s = this.storage;
    // console.log(s.get('todoLList'));
  }
  ngOnInit(): void {
    if(this.storage.get('todoLList') != null) {
      this.list = this.storage.get('todoLList');
    }
  }

  addstart(key) {
    console.log(key)
    console.log(this.storage.get('todoLList'));
    // this.storage.set('todoLList', this.list);
    // console.log(this.storage.get('todoLList'))
  }

  searchClk() {
    console.log(this.searchText)
    var listName = [];
    for(let i in this.list) {
      listName.push(this.list[i].name);
    }
    if(listName.indexOf(this.searchText) == -1 && this.searchText != '') {
      this.list.push({name:this.searchText,start: false});
      this.storage.set('todoLList',this.list);
    }
    this.searchText='';
  }
  

}
