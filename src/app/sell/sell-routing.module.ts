import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SellComponent } from "./sell.component";
import { LoginComponent } from "../login/login.component";

const routes: Routes = [
    { path: "default", component: SellComponent },
    { path: "login", component: LoginComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SellRoutingModule { }
