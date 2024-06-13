import { Component } from '@angular/core';
import { NavbarHomepageComponent } from '../../components/navbar-homepage/navbar-homepage.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarHomepageComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
