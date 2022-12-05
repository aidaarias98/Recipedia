// REACT IMPORTS
import { useState } from "react";
import RecipeTile from "../../components/RecipeTile";
import '../HomePage/HomePage.css';



function HomePage() {


    // IN-PAGE NAVIGATION FUNCTIONS -- scrollIntoView()
    function warpToHowTo() {

        console.log(`HowTo Btn Clicked.`)

        const clickScroll = () => {
            const element = document.getElementById("howToWarp");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        };

        clickScroll();

    };

    function warpToRecipes() {

        console.log(`Recipe Btn Clicked.`)

        const clickScroll = () => {
            const element = document.getElementById("searchWarp");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        };

        clickScroll();


    };



    // API-FETCH + FUNCTIONS API-FETCH + FUNCTIONS API-FETCH + FUNCTIONS API-FETCH + FUNCTIONS API-FETCH + FUNCTIONS API-FETCH + FUNCTIONS
    const [data, setData] = useState([]);
    const [textInput, setTextInput] = useState("");
    const handleTextInput = (event) => {
        setTextInput(event.currentTarget.value);
    };
    const fetchData = () => {
        const options = {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': '4a74c4240emshdab738fe39dc951p178779jsna5f5cf3803d3',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
        };
        fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${textInput}&app_id=d37a4dd6&app_key=d6123723b602cd8851fa3c2f8b96f61e`,
        options
        )
        .then((response) => response.json())
        .then((response) => setData(response.hits))
        .catch((err) => console.error(err));


        // ADDITIONAL FUNCTIN CALLS WHEN PRESSING "SEARCH" BUTTON IN SEARCH SECTION.
        //      MAKES THE RESULTS SECTION APPEAR. THIS WAY THERE ISN'T A LARGE BLANK SPOT WHERE THE RESULTS SHOULD BE PRE-SEARCH. 

        var box = document.getElementById("searchBox");
        var section = document.getElementById("searchSection");

        function changeView() {


            // IF STATEMENT MAKES THE RESULTS SECTION APPEAR BY CHANGING THE "display" ATTRIBUTE FROM "none" TO "block".
            if(box.style.display === "none") {

                box.style.display = "block"; 

            };

            // FUNCTION ALSO RE-SETS THE HEIGHT FOR THE CONTAINER BEACUSE WHEN HIDDEN, THE HEIGHT IS MUCH SMALLER. 
            //      IF NOT CHANGED, THE RESULTS WOULD OVERFLOW FROM CONTAINER. 
            section.style.height = "130vh"; 


        }

        console.log("test");
        changeView();


    };


    // RETURN - WHATS BEING DISPLAYED ON PAGE: 
    return (

        <div>


            {/* HERO-SECTION HERO-SECTION HERO-SECTION HERO-SECTION HERO-SECTION HERO-SECTION */}
            <section className="Hero">

                <h1 className="homeH1">RECIPEDIA</h1>
                <p className="heroSub">Your home for heartfelt recipes from our kitchen to yours!</p>

                <div className="heroImg"></div>

                <p className="heroText">
                    The Recipedia team have been helping families find creative and healty meals for over five years. 
                    <br></br>
                    <br></br>
                    We've partnered with different food pantries and sustainable food markets all around the Charlotte area in the hopes of creating a web of affordable and accesible options for low income familes looking to feed themselves and their loved ones. 
                    We at Recipedia know that finding good food can be a huge worry for many families and we strive to connect our community through food and help aliviate some of the stress that these families might have. 
                    No one should go a single day without eating!
                    <br></br>
                    <br></br>
                    We encourage you to express yourself through your food and in the process, create memories with your family that will soon not be forgotten.  
                </p>

                {/* IN-PAGE NAVIGATION IN-PAGE NAVIGATION IN-PAGE NAVIGATION IN-PAGE NAVIGATION IN-PAGE NAVIGATION */}
                <div className="heroNav">
                    <button  className="howToBtn" onClick={warpToHowTo} >New to Recipedia? Click here to learn how to find Recipes!</button>
                    <button  className="recipeBtn" onClick={warpToRecipes} >Already been here before? Click here to find Recipes!</button>
                </div>
            </section>


            {/* STATS SECTION STATS SECTION STATS SECTION STATS SECTION STATS SECTION STATS SECTION */}
            <section className="homeStats">
                <div className="recipeStats">
                    <div className="statimg1"></div>
                    <p className="stat">Over 9,000 Recipe Searches.</p>
                </div>
                <div className="pantryStats">
                    <div className="statimg2"></div>
                    <p className="stat">11.5k+ Pounds in Food Donated.</p>
                </div>
                <div className="familyStats">
                    <div className="statimg3"></div>
                    <p className="stat">Countless Memories <br></br>Made in The Dinning Room.</p>

                </div>
            </section>

            <div className="siteImg"></div>


            {/* HOW-TO SECTION HOW-TO SECTION HOW-TO SECTION HOW-TO SECTION HOW-TO SECTION HOW-TO SECTION HOW-TO SECTION HOW-TO SECTION */}
            <div id="howToWarp"></div>
            <section className="containerWarp">

                <section className="howToSection">
                    <h2 className="howwarp">How to Use Recipedia!</h2>
                    <p className="howText">

                        Recipedia provides a tool to search for recipes by ingredient and find a number of smart, healthy meals fit for any time of year. {"\n"}
                        Have any questions about a particular ingredient? You can search for information on many common ingredients found in restaurants and supermarkets at the click of a button!
                        <br></br>
                        <br></br>
                        Just click on the search bar in the section bellow and enter any ingredient you have on hand to see a list of healthy recipes to spice up your next family dinner. You will also find
                        information on the different nutrient values for each recipe. 
                        <br></br>
                        <br></br>
                        Looking for a vegan recipe? Maybe a sugar free recipe? No worries! All our recipes also state the different dietary needs that 
                        each recipe can satisfy. 
                        <br></br>
                        <br></br>
                        Once you type in the ingredient you want, just hit the Search button!

                    </p>
                    </section>
                
                <hr></hr>


                {/* FEATURED-IN SECTION FEATURED-IN SECTION FEATURED-IN SECTION FEATURED-IN SECTION FEATURED-IN SECTION FEATURED-IN SECTION */}
                <div className="featContainer">
                    <p className="featText">FEATURED IN</p>
                    <br></br>
                    <div className="featuredOn"></div>
                </div>
                
                <hr></hr>

                {/* SEARCH-SECTION SEARCH-SECTION SEARCH-SECTION SEARCH-SECTION SEARCH-SECTION SEARCH-SECTION SEARCH-SECTION SEARCH-SECTION */}
                <div id="searchWarp"></div>
                <section className="searchSection" id="searchSection" style={{height:"50vh"}}>
                    <div className="promptContainer">
                        <p className="menuPrompt">What's on the menu for tonight?</p>
                        <div className="searchBar">
                            <input className="inputBar" value={textInput} onChange={handleTextInput} />
                            <button className="searchBTN" onClick={fetchData}>Search!</button>
                        </div>
                    </div>
                    <div className="blank"></div>
                    <div className="searchBox" id="searchBox" style={{display:"none"}}>
                        <div className="searchResults">
                        {data.map( (hit) => {

                            return (
                            <RecipeTile recipe={hit.recipe}/>
                            )
                        }) }
                        </div>
                    </div>
                </section>
                <div className="blank"></div>

            </section>


        </div>

    )

}


export default HomePage; 