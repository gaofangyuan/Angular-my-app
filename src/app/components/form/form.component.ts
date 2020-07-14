import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public form:any = [{}];
  public area:any[] = [
    '河南',
    '河北',
    '山东',
    '山西',
    '北京',
    '天津',
    '黑龙江'
  ];
  public hobby:any[] = [
    {
      title: '篮球'
    },
    {
      title: '足球'
    },
    {
      title: '乒乓球'
    },
    {
      title: '其他'
    }
  ];
  public hobby1:any[] = []
  constructor() { 
    this.form.push(this.hobby);
  }

  ngOnInit(): void {
  }

  getForm() {
    console.log(this.form)
  }

}
