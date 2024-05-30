import { Component } from '@angular/core';
import { NavbarHomepageComponent } from '../../components/navbar-homepage/navbar-homepage.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { StatHomeSectionComponent } from '../../components/stat-home-section/stat-home-section.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarHomepageComponent, HeroSectionComponent,StatHomeSectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
