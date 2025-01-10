import { Star } from './Star'
import './star.css'

export const Stars = ({ count = 0 }: { count?: number }) => {
  
  if (typeof count !== 'number' || count < 1 || count > 5 || isNaN(count)) {
    return null;
  }

  const stars = Array.from ({ length: count }, (_, index) => <Star key={index} /> )
  return <ul className="card-body-stars u-clearfix">{stars}</ul>
}
