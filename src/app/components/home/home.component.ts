import { Component } from '@angular/core';
import { NavbarHomepageComponent } from '../navbar-homepage/navbar-homepage.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { StatHomeSectionComponent } from '../stat-home-section/stat-home-section.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarHomepageComponent, HeroSectionComponent,StatHomeSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
