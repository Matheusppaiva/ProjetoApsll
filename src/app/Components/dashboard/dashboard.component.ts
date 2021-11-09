
import { Reserva } from './../interface/reserva';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReservaService } from 'src/app/services/reserva.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  displayedColumns: string[] = ['Nome', 'CPF', 'Entrada', 'Saida', 'Pagamento', 'QuantidadePessoas', 'Acoes'];
  dataSource = new MatTableDataSource<any>();

  constructor(private _reservaService: ReservaService) { }

  ngOnInit(): void {

  }










}
