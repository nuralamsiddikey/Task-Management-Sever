import {Entity,PrimaryGeneratedColumn,Column,ManyToOne} from 'typeorm'
import { Task } from './task.model'


@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    comment!:string

    @ManyToOne(()=> Task, (task)=> task.comments)
    task!: Task
}