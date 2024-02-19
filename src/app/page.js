
import FeaturePlaylist from "@/components/featured/FeaturePlaylist";
import NewReleases from "@/components/albums/NewReleases";
const Home = () => {
  return (
    <section className="h-full">
      <FeaturePlaylist/>
      <NewReleases/>
    </section>
  );
};

export default Home;
