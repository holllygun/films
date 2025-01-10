import { Card } from './components/Stars/Card';

import './App.css';


export const App = () => {
  const movies = [
    {
      genre: "Экшн",
      image: "https://assets.gq.ru/photos/5d9f6ec76b36fa0008fdfec3/master/w_1600,c_limit/3305020743b721c6e8bd42985ff4d3e78f6a6d26.jpeg",
      title: "Супермен",
      rating: 5,
    },
    {
      genre: "Экшн",
      image: "https://assets.gq.ru/photos/5d9f6ec76b36fa0008fdfec3/master/w_1600,c_limit/3305020743b721c6e8bd42985ff4d3e78f6a6d26.jpeg",
      title: "Супермен",
      rating: 9,
    },
    {
      genre: "Экшн",
      image: "https://assets.gq.ru/photos/5d9f6ec76b36fa0008fdfec3/master/w_1600,c_limit/3305020743b721c6e8bd42985ff4d3e78f6a6d26.jpeg",
      title: "Супермен",
      rating: 'не отображайся',
    },
  ]

  return (
    <div className="cards">
      {movies.map((movie, index) => (
        <Card key = {index} {...movie} />
      ))}
    </div>
  )
}

