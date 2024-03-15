
import { Show } from "src/show/entities/show.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name : 'seats'
})
export class Seat {
    @PrimaryGeneratedColumn()
    seatId : number;

    @ManyToOne(() => User, user => user.seat)
    @JoinColumn({ name : 'userId', referencedColumnName : 'userId'})
    user : User; 

    @Column({ type : 'int', nullable : false })
    userId : number;

    @OneToMany(() => Show, show => show.seat)
    show : Show;

    @Column({ type : 'int', nullable : false })
    showId : number;

    @Column({ type : 'int', nullable : false })
    seatbase : number;
 
}
