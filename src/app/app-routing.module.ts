import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { HomePageComponent } from './components/section/home-page/home-page.component';
import { MainPageComponent } from './components/section/home-page/main-page/main-page.component';  
import { AboutPageComponent } from './components/section/about-page/about-page.component'; 
import { ContactsPageComponent } from './components/section/contacts-page/contacts-page.component'; 
import { MobilePageComponent } from './components/section/home-page/mobile-page/mobile-page.component'; 
import { NotFoundPageComponent } from './components/section/not-found-page/not-found-page.component'; 


const routes : Routes = [
    { path : '' , redirectTo : '/home-page/main-page' , pathMatch : 'full'},
    { path : 'home-page' , component : HomePageComponent , children : [
        { path : 'main-page' , component : MainPageComponent },
        { path : 'mobile-page/:model' , component : MobilePageComponent}
    ]},
    { path : 'about-page' , component : AboutPageComponent },
    { path : 'contacts-page' , component : ContactsPageComponent},
    { path : '**' , component : NotFoundPageComponent }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule { }
