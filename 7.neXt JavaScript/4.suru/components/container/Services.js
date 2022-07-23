import styles from "../../styles/Container/Services.module.css";
import Link from "next/link";
import Image from "next/image";

const Services = ({ services }) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>WHAT WE CAN DO?</h1>
        <h1 className={styles.subtitle}>Services we can help you with</h1>
        <div className={styles.services}>
          {services.map((service) => (
            <Link passHref key={service.id} href={`/service/${service.name}`}>
              <div className={styles.service}>
                <div className={styles.desc}>{service.desc}</div>
                <span className={styles.cat}>{service.title}</span>
                <div className={styles.media}>
                  {service.video ? (
                    <video
                      src={`/static/images/${service.video}`}
                      muted
                      autoPlay
                      loop
                      className={styles.video}
                    ></video>
                  ) : (
                    <Image
                      alt={service.name}
                      src={`/static/images/${service.photo}`}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                    ></Image>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
