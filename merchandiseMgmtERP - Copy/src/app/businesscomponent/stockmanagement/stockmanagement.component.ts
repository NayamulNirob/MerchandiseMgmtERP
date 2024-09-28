import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stockmodel';
import { StockService } from '../../services/stock.service';
import { Router } from '@angular/router';
import { SubcategoryService } from '../../services/subcategory.service';
import { Product } from '../../model/sale.model';
import { WareHouse } from '../../model/warehouse.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-stockmanagement',
  templateUrl: './stockmanagement.component.html',
  styleUrl: './stockmanagement.component.css',
  providers: [DatePipe]
})
export class StockmanagementComponent implements OnInit {

  stocks: Stock[] = [];
  newStock: Stock = new Stock();

  products: Product = new Product();
  newProducts: Product[] = [];
  wareHouse: WareHouse[] = [];
  filteredStocks: Stock[] = [];


  searchTerm: string = '';
  sortBy: string = 'name'; // Default sort



  selectedFile: File | null = null;




  constructor(
    private stockService: StockService,
    private router: Router,
    private datePipe: DatePipe) { }


  formatDateTime(date: string | Date) {
    return this.datePipe.transform(date, 'd MMM, y hh:mm:ss a');
  }

  ngOnInit(): void {
    this.loadStocks();

  }

  loadStocks(): void {
    this.stockService.loadStocks().subscribe({
      next: res => {
        this.stocks = res;
        this.filterAndSortStocks();
      },
      error: error => {
        console.log(error);
        alert(error);
      }
    });
  }

  filterStocks(): void {
    this.filterAndSortStocks();
  }

  filterAndSortStocks(): void {
    // Filter the stocks based on the search term
    this.filteredStocks = this.stocks.filter(stock =>
      stock.product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      stock.wareHouse.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    // Sort the filtered stocks based on the selected sort criteria
    this.sortStocks();
  }

  sortStocks(): void {
    this.filteredStocks.sort((a, b) => {
      const aValue = a[this.sortBy as keyof Stock];
      const bValue = b[this.sortBy as keyof Stock];

      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    });
  }







  addStock(): void {
    this.stockService.addStoks(this.newStock).subscribe({
      next: res => {
        alert('Stock saved successfully!');
        this.newStock.createdAt = new Date();
        this.newStock.updatedAt = new Date();
        this.newStock = new Stock();
        this.loadStocks();
        this.resetNewStocks();
      },
      error: error => {
        console.log(error);
        alert('Stock Can not be saved of error');
      }
    });
  }

  editStock(stockId: number) {
    this.router.navigate(['updatestock', stockId]);
  }

  // deleteStock(stockId: number): void {
  //   if (stockId) {
  //     this.stockService.removeStocks(stockId).subscribe(success => {
  //       if (success) {
  //         this.loadStocks();
  //       }
  //     });
  //   }
  // }

  deleteStock(stockId: number) {
    if (confirm('Are you sure you want to delete this Stock?')) {
      if (stockId) {
        this.stockService.removeStocks(stockId).subscribe({
          next: (response) => {
            alert(response);
            this.loadStocks();
          },
          error: (error) => {
            alert('Error deleting Stock: ' + error.error);
            console.log('Error deleting Stock:', error);
          }
        });
      }
    }
  }

  calculateTotalAmount(): number {
    const total = this.newStock.product.price * this.newStock.quantity;
    const taxAmount = (total * this.newStock.product.tax) / 100;
    return total + taxAmount;
  }

  private resetNewStocks() {
    this.newStock = new Stock();
  }

}
