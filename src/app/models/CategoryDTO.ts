import { CommandsDTO } from "./CommandsDTO";

export interface CategoryDTO {
    name: string;
    commands: CommandsDTO[];
}