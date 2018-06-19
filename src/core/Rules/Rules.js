import  rules from "./index"
class Rules{
    static check(props){
        rules.forEach(rule=>{rule(props)})
    }
}

export default Rules;