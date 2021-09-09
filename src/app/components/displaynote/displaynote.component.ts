import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/services/noteservice.service';
@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})

export class DisplaynoteComponent implements OnInit {
  @Input() allNotes: any = [];
  //noteGen: any;
  tokenId = localStorage.getItem("token");
  
  constructor(public note: NoteserviceService, private mate: MatDialog) { }

  ngOnInit(): void {
    
    this.note.note( this.tokenId).subscribe((userData:any) => {
      this.allNotes=userData['data'].data
       
     });
  }
  
}
