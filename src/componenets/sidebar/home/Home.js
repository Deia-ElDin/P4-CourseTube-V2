import React from 'react';
import PropTypes from 'prop-types';
import { IoMdHome } from 'react-icons/io';

function Home(props) {
  return (
    <section className="home" data-testid="home">
      <div className="title" onClick={() => props.handleTitlesClick('home')}>
        <IoMdHome className="sidebar-icon" data-testid="home-icon" />
        <h2>Home</h2>
      </div>
    </section>
  );
}

Home.propTypes = {
  handleTitlesClick: PropTypes.func.isRequired,
};

export default Home;
