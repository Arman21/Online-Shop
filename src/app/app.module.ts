import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SectionComponent } from './components/section/section.component';
import { HomePageComponent } from './components/section/home-page/home-page.component';
import { AboutPageComponent } from './components/section/about-page/about-page.component';
import { ContactsPageComponent } from './components/section/contacts-page/contacts-page.component';
import { NotFoundPageComponent } from './components/section/not-found-page/not-found-page.component';
import { BgColorDirective } from './directives/bg-color.directive';
import { ProductsComponent } from './components/section/home-page/main-page/products/products.component';
import { MobilePageComponent } from './components/section/home-page/mobile-page/mobile-page.component';
import { MainPageComponent } from './components/section/home-page/main-page/main-page.component';


@NgModule({
    declarations : [
        AppComponent,
        NavComponent,
        SectionComponent,
        HomePageComponent,
        AboutPageComponent,
        ContactsPageComponent,
        NotFoundPageComponent,
        BgColorDirective,
        ProductsComponent,
        MobilePageComponent,
        MainPageComponent,
    ],
    imports : [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers : [],
    bootstrap : [AppComponent]
})

export class AppModule { }
