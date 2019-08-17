import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import { RouterExtensions } from "nativescript-angular/router";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums";
import { HttpClient } from "@angular/common/http";
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<IDataItem>;
    currentloc: any = "chandigarh";
    constructor(private _itemService: DataService,private routerExtensions: RouterExtensions, private http: HttpClient) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
    currentlocation() {
        enableLocationRequest(true);
        getCurrentLocation({
            desiredAccuracy: Accuracy.high,
            timeout: 5000
         })
            .then((location) => {
                console.log("Location received: " + JSON.stringify(location));
                // let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + location.latitude + "," + location.longitude + "&sensor=true&key=AIzaSyBLNhcYJp1lQppXEZpb-KOn1iYV6ucj--0";
                let url = "https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox="+location.latitude+"%2C"+location.longitude+"%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=tYzeEs9TXuZGJeD1l223&app_code=RuPFmCOTA0PNzsPsl2WlkQ";
                console.log(url);
                this.http.get(url)
                    .subscribe((results) => {
                            co[9-']=============\nsole.log("address1 " + JSON.stringify(results.Response.View[0].Result[0].Location.Address.Label));
                            if (results.Response.View[0].Result[0].Location.Address.Label) {
                                this.currentloc = results.Response.View[0].Result[0].Location.Address.Label;
                            } else {
                                //this.currentloc = results.error_message;
                            }
                    }, 
                    (error) => {
                        console.log("ERROR: ", error);
                    });
            }).catch((error) => {
                console.log("Location error received: " + error);
                alert("Location error received: " + error);
            });
    }
    login(){
        this.routerExtensions.navigate(["login"]);
        
    }

    navigateToLogin(){
        //const button: Button = <Button>args.object;
    //const page: Page = button.page;
    this.routerExtensions.navigate(["login"]);
    }
}
