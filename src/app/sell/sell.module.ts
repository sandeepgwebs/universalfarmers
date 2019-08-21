import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SellRoutingModule } from "./sell-routing.module";
import { SellComponent } from "./sell.component";
import { LoginComponent } from "../login/login.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SellRoutingModule
    ],
    declarations: [
        SellComponent,
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SellModule { }
