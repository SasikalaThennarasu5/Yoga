import React from "react";

const articles = [
  {
    id: 1,
    title: "Therapy Isn’t Just for Crisis—Here’s Why It Matters Every Day",
    date: "April 21 2025",
    image: "/src/assets/images/article1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Can Online Therapy Be as Effective? Here’s What Research Says",
    date: "April 14 2025",
    image: "/src/assets/images/article2.png",
    link: "#",
  },
  {
    id: 3,
    title: "Breaking the Stigma: Why Seeing a Therapist Is a Strength",
    date: "April 02 2025",
    image: "/src/assets/images/article3.png",
    link: "#",
  },
];

const LatestArticles = () => {
  return (
    <section className="py-12 bg-#feeeee font-robotoSerif">
      <div className="text-center mb-10">
        <p className="text-gray-500">From the Blog</p>
        <h2 className="text-2xl font-bold text-purple-800">Latest Articles</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-green-100 rounded-2xl p-4 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover transition duration-300 hover:brightness-110"
              />
            </div>
            <p className="text-gray-600 text-sm mt-4">
              News | {article.date}
            </p>
            <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
            <a
              href={article.link}
              className="inline-block mt-4 text-black hover:text-purple-700 font-medium"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
