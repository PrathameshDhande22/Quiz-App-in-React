import { TypeAnimation } from "react-type-animation";

export const Typing = () => {
  return (
    <div className="typing">
      <span>We Provide Quizes on </span>
      <TypeAnimation
        sequence={[
          "Linux",
          1000,
          "DevOps",
          1000,
          "Networking",
          1000,
          "Programming",
          1000,
          "Cloud",
          1000,
          "Docker",
          1000,
        ]}
        repeat={Infinity}
      />
    </div>
  );
};
