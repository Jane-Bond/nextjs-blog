import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/eugenia.jpeg"
          alt="An image showing Eugenia"
          width={500}
          height={500}
        />
      </div>
      <h1>Hi, I'm Eugenia</h1>
      <p>My blog is about web development.</p>
    </section>
  );
}

export default Hero;
