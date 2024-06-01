import { Component } from '@angular/core';
import { SidebarDashboardComponent } from '../../components/sidebar-dashboard/sidebar-dashboard.component';
import { RouterModule } from '@angular/router';
import { PdfViewerComponent } from '../../pdf-viewer/pdf-viewer.component';
import { ChatSlawyDocumentComponent } from '../../components/chat-slawy-document/chat-slawy-document.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarDashboardComponent, RouterModule,PdfViewerComponent, ChatSlawyDocumentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
