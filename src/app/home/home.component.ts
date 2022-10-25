import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from 'src/services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from 'src/services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from 'src/services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  commentValue: string | undefined;
  promotion: Promotion;
  leader: Leader;
  remaining: number;
  constructor(private dishService: DishService,
              private promotionService: PromotionService,
              private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.dishService.getFeaturedDish()
      .subscribe((dish) => this.dish = dish);

    this.promotionService.getFeaturedPromotion()
      .then((promotion) => this.promotion = promotion);

    this.leaderService.getFeaturedDishLeader()
      .then((leader) => this.leader = leader);
  }

  post() {
    const val = document.querySelector('textarea')?.value;
    this.commentValue = val;
  }

  calculateRemaining() {
    let element = document.getElementById("shruti") as HTMLInputElement;
    let p = document.getElementById("remaining") as HTMLInputElement;
    let length = element.value.trim().length;
    let maxLength = element.maxLength;
    p.innerText= `Remaining characters ${maxLength - length} / 100`;
  }
}