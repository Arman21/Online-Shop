import { Component , OnInit , Output , EventEmitter } from '@angular/core';
import { Storage1Service } from '../../../../../services/storage1.service';

@Component({
    selector : 'app-products',
    templateUrl : './products.component.html',
    styleUrls : ['./products.component.css']
})

export class ProductsComponent implements OnInit {
    @Output() public event : EventEmitter<any> = new EventEmitter();

    constructor(private storage1 : Storage1Service) { 

    }

    ngOnInit() {

    }

    sendInfo(obj) {
        this.event.emit(obj);
    }

}
