import "../../styles/card.css";

const Card = ({civ}) =>{
    var {name, army_type, team_bonus, civilization_bonus} = civ;

    return (
        <div className = "card">
            {/* <img src = "../"> */}
            <div>{name}</div>
            <div>{army_type}</div>
            <div>{team_bonus}</div>
            <div>{civilization_bonus}</div>
        </div>
    )
}

export default Card;