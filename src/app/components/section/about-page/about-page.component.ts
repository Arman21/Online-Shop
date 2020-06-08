import { Component , OnInit } from '@angular/core';
import { Storage1Service } from '../../../services/storage1.service';

@Component({
    selector : 'app-about-page',
    templateUrl : './about-page.component.html',
    styleUrls : ['./about-page.component.css']
})

export class AboutPageComponent implements OnInit {


    constructor(private storage1 : Storage1Service) { 

    }

    ngOnInit() {

    }


}
