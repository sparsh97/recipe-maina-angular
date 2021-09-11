import { Directive, HostBinding, HostListener, OnInit } from "@angular/core";
@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

    @HostBinding('class.show') isOpen = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    ngOnInit(): void {

    }
    
}