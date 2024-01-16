import Image from "next/image";

import styles from "@/styles/team.module.scss";

function Team() {
  const line = "/img/team/line.svg";
  const team = "/img/team/team.png";

  return (
    <section id="team" className={styles["container"]}>
      <Image
        className={styles["line"]}
        alt="line"
        src={line}
        fill={true}
        sizes="100vw"
        quality={100}
      />

      <div className={styles["left-content"]}>
        <Image alt="team" src={team} fill={true} sizes="100vw" quality={100} />
      </div>
      <div className={styles["right-content"]}>
        <div className={styles["team-container"]}>
          <h1 className={styles["content-title"]}>
            Meet Our <span>Team</span>
          </h1>
          <p className={styles["content-description"]}>
            PT Benderaku Berkibar Selalu adalah tim yang terdiri dari project
            manager, programmer, designer, dan customer service.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;
