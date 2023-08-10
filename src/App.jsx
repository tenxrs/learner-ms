import { classes } from "./data.mjs"
import Learner from "./Learner";

const App = () => {
    const learners = classes[0].learners;
    return learners.map(learner => {
        console.log(learner)
        return <Learner name={learner.name} surname={learner.surname} age={learner.age} gender={learner.gender} avatar={learner.photo}/>
    })
}

export default App;