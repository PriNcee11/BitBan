import { Component, OnInit } from "@angular/core";

import { DataService } from "../../services/DataService.service";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{

    items: any;
    serie: any[] = [];
    filter: string = "*";

    constructor( private _dataService: DataService ) {}

    ngOnInit() {
        this._dataService.getData().subscribe( data => this.items = data );

        this.fillSerie();
    }

    private fillSerie(){
        this.serie.push('0-9');

        for(let i=65; i<=90; i++){
            this.serie.push(String.fromCharCode(i));
        }
    }

    setFilter(filter: string){
        this.filter = filter;
        sessionStorage.setItem("filter", filter);
        console.log(sessionStorage.getItem("filter"));
    }

}