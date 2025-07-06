import { Fade } from "react-awesome-reveal";

type BubbleProps = {
  image: string;
  imageAlt: string;
  emoji?: string;
  emojiAlt?: string;
  title: string;
  titleUrl?: string;
  position: string;
  date: string;
  location: string;
  desc: React.ReactNode;
  wrapperClass?: string;
  emojiClass?: string;
};

export default function Bubble({
  image,
  imageAlt,
  emoji,
  emojiAlt,
  title,
  titleUrl,
  position,
  date,
  location,
  desc,
  wrapperClass = "wrapper",
  emojiClass = "emojiTitle",
}: BubbleProps) {
  return (
    <Fade duration={2500} triggerOnce>
      <div className="backHover">
        <div className={wrapperClass}>
          <div className="image">
            <img
              className="sideImg"
              src={image}
              alt={imageAlt}
              loading="lazy"
            />
          </div>
          <div className="imageText">
            <strong>
              <span className="mainLink">
                {titleUrl ? (
                  <a
                    className="first after"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={titleUrl}
                    aria-label={`Visit ${title} website`}
                  >
                    {title}
                  </a>
                ) : (
                  title
                )}
              </span>
            </strong>
            {emoji && (
              <img
                src={emoji}
                alt={emojiAlt}
                className={emojiClass || "emojiTitle"}
              />
            )}
            <p className="position">{position}</p>
            <strong>
              <p className="date">{date}</p>
            </strong>
            <strong>
              <p className="location">{location}</p>
            </strong>
            <p className="desc">{desc}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
