import { Stars } from "./Stars";

type CardProps = {
    genre: string;
    image: string;
    title: string;
    rating?: number;
};

export const Card = ({ genre, image, title, rating }: CardProps) => {
    const validRating = (typeof rating === 'number' && !isNaN(rating) && rating >= 1 && rating <= 5) ? rating : undefined;
    
    return (
     <div className="card">
      <div className="poster">
        <p className="genre">{genre}</p>
        <img className="poster" src ={image} alt ={title}/>
      </div>
      <div className="info">
        <h2>{title}</h2>
          {validRating && (
            <ul className="card-body-stars u-clearfix">
                <Stars count={validRating} />
            </ul>
        )}
        <button className="buy">Купить</button>
        <button className="details">Подробнее →</button>
      </div>
    </div>
  )
}
