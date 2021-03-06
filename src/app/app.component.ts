import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-card-game';
  cards:{ cardID: number , status:string , path:string }[]=[ 
    { cardID:0 , status:'default' , path: './assets/default.png' },
    { cardID:1 , status:'default' , path: './assets/default.png' },
    { cardID:2 , status:'default' , path: './assets/default.png' }, 
    { cardID:3 , status:'default' , path: './assets/default.png' },
    { cardID:4 , status:'default' , path: './assets/default.png' },
    { cardID:5 , status:'default' , path: './assets/default.png' },
    { cardID:6 , status:'default' , path: './assets/default.png' },
    { cardID:7 , status:'default' , path: './assets/default.png' },
    { cardID:8 , status:'default' , path: './assets/default.png' },
    { cardID:9 , status:'default' , path: './assets/default.png' },
    { cardID:10 , status:'default' , path: './assets/default.png' },
    { cardID:11 , status:'default' , path: './assets/default.png' },
    { cardID:12 , status:'default' , path: './assets/default.png' },
    { cardID:13 , status:'default' , path: './assets/default.png' },
    { cardID:14 , status:'default' , path: './assets/default.png' },
    { cardID:15 , status:'default' , path: './assets/default.png' }
  ] 
 

  fromFiglioEvntHandlr( evntData: { cardID: number , status:string , path:string } ){

    console.log("Sono il padre: dal figlio numero " + evntData.cardID+  " ho ricevuto status="+evntData.status )
    if (this.cards[evntData.cardID].status=='default') {
      this.cards[evntData.cardID].status='flipped'
      this.cards[evntData.cardID].path='./assets/3cuori.png'
    } else {
      this.cards[evntData.cardID].status='default'
      this.cards[evntData.cardID].path='./assets/default.png'
    }
    
    console.log(evntData)
  }
}
