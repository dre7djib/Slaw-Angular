import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OpenAiService } from './open-ai.service';

@Component({
  selector: 'app-open-ai',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './open-ai.component.html',
  styleUrls: ['./open-ai.component.css']
})
export class OpenAiComponent implements OnInit {
  public chatGPTForm: FormGroup;
  public role: string;
  public response: string;

  constructor(private openAiService: OpenAiService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.chatGPTForm = this.formBuilder.group({
      text: ['']
    });
    this.role = '';
    this.response = '';
  }

  onSubmit() {
    if (this.chatGPTForm.valid) {
      this.openAiService.getResponse(this.chatGPTForm.value.text).subscribe(
        (res: any) => {
          for (const message of res.data.reverse()) {
            console.log(`${message.role} > ${message.content[0]['text'].value}`);
            this.role = message.role;
            this.response = message.content[0]['text'].value;
          }

        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
