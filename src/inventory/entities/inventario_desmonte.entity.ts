import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class InventarioDesmonte {
  @PrimaryGeneratedColumn('increment')
  idInventarioDesmonte: number;

  @Column('varchar', {
    length: 15,
  })
  idProdInvDesm: string;

  @Column('int', {
    width: 2,
  })
  idBodInvDesm: number;

  @Column('int', {
    width: 2,
  })
  idLoteInvDesm: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantInvDesm: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantInvFisicDesm: number;

  @Column('datetime')
  fechaInvFisicDesm: Date;
}
