import { Moto } from "./moto-type";

export function createMotoSamples() {
    
    return [
        createMoto({
            id: 1,
            marque: "bmw",
            categorie: "custom",
            modele: "r 18 noire",
            cylindree: 1800
        }),
        createMoto({
            id: 2,
            marque: "yamaha",
            categorie: "roadster",
            modele: "v-max",
            cylindree: 1200
        }),
        createMoto({
            id: 3,
            marque: "suzuki",
            categorie: "sportive",
            modele: "gsx-r",
            cylindree: 1000
        }),
        createMoto({
            id: 4,
            marque: "kawazaki",
            categorie: "trail",
            modele: "versys",
            cylindree: 650
        }),
        createMoto({
            id: 5,
            marque: "kawazaki",
            categorie: "custom",
            modele: "vulcan s",
            cylindree: 650
        }),
        createMoto({
            id: 6,
            marque: "honda",
            categorie: "cross",
            modele: "crf r",
            cylindree: 450
        }),
    ];
}

function createMoto(motoData: Partial<Moto>) {
    return Object.assign(new Moto(), motoData)
}