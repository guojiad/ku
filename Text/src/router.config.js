import Home from "./Home.vue"
import Navh from "./components/Navh.vue"

export default{
    routes:[
        {path:"/home",component:Home},
        {path:"/navh",component:Navh},
        {path:"*",redirect:"/home"}
    ]
}