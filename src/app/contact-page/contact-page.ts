import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-contact-page',
  imports: [
    NgOptimizedImage,
    MatIcon
  ],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {

}
