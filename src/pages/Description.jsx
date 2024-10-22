import Header from "../components/Header";

const Description = () => {
  return (

      <div className="screenHeight w-full bg-[#ffe9ff] border-[2px]">
        <Header />
        <div className="relative w-full mainBox3 ">
        <p>
          I have opted to use the ONE IN A BILLION PERSONALITY REVEALER web link
          of my own volition and agree to upload my picture and personal details
          therein for participating in ONE IN A BILLION PERSONALITY REVEALER
          activity. </p>
          <p>I state that the picture and personal details shared by me
          are true and accurate and the company shall not have any liability
          arising from its reliance on the same. I understand that no data will
          be retained by the company post the event. I agree that the all
          contents used for promotion of the event shall be the property of GE,
          and meant for its use only.
        </p>

        <button type="submit" class="okBtn">GO</button>
      </div>
      </div>
      
  );
};

export default Description;
