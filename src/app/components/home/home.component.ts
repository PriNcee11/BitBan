import { Component, OnInit } from "@angular/core";

import { DataService } from "../../services/DataService.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

    items: any[];
    pageTitle: string;
    viewMoreLabel: string;

    constructor( private _dataService: DataService ) {}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._dataService.getData().subscribe( data => {
            this.items = data.items;
            this.pageTitle = data.pageTitle;
            this.viewMoreLabel = data.viewMoreLabel;
        });

        
    }



}