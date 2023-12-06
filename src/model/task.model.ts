import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Comment } from "./comment.model";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  client_code!: string;

  @Column()
  task_title!: string;

  @Column()
  task_description!: string;

  @Column()
  word_limit!: number;

  @Column({ type: "date" })
  client_deadline!: string;

  @Column({ type: "date" })
  content_writer_deadline!: string;

  @Column({
    type: "enum",
    enum: [
      "Not Started",
      "Ready",
      "In Progress",
      "PR Done",
      "Delivered",
      "Proof Reading",
    ],
  })
  status!: string;

  @Column()
  admin_id!: number;

  @Column("simple-array")
  content_writer_id!: number[];

  @Column("simple-array")
  link!: string[]


  @Column("simple-array")
  attachment!: string[]


  @OneToMany(() => Comment, (comment) => comment.task)
  comments!: Comment[];
}
