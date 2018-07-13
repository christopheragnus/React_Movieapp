import React from 'react';
import { pageWithLayout } from '../../containers/page'

// statless functional component
export const Home = props => (
  <div className="home">
    <h2>Welcome home, React friends</h2>
  </div>

)

export default pageWithLayout(Home);