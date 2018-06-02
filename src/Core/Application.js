import rules from "./Rules/Rules";

class Application {
    static analize(props) {
        Object.keys(props.player.pawns).map(key => rules.check(key, props));
    }
}

export default Application;

