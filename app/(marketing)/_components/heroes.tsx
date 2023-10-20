import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/documents.png"
            fill
            priority
            className="object-contain dark:hidden"
            alt="Documents"
            sizes="(min-width: 780px) 400px, (min-width: 640px) 350px, 300px"
          />
          <Image
            src="/documents-dark.png"
            fill
            priority
            className="object-contain hidden dark:block"
            alt="Documents"
            sizes="(min-width: 780px) 400px, (min-width: 640px) 350px, 300px"
          />
        </div>
        <div className="relative w-[350px] h-[350px] hidden md:block">
          <Image
            src="/reading.png"
            alt="Reading"
            fill
            priority
            className="object-contain dark:hidden"
          />
          <Image
            src="/reading-dark.png"
            alt="Reading"
            fill
            priority
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
