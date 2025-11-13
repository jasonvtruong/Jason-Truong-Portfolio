import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-main-page',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

}
