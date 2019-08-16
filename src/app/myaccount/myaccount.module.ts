import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MyaccountRoutingModule } from "./myaccount-routing.module";
import { MyaccountComponent } from "./myaccount.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MyaccountRoutingModule
    ],
    declarations: [
        MyaccountComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [
        
    ]
})
export class MyaccountModule { }
