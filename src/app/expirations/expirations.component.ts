import { Component, OnInit } from '@angular/core';
import {Expiration} from "../shared/Models/Expiration";
import {ExpirationCheckService} from "../shared/Services/expirations/expiration-check-service";

@Component({
  selector: 'app-expirations',
  templateUrl: './expirations.component.html',
  styleUrls: ['./expirations.component.scss']
})
export class ExpirationsComponent implements OnInit {
  expirations!: Map<string, Expiration[]>;
  constructor(private expirationCheckService: ExpirationCheckService) { }

  ngOnInit(): void {
    this.expirations = this.expirationCheckService.expirations;
  }
  get groups():string[]{
    return [...this.expirations.keys()];
  }
  getTotalByGroup(group: string){
    let total: number = 0;
    this.expirations.get(group)?.forEach(x => total += x.values.length);
    return total;
  }
}
