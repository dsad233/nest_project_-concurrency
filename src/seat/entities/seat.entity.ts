import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name : 'seats'
})
export class Seat {
    @PrimaryGeneratedColumn()
    seatId : number


    @Column()
    userId : number

    @Column({ type : 'varchar'})
    seatbase : number

    @Column({ type : 'varchar'})
    seatprice : number

}
