export class Stewardesses {
    id: number;
    crewModelId: number;
    firstName: string;
    secondName: string;
    birthDay: string;

    constructor(id: number, crewId: number, firstName: string, secondName: string, birthDay: string){
        this.id = id,
        this.crewModelId = crewId,
        this.firstName = firstName,
        this.secondName = secondName,
        this.birthDay = birthDay
    }
}