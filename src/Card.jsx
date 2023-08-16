const Card = props => {
  return (
    <>
      <div className="justify-center w-64 shadow-lg rounded-md mb-3 flex bg-blue-950 text-white">
        {props.children}
      </div>
    </>
  );
};
export default Card;
