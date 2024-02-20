import FeaturePlaylist from "@/components/featured/FeaturePlaylist";
import NewReleases from "@/components/albums/NewReleases";
import Songs from "@/components/recommendSongs/Songs";
const Home = () => {
  return (
    <section className="h-full">
      <FeaturePlaylist />
      <NewReleases />
      <Songs />
    </section>
  );
};

export default Home;
