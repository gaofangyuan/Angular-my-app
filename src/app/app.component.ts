// 根组件

// 引入核心模块里的Component
import { Component } from '@angular/core';

@Component({
  // 定义组件的名称
  selector: 'app-root',
  // html
  templateUrl: './app.component.html',
  // css
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // 定义属性
  title = '我是根组件';

  // 构造函数
  constructor() {
    
  }
}
