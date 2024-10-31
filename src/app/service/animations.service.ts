import { ElementRef, Injectable, QueryList } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor() { }

  animate(childElementRef:QueryList<ElementRef>, animationDelay:number, animationClasses:string[]){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = index * animationDelay;
          
          const targetElement = entry.target as HTMLElement;
          targetElement.classList.add('animate__animated');
          animationClasses.forEach((animation) => {
            targetElement.classList.add(animation);
          })
          targetElement.style.animationDelay = `${delay}s`;
          
          observer.unobserve(entry.target);
        }
      });
    });

    childElementRef.toArray().forEach((element) => observer.observe(element.nativeElement));
  }

  incrementAnimation(startValue: number, endValue: number, updateValue: (value: number) => void) {
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
  }

}
