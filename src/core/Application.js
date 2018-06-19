import rules from "./Rules/Rules";
import moves from "./Moves"
import PawnFactory from './Factories/PawnFactory';
import Queue from "./Queue";
class Application {
    static analize(props) {
        const player=Queue.first(props.queue)
        if(!player){ return; }           
       player.pawns.forEach((item)=>{ 
                const pawn= PawnFactory.create({...item, result:props.result});     
                rules.check({...props, pawn});
            })
            
    }
    static move(props){
        props && moves.makeMove(props);
    }
}

export default Application;

