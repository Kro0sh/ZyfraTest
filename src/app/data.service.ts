import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from './item.model';
import {catchError, map} from 'rxjs/operators';
import {Subject, throwError} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentNode = new Subject();

  constructor(private http: HttpClient) {}

  // getData() {
  //   return this.http.get<Item[]>('assets/data.json').pipe(
  //     map((responseData: Item[]) => {
  //       responseData.map((el: Item) => {
  //         for (const item of responseData) {
  //           if (el.id === item.parentId) {
  //             el.children.push(item);
  //           }
  //         }
  //         return responseData;
  //       });
  //       return responseData.filter((el: Item) => !el.parentId);
  //     }),
  //     catchError((errorResponse) => {
  //       return throwError(errorResponse);
  //     })
  //   );
  // }

  getData() {
    return this.http.get<Item[]>('assets/data.json').pipe(
      map((responseData: Item[]) => {
        return responseData.filter((el: Item) => !el.parentId);
      }),
      catchError((errorResponse) => {
        return throwError(errorResponse);
      })
    );
  }

  getLazyItems(id: number) {
    return this.http.get<Item[]>('assets/data.json').pipe(
      map((responseData: Item[]) => {
        return responseData.filter((el: Item) => id === el.parentId);
      }),
      catchError((errorResponse) => {
        return throwError(errorResponse);
      })
    );
  }

  selectNode(node: Item): void {
    this.currentNode.next([node]);
  }

}
