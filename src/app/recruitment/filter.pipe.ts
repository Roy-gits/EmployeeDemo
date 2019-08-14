import { Pipe, PipeTransform } from '@angular/core';
import { Candidates } from './candidates';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Candidates[], gd: boolean, tech:boolean, hr:boolean, final:boolean): any {
    return value.filter(x => {
      if ( gd && x.status === 'gd') {
          return false;
         }
      if ( tech && x.status === 'tech') {
           return false;
         }
      if (hr && x.status === 'hr') {
           return false;
         }
      if ( final && x.status === 'final') {
           return false;
         }
         return true;
        });


          // value.filter(y => y.status == 'tech' ),
          // value.filter(z => z.status == 'hr' ),
          // value.filter(a => a.status == 'final' );
  }

// transformtech(value: Candidates[], args: string);: any; {
//     return value.filter(y => y.status === 'tech');
//           // value.filter(y => y.status == 'tech' ),
//           // value.filter(z => z.status == 'hr' ),
//           // value.filter(a => a.status == 'final' );
//   }


}
