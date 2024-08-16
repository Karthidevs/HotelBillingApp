import categories from "../Data/data.json";
import { ArrowForward } from "@mui/icons-material";

export const Categories = ({ addCategory }) => {
  const addCategories = (item) => {
    // move to app.js component
    addCategory(item);
  };

  return (
    <>
      <aside className="w-[300px] bg-amber-950 text-white h-[629px] overflow-hidden ">
        <ul className="flex-col block w-full space-y-20 font-semibold   mt-10 box-border ml-4">
          {categories.categories.map((items) => (
            <span
              onClick={() => addCategories(items)}
              key={items}
              className="flex cursor-pointer hover:underline "
            >
              <ArrowForward />
              <li>{items}</li>
            </span>
          ))}
        </ul>
      </aside>
    </>
  );
};
