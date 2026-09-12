export class DayEventDto {
    constructor(id: string,name:string, startTime: string, endTime: string, color: string, description ?: string){
        this.id = id;
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.description = description ?? "";
        this.color = color;
    }

    id: string;
    name: string;
    color: string;
    description: string;
    startTime: string;
    endTime: string;
}
