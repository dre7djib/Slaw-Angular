import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OpenAiService } from './open-ai.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-open-ai',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './open-ai.component.html',
  styleUrls: ['./open-ai.component.css']
})
export class OpenAiComponent implements OnInit {
  public chatGPTForm: FormGroup;
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
    ];
  }

  onSubmit() {
    if (this.chatGPTForm.valid) {
      this.openAiService.getResponse(this.chatGPTForm.value.text,"thread_W40QzcN0qkrmiVm2gxoXpPzz").subscribe(
        (res: any) => {
          for (const message of res.data) {
            this.list.push({ role: message.role, response: message.content[0]['text'].value });
            console.log(`${message.role} > ${message.content[0]['text'].value}`);
          }
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
