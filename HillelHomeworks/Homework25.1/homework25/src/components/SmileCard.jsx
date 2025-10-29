import './SmileCard.css';

export default function SmileCard({emoji, onVote}) {
    return (
        <div className="emoji__card">
            <img src={emoji.path} alt={emoji.name} className="emoji__img"/>
            <div className="emoji__info">
                <h2>{emoji.name}</h2>
                <p>Votes: {emoji.votes}</p>
                <button onClick={onVote}>Vote</button>
            </div>
        </div>
    )
}