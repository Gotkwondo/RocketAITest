import Image from 'next/image';
import Bubble from "@/assets/Text.svg"

interface Props {
  position: "up" | "down";
  text: string;
  children?: React.ReactNode;
}

const TextBubble = ({ position, text, children }: Props) => {
  return (
    <>
      <div className="relative max-w-[257px] flex items-center justify-center">
        <Image
          src={Bubble}
          alt="텍스트 버블"
          // className="object-contain"
          className={``}
        ></Image>
        <span className="absolute top-[65px] 3xs:top-[75px] 2xs:top-[65px] whitespace-pre max-w-[150px] text-wrap text-[0.6rem] 3xs:text-xs 2xs:text-base text-center">
          {children}
        </span>
      </div>
    </>
  );
};

export default TextBubble;
// import Image from "next/image";
// import BubbleImage from "@/assets/Text.svg"; // png or svg 경로

// interface TextBubbleProps {
//   children?: React.ReactNode;
// }

// const TextBubble = ({ children }: TextBubbleProps) => {
//   return (
//     <div className="relative max-w-[257px] mx-auto">
//       {/* 말풍선 이미지 */}
//       <Image
//         src={BubbleImage}
//         alt="말풍선"
//         className="w-full h-auto"
//         priority
//       />

//       {/* 텍스트 오버레이 */}
//       <div className="absolute top-[50px] 3xs:top-[70px] 2xs:top-[65px] left-[10%] w-[80%] text-center text-sm sm:text-base leading-snug whitespace-pre-wrap break-keep">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default TextBubble;
