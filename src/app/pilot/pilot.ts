export class Pilot {
    id: number;
    crewModelId: number;
    firstName: string;
    secondName: string;
    birthday: string;
    experience: number;

    constructor(id: number, crewId: number, firstName: string, secondName: string, birthDay: string, experience: number){
        this.id = id,
        this.crewModelId = crewId,
        this.firstName = firstName,
        this.secondName = secondName,
        this.birthday = birthDay,
        this.experience = experience
    }
}