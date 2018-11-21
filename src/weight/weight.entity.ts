import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Column,
    UpdateDateColumn,

} from 'typeorm';

@Entity('weight')
export class WeightEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @Column({type: "float"})
    weight: number;
}

