import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import ExtraSectionOne from './ExtraSectionOne/ExtraSectionOne';
import ShowingCategoryDataUsingTabs from './ShowingCategoryDataUsingTabs/ShowingCategoryDataUsingTabs';
import ExtraSecondSection from './ExtraSecondSection/ExtraSecondSection';
import useTitle from '../../../Hooks/useTitle';

const Home = () => {
  useTitle('Home')
    return (
        <div>
          <Banner></Banner> 
          <ExtraSectionOne></ExtraSectionOne>
          <Gallery></Gallery>
          <ShowingCategoryDataUsingTabs></ShowingCategoryDataUsingTabs>
          <ExtraSecondSection></ExtraSecondSection>
        </div>
    );
};

export default Home;<h1>hello</h1>