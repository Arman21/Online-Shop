import { Component , OnInit } from '@angular/core';
import { Storage1Service } from '../../../../services/storage1.service';

@Component({
    selector: 'app-main-page',
    templateUrl : './main-page.component.html',
    styleUrls : ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  public line : string = 'underline';
  public toShow : boolean = false;
  public time : number = 1;
  public quantity : number = 1;
  public price : number;

  public goodsArray : Array<any> = [];

  public holdInfo = () => {
      localStorage.setItem('trade',JSON.stringify(this.goodsArray));
      localStorage.setItem('count',JSON.stringify(this.storage1.num));
      localStorage.setItem('price',JSON.stringify(this.price));
  }

  public removeInfo = () => {
      localStorage.removeItem('trade');
      localStorage.removeItem('count');
      localStorage.removeItem('price');
  }

    constructor(private storage1 : Storage1Service) { 

    }

    ngOnInit() {
      if (localStorage.getItem('trade') != null && localStorage.getItem('count') != null && 
      localStorage.getItem('price') != null) {
          this.toShow = true;
          this.goodsArray = JSON.parse(localStorage.getItem('trade'));
          this.storage1.num = JSON.parse(localStorage.getItem('count'));
          this.price = JSON.parse(localStorage.getItem('price'))
      }
    }

    getInfo(data : any) {
      this.toShow = true
      this.price = 0;
      if (this.goodsArray.length < 3) {
          this.goodsArray.push(data);
          this.storage1.num++;
          for (let key of this.goodsArray) {
              this.price += key.price;
          }
      }
      this.holdInfo();
  }

  removeItem(index,icon) {
      if (this.price > 0) {
            this.price -= +this.goodsArray[index].price;
      }
      this.goodsArray.splice(index,1);
      this.storage1.num--;
      this.holdInfo();
      if (this.goodsArray.length == 0) {
          icon.setAttribute('data-dismiss','modal');
          this.toShow = false;
          this.removeInfo();
      }
  }

  clearAll(elem) {
      this.toShow = false;
      elem.setAttribute('data-dismiss','modal');
      this.goodsArray.splice(0);
      this.storage1.num = 0;
      this.removeInfo();
  }

}
