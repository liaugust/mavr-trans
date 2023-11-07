import { Title } from "@/app/_components/Typography";
import { FC } from "react";
import { ServiceCard, ServiceCardProps } from "./ServiceCard";

const services: ServiceCardProps[] = [
  {
    id: 1,
    src: "/service.jpg",
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum ligula ac dolor sagittis pretium.",
  },
  {
    id: 2,
    src: "/service.jpg",
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum ligula ac dolor sagittis pretium.",
  },
  {
    id: 3,
    src: "/service.jpg",
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum ligula ac dolor sagittis pretium.",
  },
];

const Service: FC = () => {
  return (
    <section className="pt-20 lg:pt-[140px] lg:pb-20">
      <div className="container">
        <Title
          level="2.1"
          Component="h2"
          className="text-center mb-10 lg:mb-[60px] text-[#343331] capitalize"
        >
          Best transfer service
          <Title level="4" weight="0" Component="span" className="block">
            Lorem ipsum
          </Title>
        </Title>

        <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly lg:justify-between gap-x-5 md:gap-x-3 gap-y-5 lg:gap-y-0">
          {services.map((service) => (
            <li
              className="md:w-[calc(50%_-_20px)] lg:w-[calc(33.333%_-_20px)] bg-primary"
              key={service.id}
            >
              <ServiceCard
                id={service.id}
                src={service.src}
                text={service.text}
                title={service.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
