import { Component, OnInit } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
const Sqlite = require("nativescript-sqlite");
@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    database: any;
    people: Array<any>;
    constructor() {
        // Use the component constructor to inject providers.
        this.people = [];
        new Sqlite("my.db").then((db) => {
            db.execSQL("CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT, token TEXT)")
            .then((id) => {
                this.database = db;
                alert("db created " + JSON.stringify(this.database));
            },
            (error) => {
                alert("CREATE TABLE ERROR" + JSON.stringify(error));
            });
        },
        (error) => {
            alert("OPEN DB ERROR" + JSON.stringify(error));
        });
    }
    onSelectedIndexChanged(args: SelectedIndexChangedEventData): void {
        console.log(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`);
    }
    ngOnInit(): void {
        // Init your component properties here.
    }

    getIconSource(icon: string): string {
        const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

        return iconPrefix + icon;
    }
}
