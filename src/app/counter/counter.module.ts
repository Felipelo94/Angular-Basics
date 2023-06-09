import { NgModule } from '@angular/core';
import { CounterComponentItem } from './components/counter/counter.component';

@NgModule({
  declarations: [CounterComponentItem],
  exports: [CounterComponentItem],
})
export class CounterModule {}
