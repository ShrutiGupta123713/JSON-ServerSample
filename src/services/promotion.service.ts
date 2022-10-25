import { Injectable } from '@angular/core';
import { Promotion } from 'src/app/shared/promotion';
import { PROMOTIONS } from 'src/app/shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(PROMOTIONS);
      }, 2000);
    })
  }

  getPromotion(id: string): Promise<Promotion> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
      }, 2000);
    })
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
      }, 2000);
    })
  }
}
