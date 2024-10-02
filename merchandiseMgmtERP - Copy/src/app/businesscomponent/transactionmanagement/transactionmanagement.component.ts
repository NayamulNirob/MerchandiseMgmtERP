import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';
import { Transaction } from '../../model/transactionmodel';
import { DatePipe } from '@angular/common';
import Chart from 'chart.js/auto'; 

@Component({
  selector: 'app-transactionmanagement',
  templateUrl: './transactionmanagement.component.html',
  styleUrl: './transactionmanagement.component.css',
  providers: [DatePipe]
})
export class TransactionmanagementComponent implements OnInit {


  totalAmount:number=0;
  transactions: Transaction[] = [];
  newTransaction: Transaction = new Transaction();

  constructor(
    private transactionService: TransactionsService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.loadTransactions();
    this.transactionService.getTotalTransactionAmount().subscribe({
      next:res=>{
        this.totalAmount=res
      },
      error:err=>{
        console.error(err)
      }
    });

  }


  formatDateTime(date: Date | string): string | null {
    return this.datePipe.transform(date, 'd MMM, y hh:mm:ss a');
  }


  loadTransactions(): void {
    this.transactionService.loadTransactions().subscribe({
      next: (res: Transaction[]) => {
        this.transactions = res;
        // this.updateChart(); 
      },
      error: (err) => {
        console.error('Error loading transactions:', err);
      }
    });
  }


  addTransaction(): void {
    this.newTransaction.date = new Date(); 
    this.transactionService.addTransaction(this.newTransaction).subscribe({
      next: () => {
        alert('Transaction added successfully!');
        this.loadTransactions(); 
        this.resetNewTransaction(); 
      },
      error: (err) => {
        console.error('Error adding transaction:', err);
      }
    });
  }

  
  updateTransaction(transaction: Transaction): void {
  
  }

  
  removeTransaction(transactionId: number): void {
    this.transactionService.removeTransaction(transactionId).subscribe({
      next: () => {
        alert('Transaction deleted successfully!');
        this.loadTransactions(); 
      },
      error: (err) => {
        console.error('Error deleting transaction:', err);
      }
    });
  }

  
  private resetNewTransaction(): void {
    this.newTransaction = new Transaction(); 
  }

  








  // @ViewChild('transactionChart', { static: true }) transactionChart!: ElementRef;

  // chart: any;

  // updateChart(): void {
   
  //   if (this.chart) {
  //     this.chart.destroy();
  //   }
   

  //   const ctx = this.transactionChart.nativeElement.getContext('2d');

  //   if (!ctx) {
  //     console.error('Canvas context is not available');
  //     return;
  //   }
    



  //   if (ctx) {
  //     this.chart = new Chart(ctx, {
  //       type: 'line', 
  //       data: {
  //         labels: this.transactions.map(t => this.formatDateTime(t.date)), 
  //         datasets: [{
  //           label: 'Transaction Amount',
  //           data: this.transactions.map(t => t.amount),
  //           backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //           borderColor: 'rgba(54, 162, 235, 1)',
  //           borderWidth: 1,
  //           fill: true 
  //         }]
  //       },
  //       options: {
  //         responsive: true, 
  //         scales: {
  //           y: {
  //             beginAtZero: true 
  //           }
  //         }
  //       }
  //     });
  //   }
  // }


  
}
