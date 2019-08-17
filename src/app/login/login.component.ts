import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { User } from "../models/user";
import { HttpClient } from "@angular/common/http";
const Sqlite = require("nativescript-sqlite");
@Component({
	selector: 'ns-login',
	templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
	user: User;
	APIURL: string = "https://mandisuppliers.com/farmers/api/";
	isBusy = false;
	people: Array<any>;

	private database: any;
	constructor(private params: ModalDialogParams, private page: Page,
		private router: RouterExtensions, private activeRoute: ActivatedRoute, private http: HttpClient) {
		this.user = new User();
		this.user.email = "";
		this.user.password = "";
	}

	async login() {
		this.isBusy = true;
		await this.http.post(this.APIURL + "auth/login", {
			email: this.user.email,
			password: this.user.password
		}).subscribe((data) => {
			alert(JSON.stringify(data));
			(new Sqlite("my.db")).then((db) => {
				db.execSQL("CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, name TEXT, username TEXT, token TEXT)").then((id) => {
					this.database = db;
					var fetchresult = this.fetch();
					console.log("res", fetchresult);
				// 	 if(fetchresult.length==0) {
				// 	this.database.execSQL("INSERT INTO user (email, username, token) VALUES (?, ?, ?)", [data.email, "", ""]).then(id => {
				// 		console.log("INSERT RESULT", id);
				// 		this.fetch();
				// 	}, (error) => {
				// 		console.log("INSERT ERROR", error);
				// 	});
				// } else {

				// }
				},
				(error) => {
					console.log("CREATE TABLE ERROR", error);
				});
			},
			(error) => {
				console.log("OPEN DB ERROR", error);
			});
			this.isBusy = false;
			this.close();
		},
			(error) => {
				alert(JSON.stringify(error.error.message));
				this.isBusy = false;
			});

	}
	fetch() {
		this.database.all("SELECT * FROM user").then((rows) => {
            this.people = [];
            for(var row in rows) {
                this.people == rows
				console.log("users ",rows);
				
			}
			return rows;
			
		},
		(error) => {
            console.log("SELECT ERROR", error);
        });
	}
	async signup() {
		if (this.user.password == this.user.cpassword) {
			this.isBusy = true;
			await this.http.post(this.APIURL + "auth/register", {
				email: this.user.email, username: this.user.username,
				password: this.user.password
			}).subscribe((data) => {
				alert("success");
				this.isBusy = false;
				this.close();
			},
				(error) => {
					this.isBusy = false;
					alert("failure" + JSON.stringify(error));
				});
		}
		else {
			alert("Password and confirm Password should be same!");
		}

	}
	ngOnInit() { }
	close() {
		this.params.closeCallback("success");
	}
}
