import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  // 构造函数，value存放到key set(key,value)
  set(key:any, value:any) {
    localStorage.setItem(key,JSON.stringify(value));
  }
  // 返回key数据 get(key)
  get(key:any) {
    return JSON.parse(localStorage.getItem(key));
  }
  // 删除key数据 
  remove(key:any) {
    localStorage.removeItem(key);
  }
}
