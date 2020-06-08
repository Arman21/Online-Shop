import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage1Service } from '../../../../services/storage1.service';

@Component({
    selector : 'app-mobile-page',
    templateUrl : './mobile-page.component.html',
    styleUrls : ['./mobile-page.component.css']
})

export class MobilePageComponent implements OnInit {
    public text : string = '';

    constructor(private storage1 : Storage1Service , private router : ActivatedRoute) { 

    }

    ngOnInit() {
        this.router.params.subscribe(param => {
            for (let key of this.storage1.productsArray) {
                for(let i of key) {
                    if (i.id == param.model) {
                        this.text = param.model;
                    }
                }
            }
        });
    }
    

}
