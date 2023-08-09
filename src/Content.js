import "./content.css";
import Destination from "./Destination";
import data from "./Data";
console.log(data);
const Content = function () {
  const allDestination = data.map((e) => {
    return (
      <Destination
        title={e.title}
        location={e.location}
        googleMapsUrl={e.googleMapsUrl}
        startDate={e.startDate}
        endDate={e.endDate}
        description={e.description}
        imageUrl={e.imageUrl}
      />
    );
  });
  return <div className="destinations">{allDestination}</div>;
};
export default Content;
