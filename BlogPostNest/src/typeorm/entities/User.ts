import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column({ nullable: true })
    displayName?: string

    @Column({ nullable: true })
    displayImage?: string
}