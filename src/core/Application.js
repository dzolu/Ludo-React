import rules from "./Rules/Rules";
import moves from "./Moves"
class Application {
    static analize(props) {
        if(props && props.player && props.player.pawns){
              Object.keys(props.player.pawns).map(key => rules.check(key, props));
        }    
    }
    static move(props){
        props && moves.makeMove(props);
    }
}

export default Application;

