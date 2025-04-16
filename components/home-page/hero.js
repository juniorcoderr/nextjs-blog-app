import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/admin.jpg"
          alt="An image showing Vinayak"
          width={400}
          height={400}
        />
      </div>
      <h1>Hi, I'm Vinayak Yadav</h1>
      <p>Exploring code, creativity, and everything in between.</p>
    </section>
  );
}
