import { Component } from '@angular/core';

@Component({
  selector: 'magic',
  template:'<h3>see magic {{magic}}</h3>',
  styleUrls: [ './app.component.css' ]
})
export class MagicComponent  {
  magic='blue';

}
