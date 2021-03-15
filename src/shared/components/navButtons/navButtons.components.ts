import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'navButtons',
  templateUrl: './navButtons.components.html',
  styleUrls: ['./navButtons.components.css']
})

export class navButtons {
  @Input() previous: string;
  @Input() next: string;
  @Output() navigate = new EventEmitter<string>();

  handleNavigation(value: string): void {
    this.navigate.emit(value);
  }
}
