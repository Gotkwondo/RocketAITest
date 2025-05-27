import Image from "next/image";
import Image1 from "@/assets/Image1.svg";
import TextBubble from "@/components/TextBubble";

export default function Home() {
  return (
    <div className="max-w-md">
      {/* <div className=''> */}
      <Image src={Image1} alt="인트로 이미지" />
      <TextBubble position="down" text="안녕하세요! 반갑습니다.">
        {`이제 본격적으로\n${"OO"}님의 사주팔자를\n분석해볼 차례네요.`}
      </TextBubble>
      {/* </div> */}

      {/* <Image src={Text} alt='인트로 텍스트' /> */}
      {/* <TextBubble /> */}
    </div>
  );
}
