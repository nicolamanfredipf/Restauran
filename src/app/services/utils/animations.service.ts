import { ElementRef, Injectable, QueryList } from '@angular/core';
import { delay, interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {
  
  constructor() { }
  
  animate(childElementRef:QueryList<ElementRef>, animationDelay:number, animationClasses:string[]){
    // console.log("childElementRef: " ,childElementRef);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = index * animationDelay;
          
          const targetElement = entry.target as HTMLElement;
          targetElement.classList.add('animate__animated');
          animationClasses.forEach((animation) => {
            targetElement.classList.add(animation);
            // console.log("add: " ,animation);
          })
          targetElement.style.animationDelay = `${delay}s`;
          
          observer.unobserve(entry.target);
        }
      });
    });
    
    childElementRef.toArray().forEach((element) => observer.observe(element.nativeElement));
  }
  
  incrementAnimation(childElementRef:QueryList<ElementRef>, startValue: number, endValue: number, updateValue: (value: number) => void) {
    // console.log(childElementRef)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let count = startValue;
          const duration = 2000 / endValue
          const interval = setInterval(() => {
            if (count < endValue) {
              count++;
              updateValue(count);
            } else {
              clearInterval(interval);
            }
          }, duration); 
          observer.unobserve(entry.target);
        }
      });
    });
    childElementRef.toArray().forEach((element) => observer.observe(element.nativeElement));
  }
  
  animateCarousel(childElementRef: QueryList<ElementRef>, animationClasses: string[]) {
    if (childElementRef) {
      childElementRef.forEach((element) => {
        const targetElement = element.nativeElement;
        
        targetElement.classList.add('animate__animated', ...animationClasses);
        
        console.log("added: ", targetElement.classList);
        
        targetElement.addEventListener('animationend', () => {
          targetElement.classList.remove('animate__animated', ...animationClasses);
        }, { once: true });
      });
    }
  }
}

