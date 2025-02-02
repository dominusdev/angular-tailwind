import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgForOf, TitleCasePipe } from '@angular/common';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TitleCasePipe, NgForOf, NgClass],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  @Input() titles: Array<string> = [];
  @Input() isLoading: boolean = false;


  constructor(private tableService: TableService) {
  }

  ngOnInit(): void {
    // Se inscreve no estado compartilhado
    this.tableService.isLoading$.subscribe((value) => {
      this.isLoading = value;
    });
  }

}
