import { FC } from "react";

const About: FC = () => {
  return (
    <div className="pt-20">
      <div className="container">
        <div className="flex space-x-10">
          {/* images */}
          <div className="w-1/2">
            <div></div>
            <div></div>
          </div>

          {/* text */}
          <div className="w-1/2">
            <div className="uppercase text-base mb-5 text-dark2">
              About our company
            </div>
            <div className="text-2xl mb-2 font-bold">
              Lorem ipsum dolor sit amet
            </div>
            <div className="text-2xl font-light mb-8">
              Consectetur adipiscing elit
            </div>

            <p className="text-dark2 text-sm  mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              rutrum ligula ac dolor sagittis pretium. Fusce pharetra tortor a
              quam lacinia blandit. Maecenas ac lobortis sapien. Nam aliquam
              dignissim eros et consequat. Donec pulvinar pulvinar nulla, vel
              aliquam metus blandit at. Nullam ac congue magna.
            </p>

            <p className="text-dark2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              rutrum ligula ac dolor sagittis pretium. Fusce pharetra tortor a
              quam lacinia blandit. Maecenas ac lobortis sapien. Nam aliquam
              dignissim eros et consequat. Donec pulvinar pulvinar nulla, vel
              aliquam metus blandit at. Nullam ac congue magna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
