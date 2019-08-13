import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-login',
  template: `
  <StackLayout class="page" background="#4CA50D">
	<StackLayout class="page-content">
    <label text="&#xf39e; X" (tap)="close()"></label>
    
		<Image class="images" src="~/app/images/logo.png"></Image>
		<StackLayout class="items">      
			<StackLayout margin="10"  class="form" >
				<Label class="notes" text=""></Label>
				<StackLayout class="input-field">
					<textField required class="input-email" hint="Email" keyboardType="email" style.placeholderColor="#fff"></textField>
				</StackLayout>
				<StackLayout class="input-field">
					<textField required class="input-email" hint="Password" keyboardType="email" secure="true" style.placeholderColor="#fff"></textField>
				</StackLayout>  
				<button text="Log in" class="sign-btn" (tap)="login()"></button>    
        <Label class="notesys" text="Forgot password?"></Label>    
			</StackLayout>
		</StackLayout>       
  </StackLayout>
  <Label class="notesy" verticalAlignment="bottom" text="Don't have a account? Sign up"></Label>
</StackLayout>`
})
export class LoginComponent implements OnInit {
   

  constructor(private params: ModalDialogParams, private page: Page, private router: RouterExtensions, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    //alert('ggf');
  }
  close() {
		this.params.closeCallback('success');
	}
}
