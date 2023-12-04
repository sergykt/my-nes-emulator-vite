import type { FC } from 'react';
import FancyLink from '@components/FancyLink';
import games from '@src/engine/games';

const GamesList: FC = () => (
  <div className='games'>
    <h2 className='games__title'>List Of Games</h2>
    <div className='games__list'>
      {games.map(({ id, name, shortName, img, description }) => (
        <div className='games__item' key={id}>
          <a className='games__link' href={`/emulator/${shortName}`} aria-label={name}>
            <picture>
              <source srcSet={`/img/games/${img}.webp`} type='image/webp' />
              <source srcSet={`/img/games/${img}.jpg`} type='image/jpeg' />
              <img
                src={`/img/games/${img}.jpg`}
                width={150}
                height={200}
                loading='lazy'
                className='games__img'
                alt={name}
              />
            </picture>
          </a>
          <div className='games__right'>
            <FancyLink className='games__name' href={`/emulator/${shortName}`}>
              {name}
            </FancyLink>
            <p className='games__description'>{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GamesList;