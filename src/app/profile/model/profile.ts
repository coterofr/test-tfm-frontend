export class Profile {

  name: string;
  description: string;
  dateBirth: Date;
  visits: number;
  rating: number;

  constructor(name: string,
              description: string,
              dateBirth: Date,
              visits: number,
              rating: number) {
    this.name = name;
    this.description = description;
    this.dateBirth = dateBirth;
    this.visits = visits;
    this.rating = rating;
  }
}
