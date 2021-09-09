import { Component, OnInit ,Output, EventEmitter, Input} from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Output() transColor:EventEmitter<string> = new EventEmitter<string>();
  @Input() noteId:any;

  isColor:string=''

  constructor() { }

  ngOnInit(): void {
  }
  receiveColorCode = ($isColor:string) =>{
    console.log("icon " + $isColor);
    this.isColor = $isColor;
    console.log("singleIcon " + this.isColor)
    this.transColor.emit(this.isColor)
  }

}
