import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(homeTab:home/default//sellTab:sell/default//myaccountTab:myaccount/default)",
        pathMatch: "full"
    },
    {
        path: "home",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/home/home.module#HomeModule",
        outlet: "homeTab"
    },
    {
        path: "sell",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/sell/sell.module#SellModule",
        outlet: "sellTab"
    },
    {
        path: "myaccount",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/myaccount/myaccount.module#MyaccountModule",
        outlet: "myaccountTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
