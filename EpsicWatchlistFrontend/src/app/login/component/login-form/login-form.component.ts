import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Login } from '../../model/login';
import { User } from '../../model/user';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

	public login: Login = { username: "test", password: "1234" };
	public message: string = "";

	constructor(private _authService: AuthService, private router: Router) { }

	ngOnInit(): void {
	}

	onLogin(): void {

		this._authService.login(this.login).subscribe(
			data => {
				this.message = "";
				this._authService.user = data as User;
				this.router.navigate(['watchlist']);
			},
			error => {
				this.message = "Echec de l'authentification..."
			}
		);
	}
}
