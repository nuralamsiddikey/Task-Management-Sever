import {Entity,PrimaryGeneratedColumn,Column,OneToMany} from 'typeorm'
import { Comment } from './comment.model'


@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    client_name!:string

    @Column()
    client_phone_number!:string

    @Column()
    client_email!:string

    @Column()
    client_code!:string
    
    @Column()
    admin_id!:number

    @Column("simple-array")
    content_writer_id!: number[]

    @OneToMany(()=> Comment , (comment)=> comment.task)
    comments!: Comment[]
}