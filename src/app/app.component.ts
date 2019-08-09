import { Component, OnInit } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
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
