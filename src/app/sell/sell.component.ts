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
    isBusy: boolean = false;
    APIURL: string = "https://mandisuppliers.com/farmers/api/";
    category: any;
    constructor(private router: Router, private page: Page, private http: HttpClient) {
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        // this.page.actionBarHidden = true;
        // Use the "ngOnInit" handler to initialize data for the view.
        this.isBusy = true;
        this.http.get(this.APIURL + "getcategories").subscribe((data) => {
            this.category = data;
        });
    }
    getsubcategory(id) {
        alert(id);
    }
    login() {

        this.router.navigate(["login"]);
    }
}
