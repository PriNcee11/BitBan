import { Component, OnInit } from "@angular/core";

import { DataService } from "../../services/DataService.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

    items: any[];
    serie: any[] = [];
    serieAux: any[] = [];
    pageTitle: string;
    viewMoreLabel: string;
    filter: string = "";

    constructor( private _dataService: DataService ) {}

    ngOnInit() {
        // Get the json data from the service
        this._dataService.getData().subscribe( data => {
            this.items = data.items;
            this.pageTitle = data.pageTitle;
            this.viewMoreLabel = data.viewMoreLabel;

            // Make an array that contains the unique first letter of all the objects
            this.checkValues();
        });

        // Create an array with the filter options
        this.fillSerie();

        // Set a default filter
        this.setFilter(this.filter);
        
    }

    private fillSerie(){
        this.serie.push('0-9');

        for(let i=65; i<=90; i++){
            this.serie.push(String.fromCharCode(i));
        }
    }

    private checkValues(){
        this.items.forEach(element => {
            if(element.nick != undefined){
                this.serieAux[element.nick.charAt(0).toUpperCase()] = element.nick.charAt(0).toUpperCase();                
            }
        });
    }

    setFilter(filter: string){
        this.filter = filter;
    }

}