const Card = props => {
  return (
    <>
      <div className="justify-center w-64 shadow-lg rounded-md  flex bg-blue-950 text-white">
        {props.children}
      </div>
    </>
  );
};
export default Card;
