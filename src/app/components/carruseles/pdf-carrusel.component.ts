
import { Component, OnInit, Inject } from '@angular/core';
import * as jsPDF from 'jspdf'
@Component({
selector:'app-pdf-carrusel',
templateUrl:'./pdf-carrusel.component.html',
providers: [
{ provide: 'Window', useValue: window }
]
})
export class PdfCarruselComponent implements OnInit {
 
constructor(
@Inject('Window') private window: Window,
) { }
 
ngOnInit() {
}
 
download() {
 
var doc = new jsPDF();
doc.text(20, 20, 'Hello world!');
doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
doc.addPage();
doc.text(20, 20, 'prueb');
 
// Abrir en una nueva pagina
window.open(doc.output('bloburl'), '_blank');


}
 
}