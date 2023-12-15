import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  orders: any[] = []; // Assume you have an array of orders
  jsonServerUrl = 'http://localhost:3000/order';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fetchCard();
    this.fetchGraph();
  }
  fetchCard(): void {
    // Make an HTTP GET request to your JSON server
    this.http.get<any[]>(`${this.jsonServerUrl}`).subscribe(
      (data: any[]) => {
        this.orders = data;
        this.cdr.detectChanges(); // Trigger change detection
        // ... rest of the code
      },
      error => {
        console.error('Error fetching orders:', error);
      }
    );
  }
  fetchGraph(): void {
    const apiUrl = 'http://localhost:3000/order'; // Update if needed
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.orders = data;
        console.log('Fetched orders:', this.orders);

        // Log data for the graph
        const graphData = this.orders.map(order => ({ type: order.type, amount: order.amount }));
        console.log('Data for the graph:', graphData);

        // Additional logic or function calls for graph rendering can be added here
      },
      (error) => {
        if (error.status === 404) {
          console.error('Orders not found. Ensure that your JSON server and data are correctly set up.');
        } else {
          console.error(`Error fetching orders:`, error);
        }
      }
    );
  }
  
  getUniqueCustomerCount(): number {
    const uniqueCustomers = new Set(this.orders.map(order => order.firstName));
    return uniqueCustomers.size;
  }

  getTotalOrders(): number {
    return this.orders.length;
  }

  getPercentageByType(type: string): number {
    const ordersOfType = this.orders.filter(order => order.type === type);
    return (ordersOfType.length / this.orders.length) * 100;
  }

  getBarTitle(orderType: string): string {
    return `${orderType} ${this.getPercentageByType(orderType)}%`;
  }
}

