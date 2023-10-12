import React from "react";
import categories from "../../data/categories";
import favoriteCategories from "../../data/favorite-categories";
import Title from "../../Title";
function Category({ category }) {
  return (
    <div
      style={{ background: category.color }}
      className="rounded-md before:pt-[100%] before:block relative overflow-hidden"
    >
      <div className="absolute  inset-0">
        <h3 className="p-4 text-[2.5rem] tracking-tighter">{category.title}</h3>
        <img
          src={category.cover}
          className="w-[6.26rem] h-[6.25rem] rotate-[25deg] absolute translate-x-[18%] translate-y-[2%] bottom-0 right-0 ov shadow-spotify"
        ></img>
      </div>
    </div>
  );
}

function WideCategory({ category }) {
  return (
    <div
      style={{ background: category.color }}
      className="flex-shrink-0  rounded-lg relative overflow-hidden w-[27.375rem] h-[13.75rem] "
    >
      <div className="absolute  inset-0 owerflow-hidden">
        <h3 className="p-4 text-2xl tracking-tighter">{category.title}</h3>
        <img
          src={category.cover}
          className="w-32 h-32 rotate-[25deg] absolute translate-x-[18%] translate-y-[2%] bottom-0 right-0 ov shadow-spotify"
        ></img>
      </div>
    </div>
  );
}

function Search() {
  return (
    <>
      <section className="mb-4">
        <Title title="En çok dinlediğin türler" />
      </section>
      <div className="flex overflow-x overflow-y gap-6">
        {favoriteCategories.map((category) => (
          <WideCategory key={categories.id} category={category} />
        ))}
      </div>
      <section>
        {" "}
        <Title title="Hepsine göz at" />
      </section>
      <div className="grid grid-cols-5 gap-6">
        {categories.map((category) => (
          <Category key={categories.id} category={category} />
        ))}
      </div>
      ;
    </>
  );
}

export default Search;
