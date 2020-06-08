import { Component , OnInit } from '@angular/core';
import { Storage2Service } from '../../services/storage2.service';

@Component({
    selector : 'app-section',
    templateUrl : './section.component.html',
    styleUrls : ['./section.component.css']
})

export class SectionComponent implements OnInit {


    constructor(private storage2 : Storage2Service) { 

    }

    ngOnInit() {
        this.storage2.doCheck();
    }
    

}
