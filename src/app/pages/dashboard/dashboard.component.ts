import { Component } from '@angular/core';
import { SidebarDashboardComponent } from '../../components/sidebar-dashboard/sidebar-dashboard.component';
import { RouterModule } from '@angular/router';
import { ChatSlawyComponent } from '../../components/chat-slawy/chat-slawy.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarDashboardComponent, RouterModule,ChatSlawyComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
