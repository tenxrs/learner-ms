const Card = props => {
  return (
    <>
      <div
        className={`justify-center w-64 shadow-lg rounded-md mb-1 flex bg-blue-950 text-white ${props.className} flex-row `}
      >
        <p className="flex">{props.children}</p>
      </div>
    </>
  );
};
export default Card;
