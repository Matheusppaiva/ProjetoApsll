import { usuario } from './../interface/cadastro';
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

  listReserva: Reserva[] = [];

  displayedColumns: string[] = ['Nome', 'CPF', 'Entrada', 'Saida', 'Pagamento', 'QuantidadePessoas', 'Acoes'];
  dataSource = new MatTableDataSource<any>();

  constructor(private _reservaService: ReservaService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.listReserva = this._reservaService.getReserva();
    this.dataSource = new MatTableDataSource(this.listReserva)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarReserva(index: number) {
    console.log(index)

    this._reservaService.eliminarReserva(index)
    this.cargarUsuarios();
  }


}
