/* 
  Set-Up a new React Project:
    npx create-react-app <you-app-name>

  Note: Omit the angle brackets.
*/

/*
  Make a landing page component:
    Make a LandingPage.js file
    Import React in the file.
    This component should render a message introducing your application: ie. "Welcome to my photo bucket!"
    Export the LandingPage from the component file.
    Import the LandingPage into your App.js and render it from that component.
*/

/*
  Make a header component:
    Create a Header.js file
    Import React and don't forget to export the Header component from the file.
    This component should accept an 'options' prop, which will be a list of headings to render (ie. Cars & Boats)
    Import the header into your App.js file and add it to your render. Pass in the array of options to render in the header.
*/

/*
  Make a button component:
    If you created buttons in your header, factor that out into it's own component.
    Make a Button.js file - don't forget to export it.
    Import buttons into the Header component and render them according to each of the 'options' provided to the Header component.
*/

/*
  We want to make a list now:
    Think about this - we want to render a list of 4 items for each option. If the option is 'Cars', we want to display 4
    cars - complete with a picture & description.

    We want a component that will hold each of these pictures and titles.

    Find some images online - in your application create an array of objects with image & description properties.
*/