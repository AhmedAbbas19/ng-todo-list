import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const DEFAULT_DIRECTION = 'ltr';

@Injectable({
    providedIn: 'root'
})
export class DirectionService {
    private currentDirectionSubject = new BehaviorSubject(DEFAULT_DIRECTION);

    init() {
        const dir = this.getStoredDirection();
        this.setDirection(dir);
    }

    setDirection(dir: string) {
        this.currentDirectionSubject.next(dir);
        localStorage.setItem('dir', dir);
    }

    getDirection() {
        return this.direction$.getValue();
    }

    switchDirection() {
        const otherDirection = this.direction$.getValue() === 'ltr' ? 'rtl' : 'ltr';
        this.setDirection(otherDirection);
    }

    get direction$() {
        return this.currentDirectionSubject;
    }

    private getStoredDirection(): string {
        const storedDirection = localStorage.getItem('dir');
        return storedDirection || DEFAULT_DIRECTION;
    }
}
