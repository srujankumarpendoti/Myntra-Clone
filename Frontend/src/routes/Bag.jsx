import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => bagItems.includes(item.id));

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItem key={item.id} item={item} />
            ))}
          </div>
          <div className="bag-summary">
            <BagSummary />
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
