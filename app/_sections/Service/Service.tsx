import { Title } from "@/app/_components/Typography";
import { FC } from "react";
import { ServiceCard, ServiceCardProps } from "./ServiceCard";
import { useTranslation } from "@/app/_i18n";

const services: ServiceCardProps[] = [
  {
    id: 1,
    src: "/service-1.jpg",
    title: "pages.home.service.services.first.title",
    text: "pages.home.service.services.first.text",
  },
  {
    id: 2,
    src: "/service-2.jpg",
    title: "pages.home.service.services.second.title",
    text: "pages.home.service.services.second.text",
  },
  {
    id: 3,
    src: "/service-3.jpg",
    title: "pages.home.service.services.third.title",
    text: "pages.home.service.services.third.text",
  },
];

const Service: FC = async () => {
  const { t } = await useTranslation();

  return (
    <section className="pt-20 lg:pt-[140px] lg:pb-20">
      <div className="container">
        <Title
          level="2.1"
          Component="h2"
          className="text-center mb-10 lg:mb-[60px] text-[#343331] capitalize"
        >
          {t("pages.home.service.title")}
          <Title level="4" weight="0" Component="span" className="block">
            {t("pages.home.service.subtitle")}
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
                text={t(service.text)}
                title={t(service.title)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
