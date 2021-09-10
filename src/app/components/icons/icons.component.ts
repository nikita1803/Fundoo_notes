import { Component, OnInit ,Output, EventEmitter, Input} from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { CreatenoteComponent } from '../createnote/createnote.component';
import { DisplaynoteComponent } from '../displaynote/displaynote.component';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteId:any;

  token_Id = localStorage.getItem('token');
  constructor(public note: NoteserviceService) { }

  ngOnInit(): void {
  }
  
  delete(){
    console.log(this.noteId);
    //alert(this.token_Id)
    let data = {
      noteIdList:[this.noteId],
      isDeleted:true
    }
    this.note.deleteNotes(data, this.token_Id).subscribe((data)=>{
      console.log("Deleted Successfully", data);
    });
  }
}
