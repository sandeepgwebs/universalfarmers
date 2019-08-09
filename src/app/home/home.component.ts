import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import { Router } from "@angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<IDataItem>;
     
    constructor(private _itemService: DataService,private router:Router) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
    
    login(){
        alert('fgjhg');
        this.router.navigate(["login"]);
    }
}
