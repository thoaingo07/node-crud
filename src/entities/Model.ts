import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Model {

    @PrimaryGeneratedColumn({name:"model_id"})    
    modelId: number;

    @Column()
    name: string;

    @Column()
    apartment: string;

    @Column({name:"min_price"})    
    minPrice: number;

    @Column({name:"max_price"})    
    maxPrice: number;

    @Column({name:"updated_date"})    
    updatedDate: Date;

}