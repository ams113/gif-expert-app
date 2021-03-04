import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ( { title = '', url = '' } ) => {

    const titleValid = title.trim() || 'Without title';

    return (
        <article className="card animate__animated animate__fadeIn">
            <div className="card-content">
                <img src={ url } alt={ titleValid } />
                <p>{ titleValid }</p>
            </div>
        </article>
    )
}


GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };