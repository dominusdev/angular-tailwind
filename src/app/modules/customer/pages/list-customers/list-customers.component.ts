import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { TableService } from '../../../../shared/services/table.service';

@Component({
  selector: 'app-list-customers',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './list-customers.component.html',
  styleUrl: './list-customers.component.scss',
})
export class ListCustomersComponent implements OnInit {
  isLoaded = false;

  constructor(private tableService: TableService) {
  }

  ngOnInit(): void {
    setTimeout(() => this.tableService.isLoading(true), 5000);
  }
}
