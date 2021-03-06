import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
@Component({
  selector: 'deed',
  template: `<div [ngClass]="deed.type" (click)="clickDeed()"><ng-content></ng-content></div>`,
  styles: [`.bad{ color:red;} .good{color:green;}`]
})
export class DeedComponent  {
  @Input() deed: any;
  @Output() onDeedClick = new EventEmitter();
  clickDeed() {
    this.onDeedClick.emit();
  }
}

@Component({
  selector: 'deeds',
  template: `
     <h1>Deeds:</h1>
     <div *ngIf="!deeds || deeds.length ===0">No deeds recorded for this hero</div>
     <deed *ngFor="let deed of deeds" [deed]="deed" (onDeedClick)="deedClicked()">{{deed.desc}}<span *ngIf="deed.type==='bad'">🍔</span></deed>
  `,
  styles: [``]
})
export class DeedsComponent  {
  @Input() deeds: any[];
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero =>  this.deeds = hero.deeds);
  }

  deedClicked() {
    alert('deed clicked!!!')
  }
}