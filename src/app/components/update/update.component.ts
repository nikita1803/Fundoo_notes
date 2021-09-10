import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/services/noteservice.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any;
  description: any;
  id: any;
  colorUpdate: any;
  constructor(private dialogRef: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteserviceService) { 
    this.title = data.note.title,
    this.description = data.note.description
    this.id = data.note.id

  }
  form = new FormGroup({
    title: new FormControl(this.data.note.title),
    description: new FormControl(this.data.note.description)
    
  })

  ngOnInit(): void {
  }
  tokenId = localStorage.getItem("token");

  submit=()=>{ 
    let UpdateUserData = {
      "noteId": this.id,
      "title": this.form.controls.title.value,
      "description": this.form.controls.description.value,
    }
    console.log("update" + UpdateUserData)
    this.noteService.updateNote(UpdateUserData,this.tokenId).subscribe((UpdateUserData) => {
    console.log("updated successfull", UpdateUserData); 
    })
  }


}
