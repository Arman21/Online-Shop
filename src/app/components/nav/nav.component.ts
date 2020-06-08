import { Component , OnInit } from '@angular/core';

@Component({
    selector  : 'app-nav',
    templateUrl : './nav.component.html',
    styleUrls : ['./nav.component.css']
})

export class NavComponent implements OnInit {
    public text1 : string = 'home';
    public text2 : string = 'about';
    public text3 : string = 'contacts';
    public text4 : string = 'more';
    public text5 : string = 'message';

    constructor() { 

    }

    ngOnInit() {

    }


}
