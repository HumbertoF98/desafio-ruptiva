import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// decorator for save this model in revenues table
@Entity("revenues")
class Revenue {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  url_photo: string;
}

export default Revenue;
