import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  form: FormGroup;
  list: any[] = [];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      title: [''],
      link: [''],
      desc: ['']
    })
  }

  ngOnInit() {
    this.list.push({
      title: 'industrial automation',
      link: 'industrial automation',
      desc: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      the
      industry's standard dummy text ever since the 1500s
      `,
    })
  }

  add() {
    this.list.push(this.form.value);
  }

  remove(item: any) {
    for (let i = 0; i < this.list.length; i++) {
      console.log(this.list[i]);

      if (this.list[i] == item) {
        this.list.splice(i, 1);
      }
    }
  }
}
