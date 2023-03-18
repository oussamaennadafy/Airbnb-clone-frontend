import Item from "./Item";

export default function Main() {
  return (
    <main
      id="Main"
      className="min-h-screen max-w-screen p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-x-5 gap-y-10 mt-1"
    >
      <Item
        id={1}
        photos={[
          "https://a0.muscache.com/im/pictures/92b865b8-b2bf-4a4e-ae7f-5cb975e2e3e9.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/06ceceb1-919a-438a-a330-a72796b9753b.jpg?im_w=720",
        ]}
        location="Lac-Beauport, Canada"
        rating={4.98}
        views={4800}
        period="Feb 26 - Mar 4"
        price={379}
      />
      <Item
        id={2}
        photos={[
          "https://a0.muscache.com/im/pictures/92b865b8-b2bf-4a4e-ae7f-5cb975e2e3e9.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/06ceceb1-919a-438a-a330-a72796b9753b.jpg?im_w=720",
        ]}
        location="Lac-Beauport, Canada"
        rating={4.98}
        views={4800}
        period="Feb 26 - Mar 4"
        price={379}
      />
      <Item
        id={3}
        photos={[
          "https://a0.muscache.com/im/pictures/92b865b8-b2bf-4a4e-ae7f-5cb975e2e3e9.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/06ceceb1-919a-438a-a330-a72796b9753b.jpg?im_w=720",
        ]}
        location="Lac-Beauport, Canada"
        rating={4.98}
        views={4800}
        period="Feb 26 - Mar 4"
        price={379}
      />
      <Item
        id={4}
        photos={[
          "https://a0.muscache.com/im/pictures/92b865b8-b2bf-4a4e-ae7f-5cb975e2e3e9.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/06ceceb1-919a-438a-a330-a72796b9753b.jpg?im_w=720",
        ]}
        location="Lac-Beauport, Canada"
        rating={4.98}
        views={4800}
        period="Feb 26 - Mar 4"
        price={379}
      />
      <Item
        id={1}
        photos={[
          "https://a0.muscache.com/im/pictures/92b865b8-b2bf-4a4e-ae7f-5cb975e2e3e9.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/06ceceb1-919a-438a-a330-a72796b9753b.jpg?im_w=720",
        ]}
        location="Lac-Beauport, Canada"
        rating={4.98}
        views={4800}
        period="Feb 26 - Mar 4"
        price={379}
      />
    </main>
  );
}
