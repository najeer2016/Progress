import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  a: number = 0;

  b: any[] = [];

  ngOnInit() {

    for(let i=0;i<100;i++) {
      this.b.push(i+1);
    }
   
    setInterval(a=>{
      if(this.a <= 99) {
        this.a = this.a + 1;
      }
    },100,[]);
  }

  display(i) {
    alert(i+1);
  }
  abc(i) {
    let mul = i*10;
  }
}
