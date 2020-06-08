import { Component , OnInit } from '@angular/core';
import { Storage1Service } from '../../../services/storage1.service';

@Component({
    selector : 'app-contacts-page',
    templateUrl : './contacts-page.component.html',
    styleUrls : ['./contacts-page.component.css']
})

export class ContactsPageComponent implements OnInit {


    constructor(private storage1 : Storage1Service) { 

    }

    ngOnInit() {

    }


}
