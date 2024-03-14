
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name : 'seats'
})
export class Seat {
    @PrimaryGeneratedColumn()
    seatId : number;

    @ManyToOne(() => User, user => user.seat)
    @JoinColumn({ name : 'userId'})
    user : User; 

    @Column({ type : 'int', nullable : false})
    userId : number;

    @Column({ type : 'varchar'})
    seatbase : number;

    @Column({ type : 'varchar'})
    seatprice : number;
;
}
