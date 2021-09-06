import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { FormGroup, FormControl  } from '@angular/forms';
@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  constructor(private service: NoteserviceService ) { }
  step = 0;
  nextStep() {
    this.step++
  }
  ngOnInit(): void {
  }
  form = new FormGroup({
    notesText: new FormControl('')
  })
  getf() { return this.form.controls}
  tokenId = localStorage.getItem("token");

  submit=() => {
    let userData = {
      
      "description": this.form.controls.notestext.value,
      
    } 
    this.service.createnote(userData, this.tokenId).subscribe((userData) => {
      console.log(userData)
      this.form.reset();
    });
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value))

    
  }

}
