import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ShowTag } from "../types/showtag.type";
import { ShowStatus } from "../types/showstatus.type";
import { Seat } from "src/seat/entities/seat.entity";



@Entity({
    name : 'shows'
})
export class Show {
    @PrimaryGeneratedColumn({ type : 'int', name : 'showId'})
    showId : number;

    @Column({ type : 'varchar' ,nullable : false })
    showtitle : string;

    @Column({ type : 'text' ,nullable : false })
    showtext : string;

    @Column({ type : 'enum' , enum : ShowTag, default : ShowTag.Action })
    showTag : ShowTag;

    @Column({ type : 'varchar' ,nullable : false })
    showalltime : string;

    @Column({ type : 'varchar' ,nullable : false })
    showlocation : string;

    @Column({ type : 'varchar' ,nullable : false })
    showstartime : string;

    @Column({ type : 'int' ,nullable : false })
    showprice : number;

    @Column({ type : 'enum', enum : ShowStatus, default : ShowStatus.soon })
    showstatus : ShowStatus;

    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updatedAt : Date;

    @ManyToOne(() => User, user => user.show)
    @JoinColumn({ name: 'userId', referencedColumnName : 'userId' })
    user: User;

    @Column({ type : 'int', nullable : false })
    userId : number;

    @ManyToOne(() => Seat, seat => seat.show)
    @JoinColumn({ name: 'seatId', referencedColumnName : 'seatId' })
    seat : Seat;

    @Column({ type : 'int', nullable : false })
    seatId : number;

    
    // @Column({ type : 'int', nullable : false })
    // seatbase : number;

    
}