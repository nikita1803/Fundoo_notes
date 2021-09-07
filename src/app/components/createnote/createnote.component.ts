import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  
  constructor(private service: NoteserviceService , private activeRoute: ActivatedRoute) { }
  form = new FormGroup({
    titleText: new FormControl(''),
    notesText: new FormControl('')
  })
  tokenId = localStorage.getItem("token");
  ngOnInit(): void {
  }
  submit=() => {
    let userData = {
      "title": this.form.controls.titleText.value,
      "description": this.form.controls.notesText.value,
      "tokenid" : this.tokenId
    } 
    this.service.createnote(userData, this.tokenId).subscribe((userData) => {
      console.log(userData)
      this.form.reset(); 
      
    });
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value))
    
  }
 
}
