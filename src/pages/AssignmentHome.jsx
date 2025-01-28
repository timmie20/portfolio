import proficPic from "../assets/profile-pic 4.png";

export default function AssignmentHome() {
  return (
    <div className="flex flex-col items-center">
      <div className="mx-auto mt-10 flex max-w-[500px] flex-col  space-y-4 p-4">
        <img src={proficPic} alt="my profile picture" className="rounded-xl" />

        <h1 className="text-center text-2xl uppercase">
          olayinka oluwatimilehin
        </h1>
      </div>
    </div>
  );
}
