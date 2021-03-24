import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Input()  students: Array<{ name: string, age: number }> = [];
}
