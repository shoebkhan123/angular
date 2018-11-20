import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule,
  MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, 
  
  MatToolbarModule, MatInputModule, MatSelectModule, MatDatepicker, MatDatepickerModule, MatTableModule, MatExpansionModule, MatSpinner } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TestService } from './service/test.service';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';



// const routes: Routes = [
//     { path : '', component:HomeComponent},
//   { path : 'about', component:HomeComponent},
//   { path : 'contact', component:HomeComponent},
//   { path : '**', component:PageNotFoundComponent},
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactMeComponent,
    PageNotFoundComponent,
    SidebarComponent,
    TableComponent,
    TemplateDrivenFormComponent,
    TestComponent,
    
  ],
  imports: [

    BrowserModule,
    HttpClientModule
    ,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule,
    FormsModule
    ,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,  MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, 
    MatExpansionModule,

    RouterModule.forRoot([
      { path : '', component:TestComponent},

      { path : 'home', component:HomeComponent},
      { path : 'about', component:AboutComponent},
      { path : 'contact', component:ContactMeComponent},
      { path : 'sidebar', component:SidebarComponent},
      { path : 'table', component:SidebarComponent},
      { path : 'tdf', component:TemplateDrivenFormComponent},

      { path : '**', component:TableComponent},
      
    ]),

    
  
  ],
  providers: [
    TestService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

