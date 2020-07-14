// angular根模块文件，告诉angular如何组装应用

// 浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
// angular核心模块
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

// 路由
import { AppRoutingModule } from './app-routing.module';
// 服务
import { StorageService } from './services/storage.service'
// 跟组件
import { AppComponent } from './app.component';
import { NewComponent } from './components/new/new.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

// @NgModule装饰器，@NgModule接受一个元数据对象，告诉angular如何编译和启动应用
@NgModule({
  // 配置当前项目运行组件
  declarations: [
    AppComponent,
    NewComponent,
    FormComponent,
    SearchComponent,
    TodoListComponent
  ],
  // 配置当前模块运行依赖的其他模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // 配置项目所需要的服务
  providers: [StorageService],
  // 指定应用的主视图（成为根组件）通过引导根AppModule来启动应用，这里一般写的是根组件
  bootstrap: [AppComponent]
})

// 跟模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
