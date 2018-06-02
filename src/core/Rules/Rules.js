import  rules from "./index"
class Rules{
    static check(key,props){
        rules.map(rule=>{rule(key, props)})
    }
}

export default Rules;