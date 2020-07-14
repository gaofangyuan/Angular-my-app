import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'
  
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public list:any[]=[];
  public searchText:string='';

  constructor(public storage:StorageService) {
    let s = this.storage;
    console.log(s.get('searchList'));
  }
  ngOnInit(): void {
    if(this.storage.get('searchList') != null) {
      this.list = this.storage.get('searchList')
    }
  }

  searchClk() {
    console.log(this.searchText)
    if(this.list.indexOf(this.searchText) == -1 && this.searchText != '') {
      this.list.push(this.searchText);
      this.storage.set('searchList',this.list);
    }
    this.searchText='';
  }
  
  searchDelete(key) {
    this.list.splice(key,1);
    this.storage.set('searchList',this.list);
  }

  allDelete() {
    this.list = [];
    this.storage.set('searchList',this.list);
  }

}
