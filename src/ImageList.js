import swr from "swr";

const fetcher = (...args) =>
  fetch(...args).then((res) => {
    return res.json();
  });

export default function Coins() {
  const { data: res, error } = swr(
    "https://api.apiopen.top/api/getImages?page=0&size=10",
    fetcher,
    { suspense: true }
  );

  const list = res?.result?.list ?? [];
  if (error) return <div>failed to load</div>;

  return (
    <div>
      {list?.map((item) => (
        <h4 key={item.id}>{item.title}</h4>
      ))}
    </div>
  );
}
