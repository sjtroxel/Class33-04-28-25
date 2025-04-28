import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  private authService = inject(AuthService)
  isAuth = false

  constructor() {

  this.authService.getAuthStatus().subscribe((authStatus) => {
    this.isAuth = authStatus
  console.log(this.isAuth)
  });


}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

logoutHandler() {
  this.authService.logout()
}
}
