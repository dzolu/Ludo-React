import  rules from "./index"
class Rules{
    static check(key,props){
        rules.forEach(rule=>{rule(key, props)})
    }
}

export default Rules;