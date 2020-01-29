//app.component.html

//clean de template

//string interpolation

{{'Hola mundo'}}

{{1 + 2}}

//app.component.ts

import {Component} from '@angular/core';

@Component({
    template:`
      {{title}}
    `
})
export class AppComponent{
    title = 'Humbert-store'
}