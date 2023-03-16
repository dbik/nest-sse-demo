import { Controller, Get, Sse } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';
import { AppService } from './app.service';

interface MessageEvent {
  data: string | object;
}

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Sse('cat')
  sendEvent(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((num: number) => ({
        data: 'cat' + num,
      })),
    );
  }

  @Sse('dog')
  sendEvent1(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((num: number) => ({
        data: 'dog' + num,
      })),
    );
  }

  @Sse('mouse')
  sendEvent2(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((num: number) => ({
        data: 'mouse' + num,
      })),
    );
  }

  @Sse('horse')
  sendEvent3(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((num: number) => ({
        data: 'horse' + num,
      })),
    );
  }

  @Sse('elephant')
  sendEvent4(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((num: number) => ({
        data: 'elephant' + num,
      })),
    );
  }

  @Sse('dino')
  sendEvent5(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((num: number) => ({
        data: 'dino' + num,
      })),
    );
  }
}
