import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService } from "../shared/data.service";
@Component({
    selector: "Sell",
    moduleId: module.id,
    templateUrl: "./sell.component.html"
})
export class SellComponent implements OnInit {
    isBusy: boolean = false;
    category: any;
    constructor(private router: Router, private page: Page, private http: HttpClient,
                private routerExtensions: RouterExtensions, private dataservice: DataService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        // this.page.actionBarHidden = true;
        // Use the "ngOnInit" handler to initialize data for the view.
        this.isBusy = true;
        this.http.get(this.dataservice.API_URL + "getcategories").subscribe((data: any) => {
            this.category = data.data;
        });
    }
    getsubcategory(id) {
        alert(id);
    }
    donav(){
        // alert('asdf');
        this.routerExtensions.navigate(['/login'], { clearHistory: true }).then((success) =>{
            console.log('success');
        },
        (err) => {
            console.log('error');
        });
    }
    login() {

        this.router.navigate(["login"]);
    }
}
