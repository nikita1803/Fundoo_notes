import { Component, OnInit ,ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MediaMatcher } from '@angular/cdk/layout';
import { DialogueElementComponent } from '../dialogue-element/dialogue-element.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  switchClick = 1
  isExpandable: boolean = false;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(public dialog: MatDialog,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    

    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    

  }
  

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
  trashDisplay(){
    return this.switchClick = 3;
  }
  
}


