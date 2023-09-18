import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent {
  constructor(private router: Router) {}

  showSplashScreen = true;

  navigateToHome() {
    console.log("HI");
    // this.showSplashScreen = false; // hide splash screen
    this.router.navigate(['/home']);
  }
}
