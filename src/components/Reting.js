import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";

const Reting = () => {
  return (
    <div className="flex items-center -ml-1">
      {Array.from({ length: 4 }).map((_, index) => (
        <StarIcon
          key={index}
          className="w-6 h-6 flex-shrink-0 text-yellow-500"
        />
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <OutlineStar
          key={index}
          className="w-6 h-6 flex-shrink-0 text-yellow-500"
        />
      ))}
    </div>
  );
};

export default Reting;
