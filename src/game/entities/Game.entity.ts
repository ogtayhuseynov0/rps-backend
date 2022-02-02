import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('game')
export class GameEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  uid: string;

  @Column({ default: 0 })
  userPoint: number;

  @Column({ default: 0 })
  computerPoint: number;

  @Column({ nullable: true, default: null })
  user: string;

  @Column({ default: 1, comment: '1 for started, 0 for finished' })
  status: number;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
