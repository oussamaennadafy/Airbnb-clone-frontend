import Item from "../utilities/main/Item";

export default function Main() {
  return (
    <div className="h-screen max-w-screen bg-gray-300 p-8 grid grid-cols-4">
      <Item
        photos={[
          "https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/a0965aa5-3907-466e-b727-0900e2a7e8c7.jpeg?im_w=720",
        ]}
        location="Lac-Beauport, Canada"
        rating={4.98}
        views={4800}
        period="Feb 26 - Mar 4"
        price={379}
      />
    </div>
  );
}
