export const ProjectCard = ({link, cover, name, skills}) => {
  return (
    <li>
      <a href={link} className="block overflow-clip rounded-[15%]">
        <figure className="grid group aspect-square items-stretch justify-stretch">
          <img className="row-span-full col-span-full scale-125 w-full" src={cover} alt={name} />
          <figcaption className="text-white row-span-full col-span-full opacity-0 group-hover:opacity-100 transition-opacity ease duration-200 z-[1] bg-[#425fa9] flex flex-col items-center justify-center gap-3">
            <h3 className="text-3xl font-semibold text-center">{name}</h3>
            <p className="text-lg">{skills}</p>
          </figcaption>
        </figure>
      </a>
    </li>
  );
};
