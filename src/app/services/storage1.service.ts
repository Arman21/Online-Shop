import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})

export class Storage1Service {
    public num : number = 0;
    public number : number = 1;

    public aboutArray : Array<string> = [
        'About Us' , 
        `Building a website is, in many ways, an exercise of willpower. It’s tempting to 
        get distracted by the bells and whistles of the design process, and forget all about creating 
        compelling content.It's that compelling content that's crucial to making inbound marketing work
        for your business.So how do you balance your remarkable content creation with your web design
        needs? It all starts with the "About Us" page.→ Download Now: About Us Pages Guide [Free Lookbook]
        For a remarkable about page, all you need to do is figure out your company's unique identity,
        and then share it with the world. Easy, right? Of course not. Your "About Us" page is one of the
        most important pages on your website, and it needs to be well crafted. This profile also happens
        to be one of the most commonly overlooked pages, which is why you should make it stand out.
        The good news? It can be done. In fact, there are some companies out there with remarkable
        "About Us" pages, the elements of which you can emulate on your own website.
        By the end of this post, you'll be introduced to:`
    ];

    public contactsArray : Array<any> = [
        'Number-First : 098-77-44-23',
        'Number-Second : 010-43-55-78',
        'E-mail : adamyanarman527@gmail.com'
    ];

    public productsArray : Array<any> = [
        [
            {
                src : '../assets/Images/galaxy_s20.jpg',
                alt : 'galaxy_pic',
                title : 'Samsung Galaxy S20',
                text : 'Product',
                info : `Samsung Galaxy S20 Android smartphone.Announced Feb 2020.Features 6.2″ Dynamic
                AMOLED 2X display,Exynos 990 chipset,4000 mAh battery.`,
                action : 'To buy',
                price : 420000,
                number : this.number++,
                time : 1,
                id : 'S20'
            },
            {
                src : '../assets/Images/galaxy_a71.jpg',
                alt : 'galaxy_pic',
                title : 'Samsung Galaxy A71',
                text : 'Product',
                info : `Buy Samsung Galaxy A71 SM-A715F/DS 4G LTE 128GB + 6GB Ram Octa Core
                (LTE USA Latin Caribbean Euro) w/Four Cameras (64+12+5+5mp) Android...`,
                action : 'To buy',
                price : 270000,
                number : this.number++,
                time : 1,
                id : 'A71'
            },
            {
                src : '../assets/Images/galaxy_a51.jpg',
                alt : 'galaxy_pic',
                title : 'Samsung Galaxy A51',
                text : 'Product',
                info : `Samsung Galaxy A51 Android smartphone.Announced Dec 2019.Features 6.5″ Super AMOLED 
                display,Exynos 9611 chipset,4000 mAh battery.`,
                action : 'To buy',
                price : 200000,
                number : this.number++,
                time : 1,
                id : 'A51'
            }
        ],
        [
            {
                src : '../assets/Images/galaxy_a51.jpg',
                alt : 'galaxy_pic',
                title : 'Samsung Galaxy A51',
                text : 'Product',
                info : `Samsung Galaxy A51 Android smartphone.Announced Dec 2019.Features 6.5″ Super AMOLED 
                display,Exynos 9611 chipset,4000 mAh battery.`,
                action : 'To buy',
                price : 200000,
                number : this.number++,
                time : 1,
                id : 'A51'
            },
            {
                src : '../assets/Images/galaxy_a71.jpg',
                alt : 'galaxy_pic',
                title : 'Samsung Galaxy A71',
                text : 'Product',
                info : `Buy Samsung Galaxy A71 SM-A715F/DS 4G LTE 128GB + 6GB Ram Octa Core
                (LTE USA Latin Caribbean Euro) w/Four Cameras (64+12+5+5mp) Android...`,
                action : 'To buy',
                price : 250000,
                number : this.number++,
                time : 1,
                id : 'A71'
            },
            {
                src : '../assets/Images/galaxy_s20.jpg',
                alt : 'galaxy_pic',
                title : 'Samsung Galaxy S20',
                text : 'Product',
                info : `Samsung Galaxy S20 Android smartphone.Announced Feb 2020.Features 6.2″ Dynamic
                AMOLED 2X display,Exynos 990 chipset,4000 mAh battery.`,
                action : 'To buy',
                price : 400000,
                number : this.number++,
                time : 1,
                id : 'S20'
            }
        ]
    ];
  
    constructor() { 

    }

}
