import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SedexService {
    constructor(private http: HttpClient) { }

    public calcularFrete(cep: string): Observable<any> {
        const url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPreco';

        const params = new HttpParams();
        params.set("nCdServico", "04014");
        params.set("sCepOrigem", "90440011");
        params.set("sCepDestino", cep.replace('-', '').replace('.', ''));
        params.set("nVlPeso", "1");
        params.set("nCdFormato", "1");
        params.set("nVlComprimento", "1");
        params.set("nVlAltura", "1");
        params.set("nVlLargura", "1");
        params.set("nVlDiametro", "1");

        return this.http.post(url, { responseType: 'text', params })
            .pipe(
                map((xmlString: string) => {
                    const asJson = this.xmlStringToJson(xmlString);
                    return asJson;
                }),
                catchError((err) => {
                    console.warn('INT ERR:', err);
                    return err;
                })
            );
    }

    private xmlStringToJson(xml: string) {
        const oParser = new DOMParser();
        const xmlDoc = oParser.parseFromString(xml, "application/xml");
        return this.xmlToJson(xmlDoc);
    }

    xmlToJson(xml) {
        // Create the return object
        var obj = {};

        if (xml.nodeType == 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
                obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                }
            }
        } else if (xml.nodeType == 3) { // text
            obj = xml.nodeValue;
        }

        // do children
        if (xml.hasChildNodes()) {
            for (var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof (obj[nodeName]) == "undefined") {
                    obj[nodeName] = this.xmlToJson(item);
                } else {
                    if (typeof (obj[nodeName].push) == "undefined") {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(this.xmlToJson(item));
                }
            }
        }
        return obj;
    }
}