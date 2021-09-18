import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/services/noteservice.service';
@Component({
  selector: 'app-archive-update',
  templateUrl: './archive-update.component.html',
  styleUrls: ['./archive-update.component.scss']
})
export class ArchiveUpdateComponent implements OnInit {

  title: any;
  description: any;
  id: any;
  colorUpdate: any;
  constructor(private dialogRef: MatDialogRef<ArchiveUpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteserviceService) { 
    this.title = data.note.title,
    this.description = data.note.description
    this.id = data.note.id
    this.colorUpdate = data.note.color

  }
  form = new FormGroup({
    title: new FormControl(this.data.note.title),
    description: new FormControl(this.data.note.description)
    
  })

  ngOnInit(): void {
    console.log("update " + this.colorUpdate)
  }
  tokenId = localStorage.getItem("token");
  receiveIconColorUpdate=($colorData:string) => {
    this.colorUpdate = $colorData;
    console.log("update " + this.colorUpdate)

    let data={
      color: this.colorUpdate,
      noteIdList:[this.id]
    }
    this.noteService.changeColor(data,this.tokenId).subscribe((data) => {
      console.log("color changed ", data);
    })
  }
  submit=()=>{ 
    let UpdateUserData = {
      "noteId": this.id,
      "title": this.form.controls.title.value,
      "description": this.form.controls.description.value,
      "color": this.colorUpdate
    }
    console.log("update" + UpdateUserData)
    this.noteService.updateNote(UpdateUserData,this.tokenId).subscribe((UpdateUserData) => {
    console.log("updated successfull", UpdateUserData); 
    })
  }

  reloadCurrentPage() {
    window.location.reload();
  }


}
