import image from '../src/UI utilities/student.png';

const MeetingScheduler = () => {
  return (
    <>
      <div className="bg-[#23233F] my-12 rounded-lg flex text-white px-2 ">
        <div>
          <img src={image} width={235} alt="" />
        </div>
        <div>
          <h1 className="mt-5 text-2xl">Schedule teacher to parent meetings</h1>
          <p className="text-xs mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
          </p>
        </div>
      </div>
    </>
  );
};
export default MeetingScheduler;
