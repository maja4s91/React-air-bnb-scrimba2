const Card = (props) => {
  let badgeText;

  if (props.item.openSpots === 0) {
    badgeText = "Sold out";
  } else if (props.item.location === "Online") {
    badgeText = "online";
  }

  return (
    <div className="card-container">
      <figure className="card" key={props.item.id}>
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img src={`./src/img/${props.item.coverImg} `} className="card-img" />
        <div className="card-review">
          <span className="card-star">⭐ </span>
          <span>{props.item.stats.rating}</span>
          <span className="gray">({props.item.stats.reviewCount}) • </span>
          <span className="gray">{props.item.location}</span>
        </div>

        <p className="card-title">{props.item.title}</p>
        <p>
          <span className="bold card--price">From ${props.item.price}</span> /
          person
        </p>
      </figure>
    </div>
  );
};
export default Card;
