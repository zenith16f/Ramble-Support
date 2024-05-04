const Item = ({ Links, title }: any) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link: any) => (
        <li key={link.name}>
          <a
            href={link.link}
            className="cursor-pointer text-sm duration-300 text-gray-400 hover:text-red-600 leading-6"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
