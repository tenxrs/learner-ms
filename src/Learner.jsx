const Learner = ({ name, surname, age, gender, avatar }) => {
    console.log(avatar)
    return (
        <div>
            <img src={avatar} alt="student photo" />
            <h2>{name}</h2>
            <h3>{surname}</h3>
            <h4>{age}</h4>
            <h5>{gender}</h5>
        </div>
    )
}

export default Learner;