import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // ViewChild获取dom节点,dom中使用#box1声明,且ts中导入ViewChild
  @ViewChild('box1') mybox1:any;
  @ViewChild('topnav') topnav:any;
  public isShow:boolean = true;
  constructor() { }

  // 初始化时执行
  ngOnInit(): void {
  }

  // 初始化后执行
  ngAfterViewInit(): void {
    // 原生js获取dom节点
    let box = document.getElementById('box');
    console.log(box);
    box.style.color = "red";
    // ViewChild获取dom节点
    console.log(this.mybox1.nativeElement);
    this.mybox1.nativeElement.style.color = "blue";
  }

  getNav() {
    // 获取子组件的run()方法
    this.topnav.run()
  }

}
