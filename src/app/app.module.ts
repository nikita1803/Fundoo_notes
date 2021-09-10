import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HeaderComponent } from './components/header/header.component';
import { TrashComponent } from './components/trash/trash.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/Input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule} from '@angular/material/dialog';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { NotesComponent } from './components/notes/notes.component';
import { EditComponent } from './components/edit/edit.component';
import { DialogueElementComponent } from './components/dialogue-element/dialogue-element.component';
import { IconsComponent } from './components/icons/icons.component';
import { ColorsComponent } from './components/colors/colors.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';

import { MatCardModule } from '@angular/material/card';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    HeaderComponent,
    CreatenoteComponent,
    NotesComponent,
    EditComponent,
    DialogueElementComponent,
    IconsComponent,
    ColorsComponent,
    DisplaynoteComponent,
    UpdateComponent,
    TrashComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
