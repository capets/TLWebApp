import { Component, OnInit } from '@angular/core';
import {ITitleComponent} from "../shared/Interfaces/ITitleComponent";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, ITitleComponent {

  constructor() { }

  ngOnInit(): void {
  }

  get Title(): string {
    return "Clienti";
  }

}
