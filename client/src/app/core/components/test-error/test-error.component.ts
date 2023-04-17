import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss'],
})
export class TestErrorComponent {
  #baseUrl = environment.apiUrl;
  #http = inject(HttpClient);

  get404Error() {
    this.#http.get(`${this.#baseUrl}/products/42`).subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
    });
  }

  get500Error() {
    this.#http.get(`${this.#baseUrl}/buggy/servererror`).subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
    });
  }

  get400Error() {
    this.#http.get(`${this.#baseUrl}/buggy/badrequest`).subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
    });
  }

  get400ValidationError() {
    this.#http.get(`${this.#baseUrl}/products/five`).subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
    });
  }
}
