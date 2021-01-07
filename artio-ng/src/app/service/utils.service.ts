import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { image } from "../model/image.const"

@Injectable({
    providedIn: 'root',
})

export class UtilsService {

    constructor(private sanitizer: DomSanitizer) { }

    getImage(encodedImage: string) {
        console.log(encodedImage);
        return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${image}`);
    }
}