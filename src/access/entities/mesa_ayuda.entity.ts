import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MesaAyuda {
  @PrimaryGeneratedColumn('increment')
  idAyuda: number;

  @Column('varchar', {
    length: 100,
    comment: 'Título de la ayuda',
  })
  titulo: string;

  @Column('varchar', {
    length: 500,
    comment: 'Breve descripción de la ayuda',
  })
  descripcion: string;

  @Column('int', {
    width: 1,
    comment: '1: Video, 2: PDF',
  })
  tipo: number;

  @Column('varchar', {
    length: 1000,
    comment: 'Url del archivo',
  })
  ruta: string;

  @Column('int', {
    width: 11,
    comment: 'Id del modulo referente a la ayuda',
  })
  idItemModulo: number;
}
