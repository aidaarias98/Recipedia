import React from 'react';
import '../FoodPantry/FoodPantry.css';
import Card from '../../components/Card';
import CareToShareImage from '../../assets/care2share.png'
import SecondHarvestImage from '../../assets/secondharvest.png'
import StLukeImage from '../../assets/stluke.webp'
import HopeStreetImage from '../../assets/hopestreet.png'
import LoavesFishesImage from '../../assets/loavesfish.png'
import StPaulImage from '../../assets/stpaul.png'
import HickoryGroveImage from '../../assets/hickorygrove.png'
import JewishServicesImage from '../../assets/jewishservices.jpeg'
import BulbMobileImage from '../../assets/thebulb.png'
import UrbanCenterImage from '../../assets/urbancenter.png'




function FoodPantry() {
  return (
 <body>


<section className="hero">
    <div className="hero-image">
        <div className="hero-text">
        <h2 className='hero-header'>A Seat At The Table</h2>
          <br></br>
          <p className="hero-par">Recipedia has partnered up with various organizations around the Charlotte area to make food more accessible--to make delicious and healthy recipes. We strive to remove any barrier that would keep our community from receiving the help that they need. Sometimes people need a little help, and the choice can be difficult to reach out to others. Job loss, illness, and other life circumstances can cause a financial struggle and/or homelessness. With compassion and care, we are here to serve. Below you will find our partners and contact information. We always say it’s not just about the food. While our overall goal is to end food insecurity, by providing at least a week’s worth supply of food every week, including fresh produce and meat, it’s about much more. It’s about humanity...We believe that access to nutritious food is a fundamental human right. There is no need for referrals, appointments, or financial documents to receive any service with our partnered organizations.</p>
        </div>
      </div>
    </section> 

  {/* <section>
  <div className='PanDescription'>
    <h2 className='pan-text'>A Seat At The Table</h2>
  <p className='paragraph'>Recipedia has partnered up with various organizations around the Charlotte area to make food more accessible--to make delicious and healthy recipes. We strive to remove any barrier that would keep our community from receiving the help that they need. Sometimes people need a little help, and the choice can be difficult to reach out to others. Job loss, illness, and other life circumstances can cause a financial struggle and/or homelessness. With compassion and care, we are here to serve. Below you will find our partners and contact information. We always say it’s not just about the food. While our overall goal is to end food insecurity, by providing at least a week’s worth supply of food every week, including fresh produce and meat, it’s about much more. It’s about humanity...We believe that access to nutritious food is a fundamental human right. There is no need for referrals, appointments, or financial documents to receive any service with our partnered organizations.</p>
  </div>
  </section> */}

        <br></br>
        <br></br>
        <h1>Our Partners</h1>
    <div className='wrapper'>
    <Card
    img={SecondHarvestImage}
    title="Second Harvest Food Bank"
    description="500 Spratt St B, Charlotte, NC 28206"
    button="https://www.secondharvestmetrolina.org/"/>
    <Card
    img={StLukeImage}
    title= "Saint Luke Bapt. Church"
    description="13700 Lawyers Rd, Mint Hill, NC 28227"
    button="https://www.stlukeclt.org/"/>
    <Card
    img={CareToShareImage}
    title="Care To Share Outreach Center"
    description="1600 Norris Ave, Charlotte, NC 28206"
    button="https://www.caretosharenc.org/"/>
    <Card
    img={HopeStreetImage}
    title="Hope Street Food Pantry"
    description="4100 Johnston Oehler Rd, Charlotte, NC 28269"
    button="https://hopestreetfoodpantry.com/"/>
    <Card
    img={LoavesFishesImage}
    title="Loaves & Fishes of Charlotte"
    description="648 Griffith Rd B, Charlotte, NC 28217"
    button="https://loavesandfishes.org/"/>
    <Card
    img={StPaulImage}
    title="Saint Paul Baptist Church"
    description="1401 Allen St, Charlotte, NC 28205"
    button="https://stpaulbaptist.church/"/>
    <Card
    img={HickoryGroveImage}
    title="Hickory Grove Food Pantry"
    description="7424 E W.T. Harris Blvd, Charlotte, NC 28227"
    button="https://www.hickorygrove.org/event/1287188-2022-09-27-food-pantry/"/>
    <Card
    img={JewishServicesImage}
    title="Jewish Family Services of Greater Charlotte"
    description="5007 Providence Rd Suite 105, Charlotte, NC 28226"
    button="https://jfscharlotte.org/"/>
    <Card
    img={BulbMobileImage}
    title="The Bulb Mobile Markets"
    description="1100 Eastway Drive, Charlotte, NC 28203"
    button="https://www.thebulbgallery.org/"/>
    <Card
    img={UrbanCenterImage}
    title="Urban Ministry Center"
    description="945 N College St, Charlotte, NC 28206"
    button="https://www.roofabove.org/"
    />
    </div>
    <hr></hr>
    <br></br>
   

        <section className="googlemap">
            <div className="left-map">
            <div className="map-text">
                <h2 className="Hoo">Find A Location</h2>
                <br></br>
            </div>
            <br></br>
        <iframe className= "map" title='googlemap' src="https://www.google.com/maps/d/u/0/embed?mid=1_b24Qot8QhTyTYGB-bQ6y2YPu8UnzrM&ehbc=2E312F"
         width="600" height="400"></iframe>
            </div>
        </section>



    </body> 
    
  )
}



export default FoodPantry




