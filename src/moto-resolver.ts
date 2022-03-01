import { Arg, Query, Resolver, ResolverInterface } from "type-graphql";
import { Moto } from "./moto-type";
import { createMotoSamples } from "./motos-samples";

@Resolver(of => Moto)
export class MotoResolver  {
    private readonly items: Moto[] = createMotoSamples();

    //Query pour recevoir un modèle correspondant à une marque
    @Query(returns => Moto, { nullable: true })
    async moto(@Arg("modele") modele: string): Promise<Moto | undefined> {
        return await this.items.find(moto => moto.modele === modele);
        }
    
    //Query renvoyant la liste de toutes les motos 
    @Query(returns => [Moto], { description: "Liste de tous les modèles de motos" })
    async motos(): Promise<Moto[]> {
        return await this.items
    }
}