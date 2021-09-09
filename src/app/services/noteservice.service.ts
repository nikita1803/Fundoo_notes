import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { environment } from 'src/environments/environment';
import {tap} from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  
  private refresh = new Subject<void>();
  constructor(private httpService: HttpServiceService) { }

  url = environment.baseUrl

  createnote = (userData: any, token: any) => {
    return this.httpService.post(`${this.url}notes/addNotes`, userData, true, token).pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }

  note = (token: any) => {
    return this.httpService.get(`${this.url}notes/getNotesList`, true, token)
  }
}
