import { Directive , ElementRef , HostListener } from '@angular/core';

@Directive({
    selector : '[appBgColor]'
})  

export class BgColorDirective {
    public text = this.elem.nativeElement;

    constructor(private elem : ElementRef) { 
        this.text.style.color = '#fff';
    }

    @HostListener('mouseover') onMouseOver() {
        this.textColor('rgb(211,243,96)');
    }

    @HostListener('mouseout') onMouseOut() {
        this.textColor(null);
    }

    public textColor(color : any) {
        this.text.style.backgroundColor = color;
    }

}
