
import FeaturePlaylist from "@/components/featured/FeaturePlaylist";
import NewReleases from "@/components/albums/NewReleases";
import Songs from "@/components/recommendSongs/Songs";
const Home = () => {
  return (
    <section className="h-screen">
    <Songs/>
      {/* <FeaturePlaylist/>
      <NewReleases/> */}
    </section>
  );
};

export default Home;
