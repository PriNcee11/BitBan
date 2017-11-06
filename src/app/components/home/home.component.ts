import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

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

    constructor( private _dataService: DataService, private _sanitizer: DomSanitizer ) {}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._dataService.getData().subscribe( data => {
            this.items = this.sanitizeUrls(data.items);
            this.pageTitle = data.pageTitle;
            this.viewMoreLabel = data.viewMoreLabel;
        });        
    }

    sanitizeUrls(items){
        for(let i in items){
            // set default image if player does not have it
            var url = items[i]['imageURL'] ? items[i]['imageURL'] : 'assets/images/fake-image-player-V.jpg';
            items[i]['imageURL'] = this._sanitizer.bypassSecurityTrustStyle(`url(${url})`);
        }

        return items;
    }



}