export class Stewardesses {
    id: number;
    crewModelId: number;
    firstName: string;
    secondName: string;
    birthdate: string;

    constructor(id: number, crewId: number, firstName: string, secondName: string, birthDay: string, experience: number){
        this.id = id,
        this.crewModelId = crewId,
        this.firstName = firstName,
        this.secondName = secondName,
        this.birthdate = birthDay
    }
}