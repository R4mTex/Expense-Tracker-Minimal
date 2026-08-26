import { Injectable } from '@nestjs/common';

export interface fakerInterface {
  id: number;
  titre: string;
  amount: number;
  currency: string;
}
/*
  description: string;
  category: string;
  image: string;
  status: string;
  created_at: string;
*/
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAmounts(): fakerInterface[] {
    const data = [
      {
        id: 1,
        titre: 'Loyer',
        amount: 450,
        currency: 'EUR',
      },
      {
        id: 2,
        titre: 'Food',
        amount: 125,
        currency: '$',
      },
    ];
    return data;
  }
}
