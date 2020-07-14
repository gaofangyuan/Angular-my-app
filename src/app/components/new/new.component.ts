import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public message:string = '我是new组件';
  public name:string;
  public css_p:object = {color: '#ff0000'};
  public ary:any[] = ['小明', '小红', '小刚'];
  public isIf:boolean = false;
  public listNum:number = null;
  public keywords:string = '双向绑定，Model可以影响View，View可以影响Model';

  constructor() {
    this.message = '给message赋值';
    this.name = '给name赋值';
  }

  ngOnInit(): void {
  }

// 事件
  clkItem(key) {
    this.listNum = key;
  }

  keyUp(e) {
    if(e.keyCode == 13) {
      console.log(e.target.value)
    }
    
  }

  public clkIptB:boolean = false;
  clkIpt(e) {
    this.clkIptB = !this.clkIptB
    // 获取元素
    var dom:any = e.target;
    if (this.clkIptB) {
      dom.style.color = 'red'
    }else{
      dom.style.color = ''
    }
  }

}
