import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OpenAiService } from '../../open-ai/open-ai.service';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-chat-slawy-document',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MarkdownModule],
  templateUrl: './chat-slawy-document.component.html',
  styleUrl: './chat-slawy-document.component.css'
})
export class ChatSlawyDocumentComponent {
  public chatGPTForm: FormGroup;
  public isSubmitted = false;
  public list: [
    {
      role: string;
      response: string;
    }
  ];

  constructor(private openAiService: OpenAiService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.chatGPTForm = this.formBuilder.group({
      text: ['']
    });
    this.list = [
      {
        role: '',
        response: ''
      }
    ]
    this.getThreadHistory(this.list);
  }

  onSubmit() {
    if (this.chatGPTForm.valid) {
      this.openAiService.getResponse(this.chatGPTForm.value.text,"thread_V7OnAnpIKSuGxmoOduMXUiGa").subscribe(
        (res: any) => {
          const  messages = res.data.reverse();
          for (const message of messages) {
            this.list.push({ role: message.role, response: message.content[0]['text'].value });
            console.log(`${message.role} > ${message.content[0]['text'].value}`);
          }
        },
        (error) => {
          console.error('Error:', error);
        }
      );
      this.isSubmitted = true;
      return;
    }
    return;
  }

  getThreadHistory(list: { role: string; response: string; }[])  {
    this.openAiService.getThreads("thread_V7OnAnpIKSuGxmoOduMXUiGa").subscribe(
      (res: any) => {

        for (const message of res.data.reverse()) {
          list.push({ role: message.role, response: message.content[0]['text'].value });
          console.log(`${message.role} > ${message.content[0]['text'].value}`);
        }
        return list;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    
  }
}
