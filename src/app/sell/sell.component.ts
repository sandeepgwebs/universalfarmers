import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { RouterExtensions } from "nativescript-angular/router";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { ImageAsset } from "tns-core-modules/image-asset";
import { takePicture, requestPermissions, isAvailable } from "nativescript-camera";
import * as imagepicker from "nativescript-imagepicker";
import { Image } from "tns-core-modules/ui/image";
import * as dialogs from "tns-core-modules/ui/dialogs";

let context = imagepicker.create({
    mode: "single" // use "multiple" for multiple selection
});
@Component({
    selector: "Sell",
    moduleId: module.id,
    templateUrl: "./sell.component.html"
})
export class SellComponent implements OnInit {
    imageTaken: ImageAsset;
    saveToGallery: boolean = true;
    keepAspectRatio: boolean = true;
    width: number = 50;
    height: number = 10;
    list: any;
    images: any;
     

    constructor(private router: Router, private page: Page,private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        // this.page.actionBarHidden = true;
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    camera(){     
            requestPermissions();
            let options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery
        }; 
        takePicture(options)
            .then(imageAsset => {
            this.imageTaken = imageAsset;
            console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
            }).catch(err => {
            console.log(err.message);
        });
    }
    onCheckForCamera() {
        let isCameraAvailable = isAvailable();
        console.log("Is camera hardware available: " + isCameraAvailable);
    }

    uploads(){      
        let context = imagepicker.create({
            mode: 'multiple' 
        });
        context.authorize()
        .then(function() {
            return context.present();
        })
        .then(selection => {
            selection.forEach(selected => {           
                console.log(JSON.stringify(selected));
                let img = new Image();
                img.src = selected;
                this.images.push(img);
        });  
        }).catch(function (e) {
            console.log('error in selectPicture', e);
        });
    }

    option(){
        dialogs.action({
            message: "Select option",
            cancelButtonText: "Cancel",
            actions: ["Camera", "Gallery"]
        }).then(result => {
            console.log("Dialog result: " + result);
            if(result == "Camera"){
                this.camera();
            }else if(result == "Gallery"){
                this.uploads();
            }
        });
    }

    navigateToFeatured(args: EventData) {
        alert('hhlo');
        const button: Button = <Button>args.object;
        const page: Page = button.page;
        page.frame.navigate("sellitem");
    }
    //this.routerExtensions.navigate(["/sellitem"]);
    
    goSettings() {
        alert('hhlo');
        this.router.navigate(["/sellitem"]);
    }

    public login() {
        this.router.navigate(["sellitem"]);
    }
}
 