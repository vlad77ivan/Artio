import { Component, OnInit } from '@angular/core';
import { Business } from '../../model/business'
@Component({
    selector: 'explore-page-component',
    templateUrl: './explore-page.component.html',
    styleUrls: ['./explore-page.component.scss']
})
export class ExplorePageComponent implements OnInit {
    public showBusiness = true;
    public businessToShow = {
        username: "socului_rulz",
        companyName: "Shaormeria Socului",
        profilePhoto: "a",
        description: "Buna ziua avem shaorma fffffff mare si ffff buna si fffffff mare si ffff buna si fffffff mare si ffff buna si sarmale si cripsy si sarmale si cripsy si sarmale si cripsy si sarmale si cripsy si tot ce vrea plt hai barosane sau comanda la numarul 0792 constipatie amandoi"
    } as Business;

    constructor() {
    }

    ngOnInit() {
    }

}
