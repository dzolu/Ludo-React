import rules from "./Rules/Rules";
import moves from "./Moves"
import PawnFactory from './Factories/PawnFactory';
class Application {
    static analize(props) {
        if(props && props.player && props.player.pawns){           
            props.player.pawns.forEach((item)=>{ 
                const pawn= PawnFactory.create({...item, result:props.result});     
                rules.check({...props, pawn});
            })
        }    
    }
    static move(props){
        props && moves.makeMove(props);
    }
}

export default Application;

