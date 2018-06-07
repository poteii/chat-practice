import { Message } from './../../models/messages/message.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'chat-message',
  templateUrl: 'chat-message.html'
})
export class ChatMessageComponent {

  @Input() chatMessage: Message;

  @Input() chatIndex: number;

  constructor() {
    console.log('Hello ChatMessageComponent Component');
  }

}
