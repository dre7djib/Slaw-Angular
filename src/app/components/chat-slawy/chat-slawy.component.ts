import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OpenAiService } from '../../open-ai/open-ai.service';
import { MarkdownModule } from 'ngx-markdown';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-chat-slawy',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MarkdownModule],
  templateUrl: './chat-slawy.component.html',
  styleUrl: './chat-slawy.component.css'
})
export class ChatSlawyComponent implements OnInit, AfterViewInit{
  public chatGPTForm: FormGroup;
  public isSubmitted = false;
  public list: [
    {
      role: string;
      response: string;
    }
  ];
  public thread_id: string;
  public photo: string;

  constructor(private openAiService: OpenAiService, private formBuilder: FormBuilder, private route: ActivatedRoute,private userService: UsersService) {}

  ngOnInit() {
    this.thread_id = this.route.snapshot.paramMap.get('thread_id')!;
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
      this.list.push({ role: 'user', response: this.chatGPTForm.value.text })
      this.openAiService.getResponse(this.chatGPTForm.value.text,this.thread_id).subscribe(
        (res: any) => {
          const  messages = res.data;
          this.list.push({ role: messages[0].role, response: messages[0].content[0]['text'].value });
        },
        (error) => {
          console.error('Error:', error);
        }
      );
      this.isSubmitted = true;
      this.chatGPTForm.reset();
      return;
    }
    return;
  }

  getThreadHistory(list: { role: string; response: string; }[])  {
    this.openAiService.getThreads(this.thread_id).subscribe(
      (res: any) => {
        for (const message of res.data.reverse()) {
          list.push({ role: message.role, response: message.content[0]['text'].value });
        }
        return list;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  getUserPhoto() {
    this.userService.getUsers().subscribe(
      (res: any) => {
        this.photo = res[0].photo;
      }
    );
  }

  @ViewChildren('itemElement') items: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.items.changes.subscribe(t => {

      this.scrollToBottom();
    });
  }

  scrollToBottom() {
    setTimeout(() => {
      const lastItem: ElementRef = this.items.last;
      if (lastItem) {
        lastItem.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }, 200);
  }
}
