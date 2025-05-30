import Home from "./pages/home/home";

export async function generateMetadata({ params, searchParams }, parent) {
  const previousImages = (await parent).openGraph?.images || [];

  const name = searchParams.name || "You";
  return {
    title: `Thiệp cưới Linh - Dung | Kính Mời ${name}`,
    openGraph: {
      images: [
        "https://res.cloudinary.com/do6sozxbo/image/upload/v1748609871/wedding-linh-dung/hi3",
        ...previousImages,
      ],
    },
  };
}

export default function Page({ params, searchParams }) {
  // console.log(searchParams);
  return <Home />;
}
