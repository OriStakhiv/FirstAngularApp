import { Component} from '@angular/core';

class Item{
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number){
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}

@Component({
    selector: 'purchase-app',
    template:`<div class="page-header">
               <h1> List </h1>
              </div>
              <div class="panel">
                <div class="form-inline">
                  <div class="form-group" >
                  <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Name" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Price" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, price)">Add</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Sгbject</th>
                    <th>Price</th>
                    <th>Bought</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.purchase}}</td>
                    <td>{{item.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AppComponent { 
    items: Item[] = 
    [
        { purchase: "Bla", done: false, price: 15.9 },
        { purchase: "BlaBla", done: false, price: 60 },
        { purchase: "BlaBlaBla", done: true, price: 22.6 },
        { purchase: "Blabla", done: false, price:310 }
    ];
    addItem(text: string, price: number): void {
         
        if(text==null || text.trim()=="" || price==null)
            return;
        this.items.push(new Item(text, price));
    }
}