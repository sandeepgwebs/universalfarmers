import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule  } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FormBuilder, Validators } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        HttpClientModule
    ],
    providers: [
        FormBuilder
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [
        LoginComponent
    ]
})
export class AppModule { }
