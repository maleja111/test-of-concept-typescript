import { Component, Input, HostListener, Inject } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { Subscription } from 'rxjs/Subscription';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected searchStr: string;
  protected captain: string;
  protected dataService: CompleterData;
  protected searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];
  protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett'];
  public isScrolled = false;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private completerService: CompleterService) {
    this.dataService = completerService.local(this.searchData, 'color', 'color');
  }
  @HostListener('document:scroll', ['$event'])
  onWindowScroll($event) {
    let count = 0;
    count += 1;
    debugger
    console.log('Scrolling', count);

    const number = this.document.body.scrollTop;
    if (number > 150) {

      this.isScrolled = true;
    } else if (this.isScrolled && number < 10) {

      this.isScrolled = false;
    }
  }
}
