import imgArticle from "../assets/images/illustration-article.svg";
import avatar from "../assets/images/image-avatar.webp";
const Card = () => {
  return (
    <div className="min-w-60 mx-6 card w-full max-w-[384px] bg-[var(--White)] p-6 rounded-[20px] border-solid border border-[var(--Gray950)] shadow-black">
      <img
        className="rounded-[10px] h-[200px] object-cover"
        src={imgArticle}
        alt=""
      />
      <main className="flex flex-col gap-y-3 mt-6">
        <h3 className=" bg-[var(--Yellow)] py-1 px-3 w-fit text-[14px] rounded-[4px] text-[var(--Gray950)]">
          Learning
        </h3>
        <p className="text-[var(--Gray950)] text-[14px]">
          Published 21 Dec 2023
        </p>
        <h2 className="text-[24px] font-extrabold text-[var(--Gray950)] ">
          HTML & CSS foundations
        </h2>
        <p className="text-[16px] text-[var(--Gray500)]">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex gap-x-3 items-center">
          <img src={avatar} className="w-8 h-8" alt="" />
          <span className="text-[14px] text-[var(--Gray950)] font-extrabold ">
            Greg Hooper
          </span>
        </div>
      </main>
    </div>
  );
};

export default Card;
