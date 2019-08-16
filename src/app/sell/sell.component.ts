import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
@Component({
    selector: "Sell",
    moduleId: module.id,
    templateUrl: "./sell.component.html"
})
export class SellComponent implements OnInit {
    constructor(private router: Router, private page: Page) {
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        // this.page.actionBarHidden = true;
        // Use the "ngOnInit" handler to initialize data for the view.
    }
    login() {

        this.router.navigate(["login"]);
    }
}
