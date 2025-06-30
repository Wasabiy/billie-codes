import { ChangeDetectionStrategy, Component, type OnInit, signal } from '@angular/core';
import { get_factorial, initExampleRust } from 
'../public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  
  ngOnInit(): void {
      
  }
}