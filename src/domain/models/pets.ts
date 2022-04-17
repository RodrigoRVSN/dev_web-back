export interface IPetModel {
  id: string
  name: string
  breed: string
  gender: string
  birth_date: Date
  adopted_date?: Date
}
