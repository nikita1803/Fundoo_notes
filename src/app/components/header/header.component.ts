import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogueElementComponent } from '../dialogue-element/dialogue-element.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  switchClick = 1
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  

  noteDisplay(){
    return this.switchClick = 1;
  }
  editDisplay(){
    return this.switchClick = 2;
  }
  openDialog(){
    this.dialog.open(DialogueElementComponent);
  }
  
}


