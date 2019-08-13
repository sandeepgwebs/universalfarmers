import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    constructor(private router:Router,private page:Page) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(){
        //this.page.actionBarHidden = true;
        // Use the "ngOnInit" handler to initialize data for the view.
    }
    public login(){    
        this.router.navigate(["login"]);
    }
}
