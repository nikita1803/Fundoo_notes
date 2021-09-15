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
  @Output() transColor:EventEmitter<string> = new EventEmitter<string>();
  token_Id = localStorage.getItem('token');
  isColor:string=''
  constructor(public note: NoteserviceService) { }

  ngOnInit(): void {
  }
  receiveColorCode = ($isColor:string) =>{
    console.log("icon " + $isColor);
    this.isColor = $isColor;
    console.log("singleIcon " + this.isColor)
    this.transColor.emit(this.isColor)
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
  reloadCurrentPage() {
    window.location.reload();
  }
  
}
