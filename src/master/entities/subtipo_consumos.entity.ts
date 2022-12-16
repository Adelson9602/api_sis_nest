import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SubtiposConsumos {
  @PrimaryGeneratedColumn('increment')
  idSubtipoConsumos: number;

  @Column('varchar', {
    length: 128,
  })
  descripcion: number;

  @Column('int', {
    width: 2,
    comment:
      '0/1 donde 0= es que puede indicar cantidades al momento de facturar, y 1 por defecto va 1 en la cantidad',
  })
  factor: number;

  @Column('varchar', {
    length: 16,
  })
  centroCostros: string;

  @Column('varchar', {
    length: 16,
  })
  codigoTelmex: string;

  @Column('varchar', {
    length: 16,
  })
  grupoTelmex: string;

  @Column('int', {
    width: 3,
  })
  numColumna: number;

  @Column('int', {
    width: 3,
  })
  numColumnaClaro: number;

  @Column('varchar', {
    length: 16,
  })
  idGrupoTrabajo: string;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  valorTrabajo2: number;

  @Column('varchar', {
    length: 2,
    comment: 'Modificar subconsumo de informe S/N',
  })
  modSubconsumoInfo: string;

  @Column('varchar', {
    length: 2,
    comment: 'S/N',
  })
  excluirDeInforme: string;

  @Column('varchar', {
    length: 2,
    comment: 'Excluir de Informe consumo y subconsumo',
  })
  excluirInfConsuSubcon: string;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
