import React from "react";
import jacob from "../../assets/images/jacob.jpg";
const About = () => (
  <div>
    <h1 className="title">About Me</h1>
    <img className="jacob" src={jacob} alt="this is me" />
    <p className="para">
      Until the pandemic hit, I was living and working in Prague. I ended out
      there after four unsatisfying frustrating and disappointing years at
      Carleton. I did not know what I wanted to do and kept switching majors,
      nothing seemed to fit. In my 5th year at Carleton I came into a bit of
      money and was dealing with a medical issue. I decided that I would travel
      for a year and try to sort things out. However with some luck at the risky
      business of day trading, the one year stretched out to four.
    </p>
    <br />
    <br />
    <br />
    <p className="para">
      I decided to settle In Prague. I have dual Canadian Czech citizenship, and
      the cost of living there is enticing. I took a course in teaching English
      as a second language. I managed to make enough of a living doing part time
      private English instruction to continue traveling. Then the pandemic hit.
      I managed to return to Canada just as everything locked down.
    </p>
    <br />
    <br />
    <br />
    <p className="para">
      {" "}
      Bored at my parents house and feeling bad for my Grandmother locked up in
      a retirement home, I decided I would create a website for her to see
      photos, of the grandchildren she never gets to see. I followed that up by
      trying my hand at a simple game to help my nephew learn his letters. I
      realized that I actually enjoyed the kind of puzzling out of problems
      required by writing and debugging code. I was hooked, and decided to do
      some more formal training in order to start a career as a full stack
      developer!
    </p>
  </div>
);

export default About;
