import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const listOption = document.querySelector('#pages-list') as HTMLElement;
    const listItems = document.querySelectorAll('#pages-list .page-list-item');
    const listBackDrop = document.querySelector('#backdrop-list') as HTMLElement;

    const menuBackdrop = document.querySelector('#menu-backdrop') as HTMLElement;
    const currActiveElement = document.querySelector('.active') as HTMLElement;

    listBackDrop.style.setProperty('--left-pos-back-list',`${listOption.getBoundingClientRect().left}px`);

    listItems.forEach(item => {
      item.addEventListener('mouseenter', (e: any)=>{
        const {left, top, width, height} = item.getBoundingClientRect();
        menuBackdrop.style.setProperty("--left-pos",`${left}px`);
        menuBackdrop.style.setProperty("--top-pos",`${top}px`);
        menuBackdrop.style.setProperty("--item-width",`${width}px`);
        menuBackdrop.style.setProperty("--item-height",`${height}px`);
      })

      item.addEventListener('mouseleave', (e:any)=>{
        menuBackdrop.style.setProperty("--left-pos",`${currActiveElement.getBoundingClientRect().left}px`);
        menuBackdrop.style.setProperty("--top-pos",`${currActiveElement.getBoundingClientRect().top}px`);
        menuBackdrop.style.setProperty("--item-width",`${currActiveElement.getBoundingClientRect().width}px`);
      })
    })
  }

  holaMundo(event: any): void {
    console.log('here ',event.target)
  }

  @HostListener('window:resize',['$event'])
  onResize(event: Event): void{
    const listOption = document.querySelector('#pages-list') as HTMLElement;
    const listBackDrop = document.querySelector('#backdrop-list') as HTMLElement;
    const menuBackdrop = document.querySelector('#menu-backdrop') as HTMLElement;
    const currActiveElement = document.querySelector('.active') as HTMLElement;
    menuBackdrop.style.transitionDuration='0s';
    listBackDrop.style.setProperty('--left-pos-back-list',`${listOption.getBoundingClientRect().left}px`);
    menuBackdrop.style.setProperty("--left-pos",`${currActiveElement.getBoundingClientRect().left}px`);
    menuBackdrop.style.setProperty("--top-pos",`${currActiveElement.getBoundingClientRect().top}px`);
    menuBackdrop.style.setProperty("--item-width",`${currActiveElement.getBoundingClientRect().width}px`);
    menuBackdrop.style.transitionDuration='0.5s';
  }

}
