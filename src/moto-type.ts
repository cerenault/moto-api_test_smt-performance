import { Field, Int, ObjectType } from "type-graphql";

@ObjectType({ description: "Objet représentant une moto" })
export class Moto {

    @Field(type => Int)
    id: number

    @Field()
    marque: string

    @Field()
    categorie: string

    @Field()
    modele: string

    @Field(type => Int)
    cylindree: number
}