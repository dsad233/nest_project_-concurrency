import { Show } from "src/show/entities/show.entity"
import { Role } from "src/user/types/userRole.type"
import { Column, CreateDateColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Entity } from "typeorm/decorator/entity/Entity"


@Entity({
    name : 'users'
})

export class User {
    @PrimaryGeneratedColumn({type : 'int', name : 'userId'})
    userId : number

    @Column({ type : 'varchar' ,nullable : false })
    name : string
    
    @Column({ type : 'varchar' ,nullable : false })
    email : string

    @Column({ type : 'varchar' ,nullable : false })
    password : string

    @Column({ type : 'int', nullable : false, default : 10000 })
    point : number

    @Column({ type : 'enum' , enum : Role, default : Role.User })
    role : Role;

    @CreateDateColumn()
    createdAt : Date

    @UpdateDateColumn()
    updatedAt : Date


    @OneToMany(() => Show, show => show.user)
    show : Show[]

}
