import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { environment } from '@env/environment';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss'],
})
export class TestErrorComponent {
  validationErrors: string[] = [];
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
      error: error => {
        console.log(error);
        this.validationErrors = error.errors;
      },
    });
  }
}
