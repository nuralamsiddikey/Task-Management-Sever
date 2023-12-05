import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm'


@Entity()
export class Client {
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
}