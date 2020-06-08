import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})

export class Storage2Service {
    public toShow : boolean = false;
    public case : string = '';
    public messageText : string = `We use cookies to optimise and continuously improve our website for
    individual users like you.Please see “Cookies” to learn more about how they are used on our website.
    Click “Accept cookies” to activate them or “Reject cookies” if you do not want them.You can change
    your settings here at any time.`;

    constructor() { 

    }

    public doCheck = () => {
        if (localStorage.getItem('date') == null) {
            if (localStorage.getItem('case') == null) {
                setTimeout(() => {
                    alert('HELLO!');
                    setTimeout(() => {
                        this.toShow = true;
                    },2000);
                },1000);
            }
        }
    }

    public sendDates = () => {
        let dates = new Date();
        localStorage.setItem('date',JSON.stringify(dates));
        this.toShow = false;
        setTimeout(() => {
            localStorage.removeItem('date');
        },120000);
    }

    public toRemove = () => {
        this.toShow = false;
        if (this.toShow == false) {
            this.case = 'no';
            localStorage.setItem('case',this.case);
        }
    }

}
