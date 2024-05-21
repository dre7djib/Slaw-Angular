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
  public response: string;

  constructor(private openAiService: OpenAiService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.chatGPTForm = this.formBuilder.group({
      text: ['']
    });
    this.response = '';
  }

  onSubmit() {
    if (this.chatGPTForm.valid) {
      this.openAiService.getResponse(this.chatGPTForm.value.text).subscribe(
        (res: any) => {
          this.response = res.response;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
