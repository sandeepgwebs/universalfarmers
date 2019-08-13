import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import { RouterExtensions } from "nativescript-angular/router";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<IDataItem>;
     
    constructor(private _itemService: DataService,private routerExtensions: RouterExtensions) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
    
    login(){
        alert('fgjhg');
        this.routerExtensions.navigate(["login"]);
        
    }

    navigateToLogin(){
        //const button: Button = <Button>args.object;
    //const page: Page = button.page;
    this.routerExtensions.navigate(["login"]);
    }
}
