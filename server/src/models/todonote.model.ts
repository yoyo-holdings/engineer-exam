import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Default,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import { Optional } from "sequelize";

interface ToDoNoteAttributes {
  id: number;
  title: string;
  detail: string;
  isCompleted: boolean;
  type: "todo" | "note";
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

interface ToDoNoteCreationAttributes
  extends Optional<
    ToDoNoteAttributes,
    "id" | "isCompleted" | "createdAt" | "updatedAt" | "deletedAt"
  > {}

@Table({
  paranoid: true,
  timestamps: true,
})
export class ToDoNote extends Model<
  ToDoNoteAttributes,
  ToDoNoteCreationAttributes
> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  id?: number;

  @AllowNull(false)
  @Column
  title?: string;

  @AllowNull(true)
  @Column
  detail?: string;

  @AllowNull(false)
  @Default(false)
  @Column
  isCompleted?: boolean;

  @AllowNull(false)
  @Column(DataType.ENUM("todo", "note"))
  type?: "todo" | "note";

  @CreatedAt
  createdAt?: Date;

  @UpdatedAt
  updatedAt?: Date;

  @DeletedAt
  deletedAt?: Date;
}
