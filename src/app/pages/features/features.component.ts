import { Component } from '@angular/core';
import { NavbarHomepageComponent } from '../../components/navbar-homepage/navbar-homepage.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { FeaturesHeroSectionComponent } from '../../components/features-hero-section/features-hero-section.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NavbarHomepageComponent, FeaturesHeroSectionComponent, FooterComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

}
