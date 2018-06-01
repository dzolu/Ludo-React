import { AppSettings } from './../AppSettings';
class Application {
    static moveRequest(props){
        if(!!props.gameBoard[AppSettings.redHomeIndex]) return console.log("jest juz pionek");
        props.actions.redLeaveBase({[props.positionIndex] : null }); 
        props.actions.addRedToBoardFromBase({[AppSettings.redHomeIndex]:{color:props.color, id: props.id, positionIndex : AppSettings.redHomeIndex}});
        /*Gosciu naciska piona i sprawdzasz czy gosciu ma akcje czy tez message dlaczego nie moze sie ruszyc
        jak ackaj wykonujesz i czyscisz akcje

        jak message to dajesz message i czekasz na inny ruch

        w zaawansowanej czesci bedziesz mogl podpowiadac ktore piony maja ruch


        jezeli umiescisz w own state dla piona couter to bedziesz wiedzial dokladnie czy moze juz wejsc do domu
        
        */
    } 
    static analize(props){
        /* function where I will analize sytuation of player
        here uou can also create range of possible moves because yu all ready analise then in move request you just pass args which pawn clicked and and application 
        if is action for that pawn. Easy becaue each pawn can have only one action. Jezeli pewne pionki moga podjac akcje a pewne nie to na klikniecie na pionke ktory 
        nie moze podjac akcji powinienes wyswietlac informacje dlaczego akcja nie moze byc podjeta 

        i teraz tak Scenariusz
        1. rzycasz kostka
        2. analise rusza

        odnajduje kazego piona i analizuje jego sytuacje bazujac na zasadach,  jezeli ktoras jest spelniona powinna dispach by dodac do Piona akcje.
        Po ruchu akcje powinny byc czyszczone vo daje mi mozliwosc posiadana w state tylko 1 fields dla wszystkich pionow#




        */
    }
}

export default Application;

/*
Zaleznosc ruchow:
1. sprawdzasz color
2. sprawdzasz pozycje
3. sprawdzasz ilosc oczek
te trzy zmienne determinuja jakie ruchy i sa mozliwe


*/