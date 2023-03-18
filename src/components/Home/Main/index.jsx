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
          "https://a0.muscache.com/im/pictures/4935a274-0699-4540-8c78-f20ec6a44446.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/2afdcc80-a9b6-4f7c-a885-bd5bd8d7bbe7.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/33d6f560-506e-45d6-86a5-b9c57295ed25.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/515c5123-4d67-4579-8522-e69c5d5b071d.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/bf3e28c7-8960-4447-8b8b-dd0a513cb511.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/5be40ddd-37d0-45d0-8b5b-9ca21292c458.jpg?im_w=720",
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
