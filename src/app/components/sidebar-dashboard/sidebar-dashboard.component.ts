import { Component } from '@angular/core';
import { OpenAiService } from '../../open-ai/open-ai.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-dashboard.component.html',
  styleUrl: './sidebar-dashboard.component.css'
})
export class SidebarDashboardComponent {

  public threadList: [
    {
      thread_id: string;
      name: string;
      created: Date;
    }
  ];

  constructor(private openAiService: OpenAiService) {}

  ngOnInit() {
    this.threadList = [
      {
        thread_id: '',
        name: '',
        created: new Date()
      }
    ];
    this.getThreadsList();
  }

  getThreadsList() {
    this.openAiService.getThreadsList().subscribe(
      (res: any) => {
        for (const thread of res) {
          this.threadList.push({ thread_id: thread.threadId, name: thread.name, created: thread.created });
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
