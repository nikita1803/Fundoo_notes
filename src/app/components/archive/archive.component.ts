import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { ArchiveUpdateComponent } from '../archive-update/archive-update.component';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  @Input() archieveNote: any = [];
  notes: any = [];
  updateData: any;
  colorData:string=''
  token_Id = localStorage.getItem("token");
  

  constructor(private noteService: NoteserviceService,private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getArchieve();
    this.noteService.getRefreshedData().subscribe(() => this.getArchieve());
  }
  receiveToUpdate=($colorData:string) => {
    this.colorData = $colorData;
    console.log("display " + this.colorData) 
  }
  openAddDialog(updateData: any) {
    this.updateData = updateData
     this.dialog.open(ArchiveUpdateComponent, {data : {note: updateData} });
   }
  getArchieve(){
    console.log("getting archive")
    this.archieveNote=this.noteService.getArchieveNotes(this.token_Id).subscribe((data:any)=>{
      this.notes=data['data'].data
    })
    
    
  }
}
