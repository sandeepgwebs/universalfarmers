import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import { LoginComponent } from "../login/login.component";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Search",
    moduleId: module.id,
    providers: [ModalDialogService],
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    constructor(private modalService: ModalDialogService, private viewContainerRef: ViewContainerRef,
        private page: Page) {
        // Use the constructor to inject services.
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        // Use the "ngOnInit" handler to initialize data for the view.
    }
    showModal() {
        const options: ModalDialogOptions = {
            fullscreen: true,
            context: {},
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(LoginComponent, options);
    }

}
