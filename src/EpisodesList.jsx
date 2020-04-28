import React from 'react';
export default function EpisodesList(props) {
  const { episodes, toggleFavAction, favourites } = props;

  return episodes.map((episode) => {
    return (
      <section key={episode.id} className='episode-box'>
        <img
          src={episode.image ? episode.image.medium : '#'}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {episode.name}
        </div>
        <section>
          <div>
            Season: {episode.season} Number: {episode.number}
            <button type='button' onClick={() => toggleFavAction(episode)}>
              {favourites.find((fav) => fav.id === episode.id)
                ? 'Unfav'
                : 'Fav'}
            </button>
          </div>
        </section>
      </section>
    );
  });
}
